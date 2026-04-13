const fs = require('fs');
const path = require('path');

const RUN_ID = "2026-04-13-114510";
const SLIDES_DIR = path.resolve(__dirname, `../output/${RUN_ID}/slides/v1`);

// Garantir que a pasta existe
if (!fs.existsSync(SLIDES_DIR)) {
    fs.mkdirSync(SLIDES_DIR, { recursive: true });
}

// Imagens Mobile e Desktop reais da DuSoftware/A Rafa Criou
const IMG_MOBILE_HOME = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_home_mobile_1776050491771.png";
const IMG_MOBILE_PRODUCT = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_product_mobile_1776050513213.png";
const IMG_DESKTOP_HOME = "file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/arafacriou_home_clean_1776049744550.png";
const LOGO_PATH = "file:///c:/Users/eddua/opensquad/squads/insta-project-carousel/logo-dusoftware.svg";

const slidesData = [
  {
    id: "01",
    badge: "Case Study",
    eyebrow: "A Rafa Criou — E-commerce",
    h2: "De Loja Manual a<br><em>E-commerce Global 24/7.</em>",
    bodyHtml: `
      <div class="composition-wrapper">
        <div class="mockup-macbook perspective-left">
          <div class="screen-content">
            <img src="${IMG_DESKTOP_HOME}">
          </div>
        </div>
        <div class="mockup-iphone perspective-right">
          <div class="screen-content">
            <img src="${IMG_MOBILE_HOME}">
          </div>
        </div>
      </div>
    `
  },
  {
    id: "02",
    badge: "O Desafio",
    eyebrow: "Logística",
    h2: "O teto de vidro da<br><em>logística manual.</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px; width: 800px; text-align: left;">
        <div class="feature-card">Entregas que dependiam de intervenção humana.</div>
        <div class="feature-card">Escala limitada pelo fuso horário e energia física.</div>
        <div class="feature-card">Gargalos no fluxo de checkout e recebimento.</div>
      </div>
    `
  },
  {
    id: "03",
    badge: "Big Win",
    eyebrow: "Escala",
    h2: "Código não dorme.<br><em>Seres humanos sim.</em>",
    bodyHtml: `
      <div class="composition-wrapper single">
        <div class="mockup-macbook perspective-center">
          <div class="screen-content">
            <img src="${IMG_DESKTOP_HOME}">
          </div>
        </div>
      </div>
    `
  },
  {
    id: "04",
    badge: "Mecanismo UX",
    eyebrow: "Design-First",
    h2: "Otimizado para<br><em>Conversão Imediata.</em>",
    bodyHtml: `
      <div class="composition-wrapper single">
        <div class="mockup-iphone perspective-center">
          <div class="screen-content">
            <img src="${IMG_MOBILE_PRODUCT}">
          </div>
        </div>
      </div>
    `
  },
  {
    id: "05",
    badge: "Tech Stack",
    eyebrow: "Infraestrutura",
    h2: "A arquitetura da<br><em>escala infinita.</em>",
    bodyHtml: `
      <div class="grid-tech">
        <div class="tech-item"><strong>Next.js 15</strong><br>Performance Core</div>
        <div class="tech-item"><strong>AWS SDK</strong><br>Cloud Reliable</div>
        <div class="tech-item"><strong>Cloudinary</strong><br>Asset Optimization</div>
        <div class="tech-item"><strong>Tailwind CSS</strong><br>Design System</div>
      </div>
    `
  },
  {
    id: "06",
    badge: "Expansão",
    eyebrow: "Global",
    h2: "Conquistando o mundo<br>em <em>3 idiomas.</em>",
    bodyHtml: `
       <div class="payment-check">
          <div><span>Português, Espanhol, Inglês</span> <span>✓</span></div>
          <div><span>Marketplace Internacional</span> <span>✓</span></div>
          <div><span>Zero Custo Extra por Língua</span> <span>✓</span></div>
       </div>
    `
  },
  {
    id: "07",
    badge: "Resultados",
    eyebrow: "O Produto",
    h2: "Liberdade operacional e<br><em>Software de elite.</em>",
    bodyHtml: `
      <div class="composition-wrapper combo">
        <div class="mockup-macbook perspective-back">
          <div class="screen-content">
            <img src="${IMG_DESKTOP_HOME}">
          </div>
        </div>
        <div class="mockup-iphone overlap-front">
          <div class="screen-content">
            <img src="${IMG_MOBILE_PRODUCT}">
          </div>
        </div>
      </div>
    `
  },
  {
    id: "08",
    badge: "Performance",
    eyebrow: "Google Speed",
    h2: "Sites rápidos<br><em>vendem mais.</em>",
    bodyHtml: `
      <div class="lighthouse-circles">
        <div class="score-circle">100<span>Perf</span></div>
        <div class="score-circle">100<span>SEO</span></div>
        <div class="score-circle">100<span>Acc</span></div>
      </div>
    `
  },
  {
    id: "09",
    badge: "Checklist",
    eyebrow: "O que entregamos",
    h2: "E-commerce <em>sem limites.</em>",
    bodyHtml: `
      <ul class="summary-list">
        <li>Venda Global 24/7 Automatizada</li>
        <li>Entrega Digital Instantânea</li>
        <li>UX Premium & Mobile-First</li>
        <li>Stack Moderna (DuSoftware)</li>
      </ul>
    `
  },
  {
    id: "10",
    badge: "Eleve o Nível",
    eyebrow: "DuSoftware",
    h2: "Pronto para escalar sua<br><em>ideia no mundo?</em>",
    bodyHtml: `
      <div class="cta-box">
        <div class="btn-primary">Comente "APP" 👇</div>
        <p>Transformamos operações manuais em máquinas escaláveis de software.</p>
      </div>
    `
  }
];

const template = (data) => `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,900;1,900&display=swap');
    
    :root {
      --brand-teal: #00D9A6;
      --brand-violet: #8B5CF6;
      --bg-dark: #08090D;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1080px; height: 1350px; overflow: hidden;
      background: var(--bg-dark);
      font-family: 'Inter', sans-serif; color: #FFFFFF;
      display: flex; flex-direction: column; align-items: center;
      position: relative;
    }

    /* ── Backgrounds ── */
    .bg-grid {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(0,217,166,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,217,166,0.02) 1px, transparent 1px);
      background-size: 70px 70px;
    }
    .bg-glow {
      position: absolute; top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 1100px; height: 900px; z-index: 0; pointer-events: none;
      background: radial-gradient(ellipse at center, rgba(0,217,166,0.1) 0%, rgba(139,92,246,0.02) 45%, transparent 70%);
    }

    /* ── Top Bar ── */
    .brand-bar { position: absolute; top: 60px; left: 70px; z-index: 50; }
    .brand-bar img { height: 32px; }

    .badge {
      position: absolute; top: 60px; right: 70px; z-index: 50;
      background: rgba(0,217,166,0.05); border: 1px solid rgba(0,217,166,0.2);
      padding: 12px 24px; border-radius: 100px; font-weight: 700; color: #00D9A6;
      display: flex; align-items: center; gap: 10px; font-size: 18px;
    }
    .badge-dot { width: 10px; height: 10px; background: #00D9A6; border-radius: 50%; box-shadow: 0 0 15px #00D9A6; }

    /* ── Content ── */
    .content-wrapper {
      position: relative; z-index: 10;
      width: 100%; height: 100%;
      display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
      padding-top: 160px;
    }

    .header { text-align: center; margin-bottom: 60px; padding: 0 80px; }
    .eyebrow { font-size: 22px; font-weight: 800; color: var(--brand-teal); text-transform: uppercase; letter-spacing: 6px; margin-bottom: 20px; }
    h2 { font-size: 72px; font-weight: 900; line-height: 1.05; letter-spacing: -3px; }
    h2 em { font-style: normal; color: var(--brand-teal); }

    /* ── Premium Mockups ── */
    .composition-wrapper { position: relative; width: 100%; display: flex; justify-content: center; align-items: center; margin-top: 20px; }
    
    .mockup-macbook {
      position: relative; width: 800px; height: 480px; background: #1F2937; border: 12px solid #374151; border-radius: 12px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.8);
      overflow: hidden; border-bottom: 18px solid #111827;
    }
    .mockup-macbook .screen-content { width: 100%; height: 100%; overflow: hidden; background: #000; position: relative; }
    .mockup-macbook img { width: 100%; height: 100%; object-fit: cover; object-position: top; }

    .mockup-iphone {
      position: relative; width: 320px; height: 640px; background: #000; border: 10px solid #1A1A1A; border-radius: 44px;
      box-shadow: 0 40px 100px rgba(0,0,0,0.8);
      overflow: hidden; z-index: 30;
    }
    .mockup-iphone::before { /* Island */
      content: ''; position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 90px; height: 28px; background: #000; border-radius: 20px; z-index: 40;
    }
    .mockup-iphone .screen-content { width: 100%; height: 100%; overflow: hidden; position: relative; background: #000; }
    .mockup-iphone img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }

    /* Perspectives */
    .perspective-left { transform: perspective(2000px) rotateY(-12deg) scale(0.95); margin-right: -100px; }
    .perspective-right { transform: perspective(2000px) rotateY(12deg) scale(0.95); margin-left: -50px; }
    .perspective-center { transform: scale(1.05); }
    .perspective-back { transform: perspective(2000px) rotateX(8deg) scale(0.9); margin-bottom: -150px; }
    .overlap-front { transform: perspective(1000px) translateZ(50px) scale(0.85); margin-top: -120px; margin-left: -50px; border: 4px solid #000; }

    /* UI Components */
    .feature-card { background: rgba(0,217,166,0.03); border: 1px solid rgba(0,217,166,0.1); padding: 30px; border-radius: 20px; font-size: 26px; font-weight: 600; border-left: 6px solid var(--brand-teal); margin-bottom: 20px; }
    .grid-tech { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; width: 900px; margin-top: 40px; }
    .tech-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 30px; border-radius: 20px; font-size: 22px; }
    .tech-item strong { color: var(--brand-teal); font-size: 28px; display: block; margin-bottom: 10px; }

    .payment-check div { display: flex; justify-content: space-between; background: rgba(16,185,129,0.03); border: 1px solid rgba(16,185,129,0.15); padding: 30px; border-radius: 20px; width: 800px; margin-bottom: 20px; font-size: 26px; font-weight: 700; }
    .payment-check span:last-child { color: #10B981; }

    .lighthouse-circles { display: flex; gap: 40px; margin-top: 60px; }
    .score-circle { width: 180px; height: 180px; border: 10px solid #10B981; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 56px; font-weight: 900; color: #10B981; }
    .score-circle span { font-size: 18px; color: #9CA3AF; text-transform: uppercase; font-weight: 700; }

    .summary-list { list-style: none; width: 800px; margin-top: 40px; }
    .summary-list li { background: rgba(0,217,166,0.05); border: 1px solid rgba(0,217,166,0.1); padding: 30px; border-radius: 20px; margin-bottom: 15px; font-size: 28px; font-weight: 700; border-left: 8px solid var(--brand-teal); }

    .cta-box { display: flex; flex-direction: column; align-items: center; margin-top: 60px; }
    .btn-primary { background: linear-gradient(135deg, var(--brand-teal), #00A67E); padding: 30px 80px; border-radius: 100px; font-size: 44px; font-weight: 900; color: #08090D; box-shadow: 0 30px 60px rgba(0,217,166,0.3); margin-bottom: 40px; }
    .cta-box p { font-size: 26px; color: #9CA3AF; max-width: 700px; text-align: center; line-height: 1.5; }

    /* ── Footer ── */
    .footer { position: absolute; bottom: 70px; left: 80px; right: 80px; display: flex; justify-content: space-between; align-items: center; z-index: 50; }
    .footer-num { font-size: 28px; color: #4B5563; font-weight: 900; }
    .footer-logo { height: 28px; opacity: 0.6; }
  </style>
</head>
<body>

  <div class="bg-grid"></div>
  <div class="bg-glow"></div>

  <div class="brand-bar">
    <img src="${LOGO_PATH}">
  </div>
  <div class="badge"><div class="badge-dot"></div>${data.badge}</div>

  <div class="content-wrapper">
    <div class="header">
      <div class="eyebrow">${data.eyebrow}</div>
      <h2>${data.h2}</h2>
    </div>
    ${data.bodyHtml}
  </div>

  <div class="footer">
    <span class="footer-num">${data.id} / 10</span>
    <img class="footer-logo" src="${LOGO_PATH}">
  </div>

</body>
</html>
`;

slidesData.forEach(data => {
  const fileContent = template(data);
  const filePath = path.join(SLIDES_DIR, `slide-${data.id}.html`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
});

console.log(`✅ ${slidesData.length} slides gerados em ${SLIDES_DIR}`);
