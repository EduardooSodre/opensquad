const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const INPUT_DIR = path.join(__dirname, 'output', 'stories', 'v1');
const OUTPUT_DIR = path.join(__dirname, 'export-stories-png');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

(async () => {
  console.log('Iniciando captura de Stories para Instagram...');
  const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--allow-file-access-from-files', '--enable-local-file-accesses', '--disable-web-security']
  });
  const page = await browser.newPage();
  
  // Instagram vertical size is 1080x1920. Scale 2 for HD.
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 2 }); 

  for (let i = 1; i <= 5; i++) {
    const slideId = i.toString().padStart(2, '0');
    console.log(`Renderizando Story ${slideId}...`);
    const fileUrl = `file://${path.join(INPUT_DIR, `story-${slideId}.html`).replace(/\\/g, '/')}`;
    
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: path.join(OUTPUT_DIR, `story-${slideId}.png`) });
  }

  await browser.close();
  console.log('Capturas de Stories concluídas. Arquivos salvos em:', OUTPUT_DIR);
})();
