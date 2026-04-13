const fs = require('fs');
const path = require('path');

const RUN_ID = "2026-04-13-114510";
const SLIDES_DIR = path.resolve(__dirname, `../output/${RUN_ID}/slides/v1`);

const IMG_MOBILE_HOME = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_home_mobile_1776050491771.png";
const IMG_MOBILE_PRODUCT = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_product_mobile_1776050513213.png";
const IMG_DESKTOP_HOME = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_home_clean_1776049744550.png";
const LOGO_PATH = "file:///c:/Users/eddua/opensquad/squads/insta-project-carousel/logo-dusoftware.svg";

const slidesData = [
  {
    id: "01",
    badge: "Case Study",
    eyebrow: "A Rafa Criou",
    h2: "De Loja Manual a<br><em>E-commerce Global.</em>",
    bodyHtml: `
      <div class="glass-scene">
        <div class="floating-window desktop main"><img src="${IMG_DESKTOP_HOME}"></div>
        <div class="floating-window mobile sub"><img src="${IMG_MOBILE_HOME}"></div>
      </div>
    `
  },
  {
    id: "02",
    badge: "O Projeto",
    eyebrow: "A Rafa Criou",
    h2: "O E-commerce que<br><em>vende dormindo.</em>",
    bodyHtml: `
      <div class="bento-grid">
        <div class="bento-card large glass">
          <div class="card-label">Identidade</div>
          <div class="card-val">Papelaria Criativa & Teocrática</div>
          <div class="card-desc">Um nicho apaixonado que exigia uma experiência de compra tão delicada quanto os produtos.</div>
        </div>
        <div class="bento-card small glass teal">
          <div class="card-label">Atuação</div>
          <div class="card-val">Global</div>
        </div>
        <div class="bento-card small glass">
          <div class="card-label">Tech</div>
          <div class="card-val">Next.js</div>
        </div>
      </div>
    `
  },
  {
    id: "03",
    badge: "O Desafio",
    eyebrow: "Obstáculos",
    h2: "Escalar sem perder a<br><em>essência do artesanal.</em>",
    bodyHtml: `
      <div class="challenge-stack">
        <div class="challenge-item glass">
          <span class="icon">⚠️</span>
          <div class="item-text">Vendas manuais via direct (caótico)</div>
        </div>
        <div class="challenge-item glass warning">
          <span class="icon">⏳</span>
          <div class="item-text">Processo de checkout lento</div>
        </div>
        <div class="challenge-item glass">
          <span class="icon">🌏</span>
          <div class="item-text">Dificuldade em vender para o exterior</div>
        </div>
      </div>
    `
  },
  {
    id: "04",
    badge: "Mecanismo UX",
    eyebrow: "Ultra Responsive",
    h2: "Foco total na<br><em>experiência móvel.</em>",
    bodyHtml: `
      <div class="glass-scene center">
        <div class="floating-window mobile giant"><img src="${IMG_MOBILE_PRODUCT}"></div>
      </div>
    `
  },
  {
    id: "05",
    badge: "Performance",
    eyebrow: "Velocidade",
    h2: "Carregamento<br><em>Instantâneo.</em>",
    bodyHtml: `
      <div class="stats-scene">
        <div class="stat-circle glass teal">
          <div class="percent">100</div>
          <div class="label">SEO</div>
        </div>
        <div class="stat-circle glass">
          <div class="percent">0.8s</div>
          <div class="label">LCP</div>
        </div>
      </div>
    `
  },
  {
    id: "06",
    badge: "Funcionalidades",
    eyebrow: "Backend Elite",
    h2: "Gestão que<br><em>liberta o criador.</em>",
    bodyHtml: `
      <div class="feature-glass-list">
        <div class="feat-item glass"><span>Multilinguagem Automática</span></div>
        <div class="feat-item glass teal"><span>Checkout Internacional</span></div>
        <div class="feat-item glass"><span>SEO Dinâmico</span></div>
      </div>
    `
  },
  {
    id: "07",
    badge: "O Produto",
    eyebrow: "Resultados",
    h2: "Liberdade operacional e<br><em>Software de elite.</em>",
    bodyHtml: `
      <div class="glass-scene stack-v2">
        <div class="floating-window desktop back-v2"><img src="${IMG_DESKTOP_HOME}"></div>
        <div class="floating-window mobile front-v2"><img src="${IMG_MOBILE_HOME}"></div>
      </div>
    `
  },
  {
    id: "08",
    badge: "Métricas",
    eyebrow: "Technical Audit",
    h2: "Aprovação total em<br><em>todos os campos.</em>",
    bodyHtml: `
      <div class="audit-grid">
        <div class="audit-item glass good"><span>Performance: 100</span></div>
        <div class="audit-item glass good"><span>Access: 100</span></div>
        <div class="audit-item glass teal"><span>Best Practices: 100</span></div>
      </div>
    `
  },
  {
    id: "09",
    badge: "ROI",
    eyebrow: "Valor Real",
    h2: "Um ativo de<br><em>valor perpétuo.</em>",
    bodyHtml: `
      <div class="bento-grid">
        <div class="bento-card large glass teal">
          <div class="card-val">24/7</div>
          <div class="card-desc">Vendas automáticas no mundo todo, sem intervenção humana.</div>
        </div>
        <div class="bento-card small glass">
          <div class="card-val">+300%</div>
          <div class="card-desc">Eficiência operacional</div>
        </div>
      </div>
    `
  },
  {
    id: "10",
    badge: "Contact",
    eyebrow: "Próximo Passo",
    h2: "Sua visão merece um<br><em>Software de Elite.</em>",
    bodyHtml: `
      <div class="cta-scene">
        <div class="cta-card glass teal">
          <div class="cta-tag">Disponível agora</div>
          <div class="cta-title">Vamos construir o seu legado digital?</div>
          <div class="cta-button">Enviar Mensagem</div>
        </div>
      </div>
    `
  }
];

const template = (data) => `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;0,900;1,900&display=swap');
    :root { --brand-teal: #00D9A6; --bg-dark: #050608; --glass-bg: rgba(255, 255, 255, 0.03); --glass-border: rgba(255, 255, 255, 0.08); }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1350px; overflow: hidden; background: var(--bg-dark); font-family: 'Inter', sans-serif; color: #FFFFFF; display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; padding: 100px 80px; position: relative; }
    
    .bg-elements { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
    .bg-glow-1 { position: absolute; top: -200px; right: -200px; width: 800px; height: 800px; background: radial-gradient(circle, rgba(0,217,166,0.12) 0%, transparent 70%); }
    .bg-glow-2 { position: absolute; bottom: -200px; left: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%); }

    .header { width: 100%; position: relative; z-index: 10; }
    .eyebrow { font-size: 18px; font-weight: 800; color: var(--brand-teal); text-transform: uppercase; letter-spacing: 12px; margin-bottom: 24px; }
    h2 { font-size: 88px; font-weight: 900; line-height: 0.95; letter-spacing: -4px; width: 850px; }
    h2 em { font-style: normal; color: var(--brand-teal); }

    /* Spatial Scene */
    .glass-scene { position: relative; width: 100%; height: 780px; display: flex; align-items: center; justify-content: center; z-index: 5; margin-left: -40px; }
    .floating-window { background: #000; border-radius: 20px; border: 1px solid var(--glass-border); box-shadow: 0 80px 150px rgba(0,0,0,0.9); overflow: hidden; position: absolute; }
    .floating-window img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
    
    .desktop.main { width: 880px; height: 550px; transform: perspective(2000px) rotateY(-18deg); left: 0; z-index: 1; opacity: 0.5; filter: blur(2px); }
    .mobile.sub { width: 380px; height: 760px; border-radius: 35px; transform: perspective(1000px) rotateY(12deg) translateZ(100px); right: 0; z-index: 10; border: 2px solid var(--brand-teal); box-shadow: 0 0 50px rgba(0,217,166,0.3); }
    .mobile.giant { width: 440px; height: 880px; border-radius: 40px; transform: perspective(1500px) rotateX(10deg); border: 2px solid var(--brand-teal); }
    
    .stack-v2 { width: 1000px; }
    .back-v2 { width: 800px; height: 500px; left: 0; transform: perspective(1500px) rotateY(-15deg) scale(0.9); opacity: 0.4; }
    .front-v2 { width: 340px; height: 680px; right: 80px; transform: perspective(1000px) rotateY(10deg) translateZ(120px); border: 2px solid var(--brand-teal); }

    /* Bento Grid */
    .bento-grid { width: 100%; display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; gap: 30px; height: 600px; z-index: 10; position: relative; }
    .glass { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 32px; backdrop-filter: blur(20px); padding: 40px; display: flex; flex-direction: column; justify-content: space-between; }
    .glass.teal { border-color: rgba(0,217,166,0.3); background: rgba(0,217,166,0.03); }
    .bento-card.large { grid-row: span 2; }
    .card-label { font-size: 16px; font-weight: 700; color: #4B5563; text-transform: uppercase; letter-spacing: 4px; }
    .card-val { font-size: 48px; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin: 15px 0; }
    .teal .card-val { color: var(--brand-teal); }
    .card-desc { font-size: 20px; color: #9CA3AF; line-height: 1.5; }

    /* Challenge Stack */
    .challenge-stack { width: 100%; display: flex; flex-direction: column; gap: 20px; z-index: 10; position: relative; }
    .challenge-item { padding: 40px; border-radius: 24px; display: flex; align-items: center; gap: 30px; font-size: 28px; font-weight: 700; }
    .challenge-item.warning { border-color: rgba(245, 158, 11, 0.3); color: #F59E0B; }
    .challenge-item .icon { font-size: 40px; }

    /* Stats */
    .stats-scene { width: 100%; display: flex; gap: 40px; justify-content: center; z-index: 10; }
    .stat-circle { width: 350px; height: 350px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid var(--glass-border); }
    .stat-circle.teal { border-color: var(--brand-teal); box-shadow: 0 0 50px rgba(0,217,166,0.2); }
    .percent { font-size: 80px; font-weight: 900; }
    .stat-circle .label { font-size: 24px; font-weight: 700; color: #4B5563; }

    /* Features and Audit */
    .feature-glass-list, .audit-grid { width: 100%; display: flex; flex-direction: column; gap: 20px; }
    .feat-item, .audit-item { padding: 40px; border-radius: 24px; font-size: 32px; font-weight: 800; text-align: center; }

    /* CTA */
    .cta-card { width: 800px; padding: 80px; border-radius: 40px; text-align: center; margin: 0 auto; position: relative; z-index: 10; }
    .cta-tag { font-size: 18px; font-weight: 800; color: var(--brand-teal); letter-spacing: 6px; margin-bottom: 20px; }
    .cta-title { font-size: 56px; font-weight: 900; margin-bottom: 40px; line-height: 1.1; }
    .cta-button { background: var(--brand-teal); color: #000; padding: 24px 60px; border-radius: 100px; font-size: 24px; font-weight: 900; display: inline-block; cursor: pointer; }

    .footer { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; position: relative; z-index: 10; }
    .badge-pill { background: rgba(255,255,255,0.05); padding: 12px 24px; border-radius: 100px; font-weight: 700; font-size: 16px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 10px; }
    .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--brand-teal); }
    .footer-num { font-size: 64px; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; right: -20px; bottom: -20px; }
  </style>
</head>
<body>
  <div class="bg-elements"><div class="bg-glow-1"></div><div class="bg-glow-2"></div></div>
  <div class="header">
    <div class="eyebrow">${data.eyebrow}</div>
    <h2>${data.h2}</h2>
  </div>
  ${data.bodyHtml}
  <div class="footer">
    <div class="badge-pill">
      <div class="badge-dot"></div>
      ${data.badge}
    </div>
    <div class="footer-num">${data.id}</div>
  </div>
</body>
</html>`;

slidesData.forEach(data => {
  const fileContent = template(data);
  const filePath = path.join(SLIDES_DIR, `slide-${data.id}.html`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
});
