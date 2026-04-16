require('dotenv').config({ path: '../../.env' });
const express = require('express');
const localtunnel = require('localtunnel');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const IG_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID;
const exportDir = path.join(__dirname, 'output', '2026-04-16-141200', 'v1', 'png');
const GRAPH_API = 'https://graph.facebook.com/v20.0'; 
const PORT = 3060; 

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
    console.error(`Erro ao criar item para ${imageUrl}:`, error.response?.data || error.message);
    throw error;
  }
}

async function waitForItemStatus(containerId) {
  let delay = 2000;
  for (let i = 0; i < 10; i++) {
    try {
      const response = await axios.get(`${GRAPH_API}/${containerId}`, {
        params: { fields: 'status_code', access_token: IG_TOKEN }
      });
      const status = response.data.status_code;
      if (status === 'FINISHED') return true;
      if (status === 'ERROR') throw new Error(`Status de erro no container ${containerId}`);
    } catch(e) {}
    await new Promise(r => setTimeout(r, delay));
  }
}

async function run() {
  const app = express();
  app.use(express.static(exportDir));
  
  const server = app.listen(PORT, async () => {
    console.log(`Server rodando na porta ${PORT}`);
    
    let tunnel;
    try {
        tunnel = await localtunnel({ port: PORT });
        console.log(`Túnel criado: ${tunnel.url}`);
        
        const childIds = [];
        const files = fs.readdirSync(exportDir).filter(f => f.endsWith('.png')).sort();
        
        for (const file of files) {
            const publicUrl = `${tunnel.url}/${file}`;
            console.log(`Processando slide: ${file}`);
            const containerId = await createCarouselItem(publicUrl);
            await waitForItemStatus(containerId);
            childIds.push(containerId);
            console.log(` ✅ Item criado: ${containerId}`);
        }
        
        console.log('Criando Carousel master container...');
        const captionText = `Água Cristalina Garantida: Onde a química encontra o pixel. 🌊🧪\n\nNo portfólio de hoje, apresentamos o projeto @companycleanpiscinas. Nosso objetivo foi levar o profissionalismo impecável da maior referência de Limeira/SP para o ambiente digital, focando em confiança e conversão.\n\nO que entregamos para a CompanyClean:\n💎 Visual "Crystal Clear": Uma interface hidrocêntrica que transparece limpeza e segurança.\n📱 Mobile Experience: Orçamento instantâneo na palma da mão para quem busca praticidade.\n📈 Domínio Local: SEO estratégico posicionado para liderar o mercado de Limeira.\n\nNa Du-Software, transformamos operações físicas em Ativos Digitais de alta performance. O lazer da sua família merece esse padrão de excelência.\n\nPronto para digitalizar o seu sucesso? 🚀\nLink na Bio.\n\n#PiscineiroLimeira #CompanyClean #DuSoftware #AtivosDigitais #HighPerformance #LocalSEO #PoolMaintenance`;
        
        const response = await axios.post(`${GRAPH_API}/${IG_USER_ID}/media`, {
          media_type: 'CAROUSEL',
          caption: captionText,
          children: childIds.join(','),
          access_token: IG_TOKEN
        });
        const carouselId = response.data.id;
        
        console.log('Aguardando processamento do Instagram...');
        await waitForItemStatus(carouselId);
        await new Promise(r => setTimeout(r, 5000));
        
        console.log('Publicando o carrossel no feed...');
        const pubResponse = await axios.post(`${GRAPH_API}/${IG_USER_ID}/media_publish`, {
          creation_id: carouselId,
          access_token: IG_TOKEN
        });
        
        console.log(`\n🎉 POST PUBLICADO COM SUCESSO! ID: ${pubResponse.data.id} 🎉`);
    } catch (e) {
        console.error("ERRO FATAL:", e.response?.data || e.message);
    } finally {
        if(tunnel) tunnel.close();
        server.close();
        console.log("Servidor e túnel encerrados.");
    }
  });
}

run();
