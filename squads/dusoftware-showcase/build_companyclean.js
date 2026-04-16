const fs = require('fs');
const path = require('path');

const runId = '2026-04-16-141200';
const outputDir = path.join(__dirname, 'output', runId, 'v1', 'html');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function template(num, bodyContent) {
  return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=Barlow:wght@400;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap');
    :root { 
        --brand-primary: #0EA5E9; 
        --brand-secondary: #0F172A; 
        --bg-dark: #0F172A; 
        --glass-bg: rgba(30, 41, 59, 0.7); 
        --glass-border: rgba(14, 165, 233, 0.2); 
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
        width: 1080px; height: 1350px; overflow: hidden; 
        background: var(--bg-dark); 
        font-family: 'Barlow', sans-serif; color: #FFFFFF; 
        display: flex; flex-direction: column; align-items: flex-start; 
        justify-content: space-between; padding: 100px 80px; position: relative; 
    }
    .bg-elements { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
    .bg-glow-1 { position: absolute; top: -300px; right: -300px; width: 1000px; height: 1000px; background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 60%); }
    .bg-glow-2 { position: absolute; bottom: -300px; left: -300px; width: 1000px; height: 1000px; background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 60%); }
    
    .header { width: 100%; position: relative; z-index: 10; margin-bottom: 40px; }
    .eyebrow { font-size: 20px; font-weight: 800; color: var(--brand-primary); text-transform: uppercase; letter-spacing: 12px; margin-bottom: 24px; display: inline-block; border-bottom: 2px solid rgba(14, 165, 233, 0.3); padding-bottom: 8px;}
    h2 { font-family: 'Inter', sans-serif; font-size: 90px; font-weight: 900; line-height: 0.95; letter-spacing: -3px; width: 900px; text-transform: none; }
    h2.giant { font-size: 115px; line-height: 0.9; }
    h2 em { font-style: normal; color: var(--brand-primary); text-shadow: 0 0 40px rgba(14, 165, 233, 0.4); }
    
    .bento-grid { width: 100%; height: 750px; display: grid; gap: 30px; z-index: 10; position: relative; }
    .grid-2 { grid-template-columns: 1fr 1fr; }
    .grid-hybrid { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
    .hybrid-large { grid-row: span 2; }
    
    .glass { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 40px; backdrop-filter: blur(40px); padding: 50px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
    .glass.accent { border-color: rgba(14, 165, 233, 0.4); background: rgba(14, 165, 233, 0.05); }
    
    .b-title { font-size: 18px; font-weight: 700; color: #94A3B8; text-transform: uppercase; letter-spacing: 4px; z-index: 5; position: relative; }
    .b-val { font-size: 64px; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-top: 15px; z-index: 5; position: relative; }
    .b-desc { font-size: 24px; color: #CBD5E1; line-height: 1.5; margin-top: 20px; font-weight: 400; }
    .accent .b-val { color: var(--brand-primary); }
    
    .footer { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; position: relative; z-index: 10; margin-top: auto;}
    .badge-pill { background: rgba(255,255,255,0.05); padding: 14px 28px; border-radius: 100px; font-weight: 700; font-size: 18px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 15px; text-transform: uppercase; letter-spacing: 2px;}
    .badge-logo { width: 24px; height: 24px; border-radius: 4px; object-fit: contain; }
    .footer-num { font-size: 80px; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; right: -20px; bottom: -20px; line-height: 1; }
    
    .mockup-img { width: 100%; height: 100%; object-fit: cover; border-radius: 30px; transform: perspective(1000px) rotateY(-5deg) rotateX(2deg); box-shadow: 20px 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
  </style>
</head>
<body>
  <div class="bg-elements"><div class="bg-glow-1"></div><div class="bg-glow-2"></div></div>
  ${bodyContent}
  <div class="footer">
    <div class="badge-pill"><img class="badge-logo" src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png" /> dusoftware.dev</div>
    <div class="footer-num">${num}</div>
  </div>
</body>
</html>`;
}

const slides = [
  // 01
  `<div class="header" style="margin-top: 50px;">
    <div class="eyebrow">Case: CompanyClean</div>
    <h2 class="giant">Água Cristalina<br><em>Garantida.</em></h2>
    <p style="font-size: 32px; color: #94A3B8; margin-top: 40px; font-weight: 400; max-width: 800px; line-height: 1.4;">Como elevamos o padrão digital da maior referência em manutenção de piscinas de Limeira/SP.</p>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr; height: 550px; margin-bottom: 50px;">
    <img class="mockup-img" style="object-position: top;" src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/companyclean/desktop.png" />
  </div>`,

  // 02
  `<div class="header">
    <div class="eyebrow">O Desafio</div>
    <h2>Não perca tempo com <em>água turva.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid" style="grid-template-rows: 1fr;">
    <div class="glass accent" style="grid-column: span 3; background: rgba(14, 165, 233, 0.05);">
      <div class="b-title" style="color: var(--brand-primary);">Lazer Interrompido</div>
      <div class="b-desc" style="font-size: 36px; line-height: 1.5; margin-top: 40px;">Uma piscina exige cuidado técnico rigoroso. O estresse da manutenção não deve impedir o seu lazer. Transformamos problemas físicos em soluções digitais simples.</div>
    </div>
  </div>`,

  // 03
  `<div class="header">
    <div class="eyebrow">Estratégia</div>
    <h2>Confiança que se vê no <em>primeiro clique.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass hybrid-large" style="padding: 0;">
      <img style="width: 100%; height: 100%; object-fit: cover; object-position: top; border-radius: 40px;" src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/companyclean/desktop.png" />
    </div>
    <div class="glass">
      <div class="b-title">Conversão</div>
      <div class="b-val" style="font-size: 40px;">Instantânea</div>
    </div>
    <div class="glass">
      <div class="b-title">UX</div>
      <div class="b-val" style="font-size: 40px;">Liquify</div>
    </div>
  </div>`,

  // 04
  `<div class="header">
    <div class="eyebrow">#1 em Limeira</div>
    <h2>A referência do <em>seu bairro.</em></h2>
  </div>
  <div class="bento-grid grid-2">
    <div class="glass accent">
        <div class="b-title">Autoridade</div>
        <div class="b-val" style="font-size: 80px;">Top #1</div>
        <div class="b-desc">Ressaltamos a segurança de contratar quem entende o clima e as águas da nossa região.</div>
    </div>
    <div class="glass" style="padding: 0;">
        <img class="mockup-img" style="transform: none; border-radius: 40px;" src="https://www.companycleanpiscinas.com.br/_next/image?url=%2Fgallery%2Fpiscina%20(4).webp&w=3840&q=75" />
    </div>
  </div>`,

  // 05
  `<div class="header">
    <div class="eyebrow">Serviços</div>
    <h2>Mais que limpeza, <em>é química.</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr;">
    <div class="glass dark" style="padding: 0; display: flex; flex-direction: row;">
        <div style="flex: 1.2; padding: 50px;">
            <div class="b-val">Tratamento de Precisão</div>
            <div class="b-desc">Da regulagem do pH à manutenção de bombas. Cada serviço detalhado com clareza e autoridade visual.</div>
        </div>
        <div style="flex: 1;">
            <img style="width: 100%; height: 100%; object-fit: cover;" src="https://www.companycleanpiscinas.com.br/_next/image?url=%2Fgallery%2Fpiscina%20(5).webp&w=3840&q=75" />
        </div>
    </div>
  </div>`,

  // 06
  `<div class="header">
    <div class="eyebrow">Resultados</div>
    <h2>A prova está <em>na água.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass hybrid-large accent">
        <div class="b-title">Visual Evidence</div>
        <div class="b-val">Portfólio de Resultados</div>
        <div class="b-desc">Uma galeria integrada que transforma o site em um showroom de transformações reais.</div>
    </div>
    <div class="glass" style="padding: 0;">
        <img style="width: 100%; height: 100%; object-fit: cover;" src="https://www.companycleanpiscinas.com.br/_next/image?url=%2Fgallery%2Fpiscina%20(6).webp&w=3840&q=75" />
    </div>
    <div class="glass" style="padding: 0;">
        <img style="width: 100%; height: 100%; object-fit: cover;" src="https://www.companycleanpiscinas.com.br/_next/image?url=%2Fgallery%2Fpiscina%20(7).webp&w=3840&q=75" />
    </div>
  </div>`,

  // 07
  `<div class="header">
    <div class="eyebrow">Acesso</div>
    <h2>Orçamento rápido, na <em>ponta dos dedos.</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr;">
    <div class="glass" style="display: flex; align-items: center; justify-content: center; flex-direction: row; gap: 80px;">
        <div style="width: 280px; height: 550px; border: 12px solid #1e293b; border-radius: 50px; background: #000; padding: 10px; overflow: hidden; position: relative;">
            <div style="width: 60px; height: 5px; background: #334155; margin: 5px auto 10px; border-radius: 10px; z-index: 10; position: relative;"></div>
            <img style="width: 100%; height: calc(100% - 20px); object-fit: cover; object-position: top; border-radius: 30px;" src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/companyclean/mobile.png" />
        </div>
        <div style="max-width: 400px;">
            <div class="b-val">Mobile First</div>
            <div class="b-desc">Interface otimizada para smartphones. O contato com o técnico está a apenas um toque de distância.</div>
        </div>
    </div>
  </div>`,

  // 08
  `<div class="header">
    <div class="eyebrow">Crescimento</div>
    <h2>Sempre no topo <em>das buscas.</em></h2>
  </div>
  <div class="bento-grid grid-2">
    <div class="glass shadow-2xl">
        <div class="b-title">Local SEO</div>
        <div class="b-val">Visibilidade Garantida</div>
        <div class="b-desc">Estruturamos a presença digital para que a CompanyClean seja a escolha nº1 em Limeira.</div>
    </div>
    <div class="glass accent">
        <div class="b-title">Keywords</div>
        <div style="font-family: 'JetBrains Mono'; font-size: 20px; color: var(--brand-primary); margin-top: 20px;">"Piscineiro Limeira"<br>"Limpeza de Piscinas"</div>
    </div>
  </div>`,

  // 09
  `<div class="header" style="margin-top: 150px;">
    <div class="eyebrow">Nossa Filosofia</div>
    <h2 class="giant">Mais que suporte.<br>O <em>Standard de Ouro</em> do Lazer.</h2>
    <p style="font-size: 32px; color: #94A3B8; margin-top: 40px;">Entregamos a tranquilidade de uma água impecável para sua família.</p>
  </div>`,

  // 10
  `<div class="header" style="margin-top: 150px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center;">
    <h2 style="width: 100%; text-align: center;">Sua piscina pronta<br>para o <em>sol hoje?</em></h2>
    <div style="margin-top: 80px; background: var(--brand-primary); color: #FFF; padding: 24px 60px; font-size: 32px; font-weight: 800; border-radius: 100px; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 20px 40px rgba(14, 165, 233, 0.3);">Agende via WhatsApp</div>
    <p style="margin-top: 30px; font-size: 24px; color: #94A3B8;">Link na nossa biografia.</p>
  </div>`
];

slides.forEach((content, i) => {
  const num = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(outputDir, `slide-${num}.html`), template(num, content));
});
console.log('HTMLs Liquid Mirror reconstruídos com prints reais da interface.');
