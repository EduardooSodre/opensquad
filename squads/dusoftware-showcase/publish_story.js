require('dotenv').config({ path: '../../.env' });
const axios = require('axios');
const localtunnel = require('localtunnel');
const express = require('express');
const path = require('path');

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID;
const PORT = 3070;

const app = express();
app.use(express.static(path.join(__dirname, 'export-stories-png')));

let server;

async function publishStory() {
    server = app.listen(PORT, async () => {
        console.log(`Server de Stories rodando na porta ${PORT}`);
        let tunnel;
        try {
            tunnel = await localtunnel({ port: PORT, local_host: 'localhost' });
            console.log(`Túnel criado: ${tunnel.url}`);

            const storyUrl = `${tunnel.url}/story-01.png`;
            console.log(`Publicando Story 01: ${storyUrl}`);

            // 1. Cria Container do tipo STORIES
            const createResponse = await axios.post(`https://graph.facebook.com/v20.0/${IG_USER_ID}/media`, null, {
                params: {
                    image_url: storyUrl,
                    media_type: 'STORIES',
                    access_token: ACCESS_TOKEN
                }
            });

            const creationId = createResponse.data.id;
            console.log("✅ Container Story criado:", creationId);

            // Time de processamento da Meta
            await new Promise(r => setTimeout(r, 10000));

            // 2. Publica o Story
            const publishResponse = await axios.post(`https://graph.facebook.com/v20.0/${IG_USER_ID}/media_publish`, null, {
                params: {
                    creation_id: creationId,
                    access_token: ACCESS_TOKEN
                }
            });

            console.log("🔥 Story publicado com sucesso! ID:", publishResponse.data.id);
        } catch (error) {
            console.error("Erro ao publicar Story:", error.response ? error.response.data : error.message);
        } finally {
            if (tunnel) tunnel.close();
            server.close();
            process.exit(0);
        }
    });
}

publishStory();
