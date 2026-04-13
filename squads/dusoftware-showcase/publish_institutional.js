require('dotenv').config({ path: '../../.env' });
const express = require('express');
const localtunnel = require('localtunnel');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const IG_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID;
const exportDir = path.join(__dirname, 'export-institutional-png');
const GRAPH_API = 'https://graph.facebook.com/v20.0'; 
const PORT = 3060; // Use a different port to avoid conflicts

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

async function run() {
  const app = express();
  app.use(express.static(exportDir));
  
  const server = app.listen(PORT, async () => {
    console.log(`Server rodando Institucional na porta ${PORT}`);
    
    let tunnel;
    try {
        tunnel = await localtunnel({ port: PORT });
        console.log(`Túnel criado: ${tunnel.url}`);
        
        const childIds = [];
        const files = fs.readdirSync(exportDir).filter(f => f.endsWith('.png')).sort();
        
        for (const file of files) {
            const publicUrl = `${tunnel.url}/${file}`;
            console.log(`Processando ${publicUrl}`);
            const containerId = await createCarouselItem(publicUrl);
            await waitForItemStatus(containerId);
            childIds.push(containerId);
            console.log(` ✅ Item criado: ${containerId}`);
        }
        
        console.log('Criando Carousel master container...');
        const captionText = `🚀 Não entregamos apenas código. Entregamos ativos digitais.\n\nNa Du-Software, unimos UI/UX Premium com a infraestrutura escalável do Next.js e Node para construir softwares que convertem, escalam e dominam o mercado.\n\nE-commerces automatizados, SaaS e portais.\nConheça nosso processo. ✦\n\n#SoftwareDevelopment #TechAgency #NextJS #UIXP #GestaoTech #Programming #WebApps #DuSoftware`;
        
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
        
        console.log(`\n🎉 CARROSSEL INSTITUCIONAL PUBLICADO! ID: ${pubResponse.data.id} 🎉`);
    } catch (e) {
        console.error("ERRO FATAL:", e);
    } finally {
        if(tunnel) tunnel.close();
        server.close();
    }
  });
}

run();
