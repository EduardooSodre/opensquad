const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'output', '2026-04-13-024211', 'slides', 'v1');
const exportDir = path.join(__dirname, 'export-png');

if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

(async () => {
  console.log('Iniciando captura de telas com Puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 }); // Scale 2x for HQ

  for (let i = 1; i <= 10; i++) {
    const slideNumber = i.toString().padStart(2, '0');
    const slideFile = path.join(slidesDir, `slide-${slideNumber}.html`);
    
    if (fs.existsSync(slideFile)) {
      console.log(`Renderizando Slide ${slideNumber}...`);
      await page.goto(`file:///${slideFile.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
      await page.screenshot({ 
        path: path.join(exportDir, `slide-${slideNumber}.png`),
        type: 'png'
      });
      console.log(`Slide ${slideNumber} finalizado!`);
    } else {
      console.log(`Slide ${slideNumber} não encontrado.`);
    }
  }

  await browser.close();
  console.log('Todas as capturas finalizadas. Salvas em: ' + exportDir);
})();
