const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const SLIDES_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/slides');
const OUTPUT_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/png');

async function exportSlides() {
  // Cria a pasta de saída se não existir
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const slides = Array.from({ length: 10 }, (_, i) => `slide-0${i + 1}`.replace('slide-010', 'slide-10'));
  
  for (const slide of slides) {
    const htmlPath = path.join(SLIDES_DIR, `${slide}.html`);
    const pngPath = path.join(OUTPUT_DIR, `${slide}.png`);

    if (!fs.existsSync(htmlPath)) {
      console.warn(`⚠️  ${slide}.html não encontrado, pulando...`);
      continue;
    }

    const page = await browser.newPage();

    // Tamanho Instagram square 1:1 (1080x1080)
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });

    const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    // Aguarda fontes e animações carregarem
    await new Promise(r => setTimeout(r, 1500));

    await page.screenshot({
      path: pngPath,
      type: 'png',
      clip: { x: 0, y: 0, width: 1080, height: 1080 }
    });

    console.log(`✅ Exportado: ${slide}.png`);
    await page.close();
  }

  await browser.close();
  console.log(`\n🎉 Todos os slides exportados para:\n   ${OUTPUT_DIR}`);
}

exportSlides().catch(err => {
  console.error('❌ Erro ao exportar slides:', err);
  process.exit(1);
});
