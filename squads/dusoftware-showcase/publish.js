require('dotenv').config({ path: '../../.env' });
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const IMGBB_KEY = process.env.IMGBB_API_KEY;
const IG_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID;

const exportDir = path.join(__dirname, 'export-png');
const GRAPH_API = 'https://graph.facebook.com/v20.0'; // using v20.0

async function uploadToImgBB(filePath) {
  try {
    const base64Image = fs.readFileSync(filePath, { encoding: 'base64' });
    const formData = new FormData();
    formData.append('key', IMGBB_KEY);
    formData.append('image', base64Image);
    
    const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
      headers: formData.getHeaders()
    });
    return response.data.data.url;
  } catch (error) {
    console.error(`Erro ao fazer upload no ImgBB (${path.basename(filePath)}):`, error.response?.data || error.message);
    throw error;
  }
}

async function createCarouselItem(imageUrl) {
  try {
    const response = await axios.post(`${GRAPH_API}/${IG_USER_ID}/media`, {
      image_url: imageUrl,
      media_type: 'IMAGE',
      is_carousel_item: true,
      access_token: IG_TOKEN
    });
    return response.data.id;
  } catch (error) {
    console.error('Erro ao criar item do carrossel no Instagram:', error.response?.data || error.message);
    throw error;
  }
}

async function waitForItemStatus(containerId) {
  // Sometimes Meta takes a few seconds to process an image before it can be used in a carousel.
  let delay = 1000;
  for (let i = 0; i < 5; i++) {
    try {
      const response = await axios.get(`${GRAPH_API}/${containerId}`, {
        params: { fields: 'status_code', access_token: IG_TOKEN }
      });
      const status = response.data.status_code;
      if (status === 'FINISHED') return true;
    } catch(e) {}
    await new Promise(r => setTimeout(r, delay));
  }
}

async function publishCarousel() {
  console.log('Iniciando script de publicação automatizada...');
  const childIds = [];

  // Sort logically slide-01 to slide-10
  const files = fs.readdirSync(exportDir)
                  .filter(f => f.endsWith('.png'))
                  .sort();

  if (files.length === 0) {
    console.error("Nenhum slide encontrado na pasta export-png.");
    return;
  }

  const captionText = `🌟 A Rafa Criou - Automação & Scalability Elevados 🌟

Apresentamos os resultados do nosso mais recente projeto pela Du-Software. Transformamos a operação em uma plataforma Cloud com Next.js, desenhada para máxima performance e mobile focus.

Arrasta pro lado e veja como criamos softwares de elite que convertem! 🚀

#DesenvolvimentoSoftware #NextJS #UIUXPremium #DuSoftware #Tecnologia #WebDev #EcommerceAutomático`;

  for (const file of files) {
    const filePath = path.join(exportDir, file);
    console.log(`\n===================`);
    console.log(`Processando ${file}`);
    
    console.log(`1. Fazendo upload para a nuvem (ImgBB)...`);
    const publicUrl = await uploadToImgBB(filePath);
    console.log(`   -> URL Pública: ${publicUrl}`);
    
    console.log(`2. Criando Container de Carrossel no Instagram...`);
    const containerId = await createCarouselItem(publicUrl);
    console.log(`   -> Container ID: ${containerId}`);
    
    await waitForItemStatus(containerId);
    childIds.push(containerId);
  }

  console.log('\n===================');
  console.log('Todos os slides foram processados.');
  console.log('3. Criando a estrutura final de Carrossel (Agrupando 10 imagens)...');
  
  let carouselId;
  try {
    const response = await axios.post(`${GRAPH_API}/${IG_USER_ID}/media`, {
      media_type: 'CAROUSEL',
      caption: captionText,
      children: childIds.join(','),
      access_token: IG_TOKEN
    });
    carouselId = response.data.id;
    console.log(`   -> Container do Carrossel Criado ID: ${carouselId}`);
  } catch (error) {
    console.error('Erro ao agrupar carrossel:', error.response?.data || error.message);
    return;
  }

  console.log('Aguardando servidor do Instagram processar o agrupamento...');
  await waitForItemStatus(carouselId);
  await new Promise(r => setTimeout(r, 5000));

  console.log('4. Solicitando publicação ao vivo...');
  try {
    const pubResponse = await axios.post(`${GRAPH_API}/${IG_USER_ID}/media_publish`, {
      creation_id: carouselId,
      access_token: IG_TOKEN
    });
    console.log(`\n✅ PUBLICAÇÃO BEM-SUCEDIDA! ID da postagem: ${pubResponse.data.id}`);
  } catch (error) {
    console.error('Erro crítico na postagem final:', error.response?.data || error.message);
  }
}

publishCarousel().then(() => console.log('Script finalizado.')).catch(e => console.log('Erro GERAL:', e));
