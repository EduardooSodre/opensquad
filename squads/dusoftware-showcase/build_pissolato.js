const fs = require('fs');
const path = require('path');

const runDir = '2026-04-16-133100';
const outputDir = path.join(__dirname, 'output', runDir, 'v1', 'html');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function template(num, bodyContent) {
  return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;0,900;1,900&family=JetBrains+Mono:wght@400;700&family=Bebas+Neue&family=Barlow:wght@400;600;700;800&display=swap');
    :root { 
        --brand-primary: #00D4FF; 
        --brand-secondary: #0D1530; 
        --bg-dark: #04060D; 
        --glass-bg: rgba(8, 12, 24, 0.8); 
        --glass-border: rgba(0, 212, 255, 0.15); 
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
    .bg-glow-1 { position: absolute; top: -300px; right: -300px; width: 1000px; height: 1000px; background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 60%); }
    .bg-glow-2 { position: absolute; bottom: -300px; left: -300px; width: 800px; height: 800px; background: radial-gradient(circle, rgba(13, 21, 48, 0.4) 0%, transparent 60%); }
    
    .header { width: 100%; position: relative; z-index: 10; margin-bottom: 40px; }
    .eyebrow { font-size: 20px; font-weight: 800; color: var(--brand-primary); text-transform: uppercase; letter-spacing: 12px; margin-bottom: 24px; display: inline-block; border-bottom: 2px solid rgba(0, 212, 255, 0.3); padding-bottom: 8px;}
    h2 { font-family: 'Bebas Neue', cursiva; font-size: 90px; font-weight: 400; line-height: 0.95; letter-spacing: 1px; width: 900px; text-transform: uppercase; }
    h2.giant { font-size: 130px; line-height: 0.85; }
    h2 em { font-style: normal; color: var(--brand-primary); text-shadow: 0 0 30px rgba(0, 212, 255, 0.4); }
    
    .bento-grid { width: 100%; height: 700px; display: grid; gap: 30px; z-index: 10; position: relative; }
    .grid-2 { grid-template-columns: 1fr 1fr; }
    .grid-hybrid { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
    .hybrid-large { grid-row: span 2; }
    
    .glass { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 32px; backdrop-filter: blur(20px); padding: 50px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
    .glass.accent { border-color: rgba(0, 212, 255, 0.3); background: rgba(0, 212, 255, 0.05); }
    
    .b-title { font-size: 18px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 4px; z-index: 5; position: relative; }
    .b-val { font-size: 60px; font-weight: 800; color: #FFFFFF; line-height: 1.1; margin-top: 15px; z-index: 5; position: relative; font-family: 'Bebas Neue'; }
    .b-desc { font-size: 24px; color: #D1D5DB; line-height: 1.5; margin-top: 20px; font-weight: 400; }
    .accent .b-val { color: var(--brand-primary); }
    
    .footer { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; position: relative; z-index: 10; margin-top: auto;}
    .badge-pill { background: rgba(255,255,255,0.05); padding: 14px 28px; border-radius: 100px; font-weight: 700; font-size: 18px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 15px; text-transform: uppercase; letter-spacing: 2px;}
    .badge-logo { width: 24px; height: 24px; border-radius: 4px; object-fit: contain; }
    .footer-num { font-size: 80px; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; right: -20px; bottom: -20px; line-height: 1; }
    
    .mockup-container { width: 100%; height: 100%; overflow: hidden; border-radius: 16px; transform: perspective(1000px) rotateY(-10deg) rotateX(5deg); box-shadow: 20px 20px 60px rgba(0,0,0,0.8); }
    .floating-icon { font-size: 120px; line-height: 1; align-self: flex-end; opacity: 0.8; filter: drop-shadow(0 0 40px rgba(0,212,255,0.4)); margin-top: auto;}
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
    <div class="eyebrow">Case Study: Pissolato</div>
    <h2 class="giant">Precisão em<br><em>cada Pixel.</em></h2>
    <p style="font-size: 32px; color: #D1D5DB; margin-top: 40px; font-weight: 400; max-width: 800px; line-height: 1.4;">Como transformamos a autoridade da Pissolato Painéis em um ativo digital de elite com Next.js 14.</p>
  </div>`,

  // 02
  `<div class="header">
    <div class="eyebrow">O Desafio</div>
    <h2>Carregamento lento <em>mata</em> a autoridade.</h2>
  </div>
  <div class="bento-grid grid-hybrid" style="grid-template-rows: 1fr;">
    <div class="glass" style="grid-column: span 3; background: #000;">
      <div class="b-title" style="color: #F43F5E;">O Custo da Fricção</div>
      <div class="b-desc" style="font-size: 36px; line-height: 1.5; margin-top: 40px;">Projetos de infraestrutura exigem robustez. No digital, essa robustez frequentemente se traduz em lentidão. Nosso alvo: Zero Fricção.</div>
    </div>
  </div>`,

  // 03
  `<div class="header">
    <div class="eyebrow">Arquitetura</div>
    <h2>Engenharia de Software de <em>Precisão.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass hybrid-large accent">
      <div class="b-title">Modern Stack</div>
      <div class="b-val">Next.js 14 + Framer Motion</div>
      <div class="b-desc">Uma fundação sólida para animações fluidas e performance bruta, sem perdas de autoridade.</div>
    </div>
    <div class="glass">
        <div class="b-title">Performance</div>
        <div class="b-val" style="font-size: 40px;">Rigorosa</div>
    </div>
    <div class="glass">
        <div class="b-title">Scalability</div>
        <div class="b-val" style="font-size: 40px;">Pronta</div>
    </div>
  </div>`,

  // 04
  `<div class="header">
    <div class="eyebrow">Velocidade</div>
    <h2>LCP Otimizado.<br><em>Zero Espera.</em></h2>
  </div>
  <div class="bento-grid grid-2">
    <div class="glass accent">
        <div class="b-title">Resultado</div>
        <div class="b-val" style="font-size: 110px;">-1.5s</div>
        <div class="b-desc">No carregamento crítico. O site responde instantaneamente, como a confiança na marca.</div>
    </div>
    <div class="glass">
        <div class="b-title">Google PageSpeed</div>
        <div class="b-val" style="font-size: 90px; color: #10B981;">100/100</div>
    </div>
  </div>`,

  // 05
  `<div class="header">
    <div class="eyebrow">UI/UX</div>
    <h2>Brutalismo Industrial <em>Refinado.</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr;">
    <div class="glass dark" style="padding: 60px;">
        <div style="display: flex; gap: 40px; align-items: center;">
            <div style="font-family: 'Bebas Neue'; font-size: 150px; color: var(--brand-primary);">Aa</div>
            <div>
                <div class="b-val">Bebas Neue & Barlow</div>
                <div class="b-desc">Uma tipografia que carrega o peso do setor, com a elegância do Digital Moderno.</div>
            </div>
        </div>
    </div>
  </div>`,

  // 06
  `<div class="header">
    <div class="eyebrow">Autonomia</div>
    <h2>Controle total nas <em>suas mãos.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass hybrid-large">
        <div class="b-title">Custom CMS</div>
        <div class="b-val">Painel Administrativo</div>
        <div class="b-desc">O cliente gerencia Hero, Serviços e Portfólio com um clique. Autonomia total via Supabase.</div>
    </div>
    <div class="glass accent">
        <div class="b-title">Database</div>
        <div class="b-val" style="font-size: 40px;">Real-time</div>
    </div>
    <div class="glass">
        <div class="b-title">Security</div>
        <div class="b-val" style="font-size: 40px;">Enterprise</div>
    </div>
  </div>`,

  // 07
  `<div class="header">
    <div class="eyebrow">Responsividade</div>
    <h2>Autoridade na <em>palma da mão.</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr;">
    <div class="glass" style="display: flex; align-items: center; justify-content: center;">
        <div style="width: 300px; height: 500px; border: 8px solid #222; border-radius: 40px; background: #000; position: relative;">
            <div style="width: 100px; height: 4px; background: #333; position: absolute; top: 15px; left: 100px; border-radius: 10px;"></div>
            <div style="margin-top: 50px; padding: 20px;">
                <div style="width: 40px; height: 5px; background: var(--brand-primary); margin-bottom: 10px;"></div>
                <div style="width: 100%; height: 20px; background: #333; margin-bottom: 20px;"></div>
                <div style="width: 80%; height: 200px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 10px;"></div>
            </div>
        </div>
        <div style="margin-left: 60px;">
            <div class="b-val">Mobile First</div>
            <div class="b-desc">Experiência impecável em qualquer device. Do outdoor físico ao smartphone.</div>
        </div>
    </div>
  </div>`,

  // 08
  `<div class="header">
    <div class="eyebrow">Visibilidade</div>
    <h2>Encontrado por <em>quem importa.</em></h2>
  </div>
  <div class="bento-grid grid-2">
    <div class="glass accent">
        <div class="b-title">SEO</div>
        <div class="b-val">Growth Strategy</div>
        <div class="b-desc">Metadados estruturados e SEO semântico. Não é apenas beleza; é alcance estratégico.</div>
    </div>
    <div class="glass">
        <div class="b-title">Tags</div>
        <div class="b-desc" style="font-family: 'JetBrains Mono'; font-size: 20px; color: #A78BFA;">&lt;meta property="og:title" content="Pissolato Painéis" /&gt;</div>
    </div>
  </div>`,

  // 09
  `<div class="header" style="margin-top: 150px;">
    <div class="eyebrow">Nossa Filosofia</div>
    <h2 class="giant">Mais que apenas um site.<br>Criamos <em>Ativos Digitais.</em></h2>
    <p style="font-size: 32px; color: #9CA3AF; margin-top: 40px;">Software de elite para quem domina o seu mercado.</p>
  </div>`,

  // 10
  `<div class="header" style="margin-top: 150px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center;">
    <div class="floating-icon" style="margin: 0 auto 40px; font-size: 80px;">🚀</div>
    <h2 style="width: 100%; text-align: center;">Pronto para elevar<br>o seu <em>próximo nível?</em></h2>
    <div style="margin-top: 80px; background: var(--brand-primary); color: #000; padding: 24px 60px; font-size: 32px; font-weight: 800; border-radius: 100px; text-transform: uppercase; letter-spacing: 2px;">Consultoria Técnica</div>
    <p style="margin-top: 30px; font-size: 24px; color: #9CA3AF;">Link na nossa biografia.</p>
  </div>`
];

slides.forEach((content, i) => {
  const num = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(outputDir, `slide-${num}.html`), template(num, content));
});
console.log('HTMLs de renderização espacial gerados com sucesso.');
