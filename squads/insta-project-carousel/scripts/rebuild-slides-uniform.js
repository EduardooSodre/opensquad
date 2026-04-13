const fs = require('fs');
const path = require('path');

const SLIDES_DIR = path.resolve(__dirname, '../output/2026-04-09-194436/v1/slides');

const slidesData = [
  {
    id: "01",
    badge: "Case Study",
    eyebrow: "Autyro — Marketplace Automotivo",
    h2: "Como construímos a <em>plataforma #1</em> de vendas de carros do Brasil.",
    bodyHtml: `
      <div style="margin-top: 20px; position: relative; width: 100%; display: flex; justify-content: center;">
        <img src="file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/autyro_home_1775776721784.png" style="width: 800px; border-radius: 12px; filter: drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 60px rgba(99,102,241,0.15)); border: 1px solid rgba(255,255,255,0.1);">
      </div>
      <p style="font-size: 24px; color: #9CA3AF; margin-top: 40px; text-align: center; max-width: 800px;">50.000+ veículos. 1.000+ concessionárias. Do zero ao produto.</p>
    `
  },
  {
    id: "02",
    badge: "O Problema",
    eyebrow: "Desafio",
    h2: "O mercado automotivo estava<br><em>preso no passado.</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px; width: 800px;">
        <div style="display: flex; align-items: flex-start; gap: 20px; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); border-radius: 16px; padding: 24px;">
          <div style="font-size: 32px; flex-shrink: 0;">📋</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4; text-align: left;">Revendedores gerenciavam estoque em planilhas. Sem escala.</div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 20px; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); border-radius: 16px; padding: 24px;">
          <div style="font-size: 32px; flex-shrink: 0;">🔍</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4; text-align: left;">Compradores não tinham como verificar histórico ou documentação.</div>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 20px; background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.2); border-radius: 16px; padding: 24px;">
          <div style="font-size: 32px; flex-shrink: 0;">⏱️</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4; text-align: left;">Processo de anunciar levava horas. Perda de oportunidade de venda.</div>
        </div>
      </div>
    `
  },
  {
    id: "03",
    badge: "A Solução",
    eyebrow: "Plataforma Completa",
    h2: "Criamos um SaaS completo<br><em>de ponta a ponta.</em>",
    bodyHtml: `
      <div style="margin-top: 20px; position: relative; width: 100%; display: flex; justify-content: center;">
        <img src="file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/autyro_listings_1775776733243.png" style="width: 800px; border-radius: 12px; filter: drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 60px rgba(0,217,166,0.15)); border: 1px solid rgba(255,255,255,0.1);">
      </div>
      <p style="font-size: 24px; color: #9CA3AF; margin-top: 30px; text-align: center; max-width: 800px;">Portal de busca + painel administrativo para concessionárias.<br>Busca, histórico e fechamento em <strong>10 minutos</strong>.</p>
    `
  },
  {
    id: "04",
    badge: "Tech Stack",
    eyebrow: "Engenharia",
    h2: "Tecnologia <em>moderna</em><br>em cada camada.",
    bodyHtml: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 10px; width: 800px;">
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">Next.js 15</div>
          <div style="font-size: 18px; color: #9CA3AF;">Framework Full Stack</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">TypeScript</div>
          <div style="font-size: 18px; color: #9CA3AF;">Tipagem & Segurança</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">Neon DB</div>
          <div style="font-size: 18px; color: #9CA3AF;">Banco PostgreSQL</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">Clerk</div>
          <div style="font-size: 18px; color: #9CA3AF;">Autenticação Segura</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">Cloudinary</div>
          <div style="font-size: 18px; color: #9CA3AF;">Gestão de Mídias</div>
        </div>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px 24px; text-align: left;">
          <div style="font-size: 22px; font-weight: 700; color: #818CF8; margin-bottom: 4px;">Stripe</div>
          <div style="font-size: 18px; color: #9CA3AF;">Pagamentos Recorrentes</div>
        </div>
      </div>
    `
  },
  {
    id: "05",
    badge: "Resultados",
    eyebrow: "Números",
    h2: "Métricas que <em>provam</em><br>o impacto.",
    bodyHtml: `
      <div style="margin-top: 10px; position: relative; width: 100%; display: flex; justify-content: center; margin-bottom: 30px;">
        <img src="file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/autyro_features_1775776727919.png" style="width: 700px; border-radius: 12px; filter: drop-shadow(0 40px 80px rgba(0,0,0,0.8)); border: 1px solid rgba(255,255,255,0.1);">
      </div>
      <div style="display: flex; gap: 16px; width: 800px; justify-content: center;">
        <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 20px; flex: 1; text-align: center;">
          <div style="font-size: 40px; font-weight: 900; color: #10B981; line-height: 1;">50K+</div>
          <div style="font-size: 16px; color: #9CA3AF; margin-top: 8px;">Veículos</div>
        </div>
        <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 20px; flex: 1; text-align: center;">
          <div style="font-size: 40px; font-weight: 900; color: #10B981; line-height: 1;">1K+</div>
          <div style="font-size: 16px; color: #9CA3AF; margin-top: 8px;">Concessionárias</div>
        </div>
        <div style="background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 20px; flex: 1; text-align: center;">
          <div style="font-size: 40px; font-weight: 900; color: #10B981; line-height: 1;">98%</div>
          <div style="font-size: 16px; color: #9CA3AF; margin-top: 8px;">Satisfação</div>
        </div>
      </div>
    `
  },
  {
    id: "06",
    badge: "Como Funciona",
    eyebrow: "Experiência",
    h2: "Simples, rápido e <em>seguro.</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px; width: 800px;">
        <div style="display: flex; align-items: center; gap: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; border-left: 4px solid #818CF8; text-align: left;">
          <div style="font-size: 36px; font-weight: 900; color: #818CF8; width: 40px; flex-shrink: 0; text-align: center;">1</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4;">Busque por modelo, ano, preço, localização e combustível.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; border-left: 4px solid #818CF8; text-align: left;">
          <div style="font-size: 36px; font-weight: 900; color: #818CF8; width: 40px; flex-shrink: 0; text-align: center;">2</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4;">Veja histórico completo, fotos reais e documentação verificada.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 24px; border-left: 4px solid #818CF8; text-align: left;">
          <div style="font-size: 36px; font-weight: 900; color: #818CF8; width: 40px; flex-shrink: 0; text-align: center;">3</div>
          <div style="font-size: 22px; font-weight: 500; color: #E5E7EB; line-height: 1.4;">Feche o negócio diretamente com a concessionária com segurança.</div>
        </div>
      </div>
    `
  },
  {
    id: "07",
    badge: "Design & UX",
    eyebrow: "Interface Premium",
    h2: "Dark mode que <em>converte.</em>",
    bodyHtml: `
      <div class="macbook-hero">
        <img src="file:///C:/Users/eddua/.gemini/antigravity/brain/f58056a2-b772-43b4-87ef-f28a1f4cf0f6/macbook_slide07_hero_1775876837121.png" alt="Autyro Marketplace no MacBook Pro">
      </div>
      <div class="pills">
        <div class="pill p-i">Shadcn UI</div>
        <div class="pill p-i">Tailwind CSS</div>
        <div class="pill p-t">99+ Lighthouse</div>
        <div class="pill p-d">Next.js 15</div>
        <div class="pill p-d">Mobile-First</div>
      </div>
    `
  },
  {
    id: "08",
    badge: "B2B Dashboard",
    eyebrow: "Para Revendedores",
    h2: "Um painel que <em>gerencia tudo.</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; width: 800px;">
        <div style="display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align: left;">
          <div style="font-size: 32px; flex-shrink: 0;">🚗</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 20px; font-weight: 700; color: #FFFFFF;">Gestão de Estoque</div>
            <div style="font-size: 16px; color: #9CA3AF;">Cadastro em 10 minutos com IA para descrições</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align: left;">
          <div style="font-size: 32px; flex-shrink: 0;">💳</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 20px; font-weight: 700; color: #FFFFFF;">Planos Stripe</div>
            <div style="font-size: 16px; color: #9CA3AF;">Assinaturas recorrentes sem fricção</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align: left;">
          <div style="font-size: 32px; flex-shrink: 0;">📊</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 20px; font-weight: 700; color: #FFFFFF;">Analytics</div>
            <div style="font-size: 16px; color: #9CA3AF;">Dashboard com métricas em tempo real</div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; padding: 16px 20px; background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); text-align: left;">
          <div style="font-size: 32px; flex-shrink: 0;">✅</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div style="font-size: 20px; font-weight: 700; color: #FFFFFF;">Verificação</div>
            <div style="font-size: 16px; color: #9CA3AF;">Concessionárias verificadas pela plataforma</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "09",
    badge: "Resumo",
    eyebrow: "O Projeto",
    h2: "O que o Autyro <em>entrega.</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; width: 800px;">
        <div style="display: flex; align-items: center; gap: 20px; font-size: 24px; font-weight: 600; text-align: left;">
          <div style="width: 40px; height: 40px; background: #818CF8; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #08090D; font-weight: 900;">✓</div>
          <span>Marketplace completo B2C + painel B2B</span>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; font-size: 24px; font-weight: 600; text-align: left;">
          <div style="width: 40px; height: 40px; background: #818CF8; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #08090D; font-weight: 900;">✓</div>
          <span>IA integrada para gestão de anúncios</span>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; font-size: 24px; font-weight: 600; text-align: left;">
          <div style="width: 40px; height: 40px; background: #818CF8; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #08090D; font-weight: 900;">✓</div>
          <span>50.000+ veículos e 1.000+ concessionárias</span>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; font-size: 24px; font-weight: 600; text-align: left;">
          <div style="width: 40px; height: 40px; background: #818CF8; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #08090D; font-weight: 900;">✓</div>
          <span>Autenticação bancária com Clerk</span>
        </div>
        <div style="display: flex; align-items: center; gap: 20px; font-size: 24px; font-weight: 600; text-align: left;">
          <div style="width: 40px; height: 40px; background: #818CF8; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; color: #08090D; font-weight: 900;">✓</div>
          <span>Pagamentos recorrentes via Stripe</span>
        </div>
      </div>
    `
  },
  {
    id: "10",
    badge: "Call to Action",
    eyebrow: "Transforme sua ideia",
    h2: "Quer um SaaS desse nível<br>para <em>seu negócio?</em>",
    bodyHtml: `
      <div style="display: flex; flex-direction: column; align-items: center; margin-top: 20px;">
        <div style="background: #818CF8; border-radius: 100px; padding: 24px 60px; font-size: 36px; font-weight: 900; color: #08090D; margin-bottom: 30px; border: 2px solid rgba(255,255,255,0.2);">
          Comente "APP" 👇
        </div>
        <p style="font-size: 22px; color: #9CA3AF; line-height: 1.5; max-width: 600px; text-align: center;">
          Comento de volta com o que você precisa para sair do zero ao produto em produção.
        </p>
      </div>
    `
  }
];

const template = (data) => `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      width: 1080px; height: 1350px; overflow: hidden;
      background: #06070B;
      font-family: 'Inter', sans-serif; color: #FFFFFF;
      display: flex; flex-direction: column; align-items: center;
      position: relative;
    }

    /* ── Backgrounds ── */
    .bg-grid {
      position: absolute; inset: 0; z-index: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(99,102,241,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,102,241,0.035) 1px, transparent 1px);
      background-size: 70px 70px;
    }
    .bg-glow {
      position: absolute; top: 400px; left: 50%;
      transform: translateX(-50%);
      width: 1100px; height: 900px; z-index: 0; pointer-events: none;
      background: radial-gradient(ellipse at center,
        rgba(99,102,241,0.16) 0%,
        rgba(99,102,241,0.06) 35%,
        transparent 65%);
    }
    .bg-glow-top {
      position: absolute; top: -60px; left: 50%;
      transform: translateX(-50%);
      width: 900px; height: 600px; z-index: 0; pointer-events: none;
      background: radial-gradient(ellipse at center top,
        rgba(99,102,241,0.12) 0%, transparent 60%);
    }
    .bg-glow-bot {
      position: absolute; bottom: 0; left: 50%;
      transform: translateX(-50%);
      width: 800px; height: 450px; z-index: 0; pointer-events: none;
      background: radial-gradient(ellipse,
        rgba(0,217,166,0.08) 0%, transparent 70%);
    }

    /* ── Brand bar ── */
    .brand-bar { position: absolute; top: 50px; left: 60px; z-index: 20; }
    .brand-bar > img { height: 40px; width: auto; display: block; }

    .badge {
      position: absolute; top: 50px; right: 60px; z-index: 20;
      display: flex; align-items: center; gap: 8px;
      background: rgba(99,102,241,0.12);
      border: 1px solid rgba(99,102,241,0.40);
      border-radius: 100px; padding: 12px 26px;
      font-size: 20px; font-weight: 700; color: #A5B4FC;
    }
    .badge-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #818CF8; box-shadow: 0 0 10px #6366F1;
    }

    /* ── Central Content ── */
    .content-wrapper {
        position: relative; z-index: 10;
        width: 100%; height: 100%;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        padding-top: 40px;
    }

    /* ── Header ── */
    .header {
      text-align: center; padding: 0 60px; margin-bottom: 30px;
    }
    .eyebrow {
      font-size: 20px; font-weight: 700; color: #6366F1;
      text-transform: uppercase; letter-spacing: 6px; margin-bottom: 16px;
    }
    h2 {
      font-size: 64px; font-weight: 900;
      line-height: 1.1; letter-spacing: -2px;
    }
    h2 em { color: #818CF8; font-style: normal; }

    /* ── MacBook hero image (Slide 07 native) ── */
    .macbook-hero {
      position: relative; z-index: 10; margin-top: 25px; width: 1080px; display: flex; justify-content: center;
    }
    .macbook-hero > img {
      width: 850px; height: auto; display: block;
      filter: drop-shadow(0 50px 100px rgba(0,0,0,0.95)) drop-shadow(0 0 70px rgba(99,102,241,0.12));
    }

    /* ── Tech pills (Slide 07 native) ── */
    .pills {
      position: relative; z-index: 10; margin-top: 30px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; padding: 0 60px;
    }
    .pill { padding: 10px 22px; border-radius: 100px; font-size: 18px; font-weight: 600; white-space: nowrap; }
    .p-i { background: rgba(99,102,241,0.10); border: 1px solid rgba(99,102,241,0.30); color: #A5B4FC; }
    .p-t { background: rgba(0,217,166,0.07);  border: 1px solid rgba(0,217,166,0.22);  color: #34D399; }
    .p-d { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09); color: #6B7280; }

    /* ── Footer ── */
    .footer {
      position: absolute; bottom: 50px; left: 60px; right: 60px;
      display: flex; justify-content: space-between; align-items: center; z-index: 20;
    }
    .footer-num { font-size: 22px; color: #4B5563; font-weight: 700; }
    .footer-logo { height: 26px; width: auto; opacity: 0.38; display: block; }
  </style>
</head>
<body>

  <div class="bg-grid"></div>
  <div class="bg-glow-top"></div>
  <div class="bg-glow"></div>
  <div class="bg-glow-bot"></div>

  <!-- Top Bars -->
  <div class="brand-bar">
    <img src="file:///c:/Users/eddua/opensquad/squads/insta-project-carousel/logo-dusoftware.svg">
  </div>
  <div class="badge"><div class="badge-dot"></div>${data.badge}</div>

  <div class="content-wrapper">
    <!-- Header -->
    <div class="header">
      <div class="eyebrow">${data.eyebrow}</div>
      <h2>${data.h2}</h2>
    </div>

    <!-- Inject Specific Body Info -->
    ${data.bodyHtml}
  </div>

  <!-- Footer -->
  <div class="footer">
    <span class="footer-num">${data.id} / 10</span>
    <img class="footer-logo"
         src="file:///c:/Users/eddua/opensquad/squads/insta-project-carousel/logo-dusoftware.svg">
  </div>

</body>
</html>
`;

slidesData.forEach(data => {
  const fileContent = template(data);
  const filePath = path.join(SLIDES_DIR, `slide-${data.id}.html`);
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`✅ slide-${data.id}.html reconstruído com sucesso`);
});

console.log("Todas as animações/páginas refatoradas para padrão premium (Slide 07 style)!");
