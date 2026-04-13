const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

// ============================================================
// CONFIGURAÇÕES
// ============================================================
const SLIDES_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/slides');
const PNG_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/png');
const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IMGBB_API_KEY = process.env.IMGBB_API_KEY;

const CAPTION = `🚀 Autyro: a plataforma SaaS que transforma a gestão do seu negócio.

Automatize processos, reduza tarefas manuais e tome decisões mais rápidas com dados em tempo real. Tudo em um só lugar.

✅ Dashboard inteligente
✅ Automação de fluxos de trabalho  
✅ Gestão de clientes e leads
✅ Integrações poderosas

💡 Conheça em: autyro.com.br

#Autyro #SaaS #Tecnologia #Automação #Produtividade #GestãoEmpresarial #Startup #Software #Inovação #Dusoftware #DesenvolvimentoWeb #TransformaçãoDigital`;

// ============================================================
// PASSO 1: Exportar HTMLs para PNGs
// ============================================================
async function exportSlides() {
  console.log('\n📸 PASSO 1: Exportando slides HTML → PNG...\n');

  if (!fs.existsSync(PNG_DIR)) {
    fs.mkdirSync(PNG_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const slideNames = [];
  for (let i = 1; i <= 10; i++) {
    const name = `slide-${String(i).padStart(2, '0')}`;
    slideNames.push(name);
  }

  for (const slide of slideNames) {
    try {
      const htmlPath = path.join(SLIDES_DIR, `${slide}.html`);
      const pngPath = path.join(PNG_DIR, `${slide}.png`);

      if (!fs.existsSync(htmlPath)) {
        console.warn(`⚠️  ${slide}.html não encontrado, pulando...`);
        continue;
      }

      const page = await browser.newPage();

      // Formato nativo do Instagram sem scaling gigante para não estourar o limite da API do Facebook
      await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

      const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
      await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

      // Força apenas as dimensões externas e o fundo
      await page.addStyleTag({
        content: `
          html, body {
            width: 1080px !important;
            height: 1350px !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
            background-color: #06070B !important;
          }
        `
      });

      // Aguarda fontes e renderização (3s é seguro)
      await new Promise(r => setTimeout(r, 3000));

      await page.screenshot({
        path: pngPath,
        type: 'png',
        omitBackground: false
      });

      console.log(`   ✅ ${slide}.png exportado`);
      await page.close();
    } catch (err) {
      console.error(`   ❌ Erro no export de ${slide}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('\n   🎉 Todos os PNGs processados!\n');
  return slideNames;
}

// ============================================================
// PASSO 2: Fazer upload dos PNGs para o ImgBB
// ============================================================
async function uploadToImgBB(slideNames) {
  console.log('☁️  PASSO 2: Fazendo upload para ImgBB...\n');
  const urls = [];

  for (const slide of slideNames) {
    const pngPath = path.join(PNG_DIR, `${slide}.png`);

    if (!fs.existsSync(pngPath)) {
      console.warn(`⚠️  PNG ${slide} não encontrado, pulando upload...`);
      continue;
    }

    try {
      const imageBase64 = fs.readFileSync(pngPath, { encoding: 'base64' });

      const formData = new FormData();
      formData.append('key', IMGBB_API_KEY);
      formData.append('image', imageBase64);
      formData.append('name', slide);

      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: formData.getHeaders(),
        timeout: 30000
      });

      const url = response.data.data.url;
      urls.push(url);
      console.log(`   ✅ ${slide} → ${url}`);
    } catch (err) {
      console.error(`   ❌ Erro no upload de ${slide}: ${err.response?.data?.error?.message || err.message}`);
      throw new Error(`Falha crítica no upload do slide ${slide}`);
    }
  }

  console.log('\n   🎉 Todos os uploads concluídos com sucesso!\n');
  return urls;
}

// ============================================================
// PASSO 3: Criar containers individuais no Instagram
// ============================================================
async function createCarouselItems(imageUrls) {
  console.log('📦 PASSO 3: Criando containers individuais no Instagram...\n');
  const creationIds = [];
  const baseUrl = `https://graph.facebook.com/v25.0/${INSTAGRAM_USER_ID}/media`;

  for (let i = 0; i < imageUrls.length; i++) {
    const response = await axios.post(baseUrl, null, {
      params: {
        image_url: imageUrls[i],
        is_carousel_item: true,
        access_token: ACCESS_TOKEN
      }
    });
    creationIds.push(response.data.id);
    console.log(`   ✅ Slide ${i + 1} → Container ID: ${response.data.id}`);
    await new Promise(r => setTimeout(r, 1000)); // Rate limit
  }

  console.log('\n   🎉 Todos os containers criados!\n');
  return creationIds;
}

// ============================================================
// PASSO 4: Criar o container do carrossel
// ============================================================
async function createCarouselContainer(creationIds) {
  console.log('🎠 PASSO 4: Criando container do carrossel...\n');
  const baseUrl = `https://graph.facebook.com/v25.0/${INSTAGRAM_USER_ID}/media`;

  const response = await axios.post(baseUrl, null, {
    params: {
      media_type: 'CAROUSEL',
      caption: CAPTION,
      children: creationIds.join(','),
      access_token: ACCESS_TOKEN
    }
  });

  const carouselId = response.data.id;
  console.log(`   ✅ Container do carrossel criado → ID: ${carouselId}\n`);
  return carouselId;
}

// ============================================================
// PASSO 5: Publicar o carrossel
// ============================================================
async function publishCarousel(carouselId) {
  console.log('🚀 PASSO 5: Publicando carrossel no Instagram...\n');
  const baseUrl = `https://graph.facebook.com/v25.0/${INSTAGRAM_USER_ID}/media_publish`;

  const response = await axios.post(baseUrl, null, {
    params: {
      creation_id: carouselId,
      access_token: ACCESS_TOKEN
    }
  });

  console.log(`   🎉 PUBLICADO COM SUCESSO! Post ID: ${response.data.id}`);
  return response.data.id;
}

const sleep = (ms) => new Promise(Math.random, setTimeout(r, ms));

// ============================================================
// MAIN
// ============================================================
async function main() {
  console.log('=' .repeat(60));
  console.log('🤖 Autyro Instagram Carousel Publisher');
  console.log('=' .repeat(60));

  if (!INSTAGRAM_USER_ID || !ACCESS_TOKEN || !IMGBB_API_KEY) {
    console.error('❌ Variáveis de ambiente não encontradas! Verifique o .env');
    process.exit(1);
  }

  try {
    const slideNames = await exportSlides();
    const imageUrls = await uploadToImgBB(slideNames);
    
    console.log('\n   ⏳ Aguardando 5 segundos para CDN ImgBB sincronizar...');
    await new Promise(r => setTimeout(r, 5000));
    
    const creationIds = await createCarouselItems(imageUrls);
    
    console.log('\n   ⏳ Aguardando 10 segundos para Instagram processar os itens individuais...');
    await new Promise(r => setTimeout(r, 10000));
    
    const carouselId = await createCarouselContainer(creationIds);
    
    console.log('\n   ⏳ Aguardando 30 segundos para Instagram mesclar o carrossel. Não feche!');
    await new Promise(r => setTimeout(r, 30000));
    
    const postId = await publishCarousel(carouselId);

    console.log('\n' + '='.repeat(60));
    console.log(`✅ CARROSSEL PUBLICADO! ID final: ${postId}`);
    console.log('='.repeat(60));
  } catch (err) {
    console.error('\n❌ Erro:', err.response?.data || err.message);
    process.exit(1);
  }
}

main();
