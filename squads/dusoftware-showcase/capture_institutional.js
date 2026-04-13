const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'output', 'institutional', 'slides', 'v1');
const exportDir = path.join(__dirname, 'export-institutional-png');

if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

(async () => {
  console.log('Iniciando captura Institucional...');
  const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--allow-file-access-from-files', '--enable-local-file-accesses', '--disable-web-security']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 2 }); 

  for (let i = 1; i <= 10; i++) {
    const slideNumber = i.toString().padStart(2, '0');
    const slideFile = path.join(slidesDir, `slide-${slideNumber}.html`);
    
    if (fs.existsSync(slideFile)) {
      console.log(`Renderizando Institucional Slide ${slideNumber}...`);
      await page.goto(`file:///${slideFile.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });
      await page.screenshot({ 
        path: path.join(exportDir, `slide-${slideNumber}.png`),
        type: 'png'
      });
    }
  }

  await browser.close();
  console.log('Capturas Institucionais concluídas.');
})();
