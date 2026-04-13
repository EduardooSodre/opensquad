const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/slides');

const replacements = [
  { from: /height: 1440px/g, to: 'height: 1080px' },
  { from: /font-size: 76px/g, to: 'font-size: 60px' },
  { from: /font-size: 72px/g, to: 'font-size: 56px' },
  { from: /font-size: 66px/g, to: 'font-size: 52px' },
  { from: /font-size: 22px/g, to: 'font-size: 18px' },
  { from: /padding: 90px/g, to: 'padding: 60px' },
  { from: /padding: 60px 80px 80px/g, to: 'padding: 40px 60px 60px' },
  { from: /margin-top: 128px/g, to: 'margin-top: 40px' },
  { from: /margin-top: 20px/g, to: 'margin-top: 10px' },
  { from: /height: 680px/g, to: 'height: 480px' },
  { from: /height: 560px/g, to: 'height: 420px' },
  { from: /bottom: 56px/g, to: 'bottom: 40px' },
  { from: /top: 40px/g, to: 'top: 30px' },
  { from: /top: 44px/g, to: 'top: 30px' },
  { from: /left: 60px/g, to: 'left: 40px' },
  { from: /right: 60px/g, to: 'right: 40px' }
];

function fixFiles() {
  const files = fs.readdirSync(SLIDES_DIR).filter(f => f.endsWith('.html'));

  files.forEach(file => {
    const filePath = path.join(SLIDES_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');

    replacements.forEach(rep => {
      content = content.replace(rep.from, rep.to);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
  });
}

fixFiles();
