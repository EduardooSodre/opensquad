const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'output', 'institutional', 'slides', 'v1');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function template(num, bodyContent) {
  return `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,600;0,700;0,800;0,900;1,900&family=JetBrains+Mono:wght@400;700&display=swap');
    :root { --brand-primary: #8B5CF6; --brand-secondary: #3B82F6; --bg-dark: #050505; --glass-bg: rgba(255, 255, 255, 0.03); --glass-border: rgba(255, 255, 255, 0.08); }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1350px; overflow: hidden; background: var(--bg-dark); font-family: 'Inter', sans-serif; color: #FFFFFF; display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; padding: 100px 80px; position: relative; }
    .bg-elements { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
    .bg-glow-1 { position: absolute; top: -300px; right: -300px; width: 1000px; height: 1000px; background: radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%); }
    .bg-glow-2 { position: absolute; bottom: -300px; left: -300px; width: 800px; height: 800px; background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 60%); }
    
    .header { width: 100%; position: relative; z-index: 10; margin-bottom: 40px; }
    .eyebrow { font-size: 20px; font-weight: 800; color: var(--brand-primary); text-transform: uppercase; letter-spacing: 12px; margin-bottom: 24px; display: inline-block; border-bottom: 2px solid rgba(139,92,246,0.3); padding-bottom: 8px;}
    h2 { font-size: 80px; font-weight: 900; line-height: 0.95; letter-spacing: -3px; width: 900px; }
    h2.giant { font-size: 110px; line-height: 0.9; }
    h2 em { font-style: normal; background: linear-gradient(to right, var(--brand-primary), var(--brand-secondary)); -webkit-background-clip: text; color: transparent; }
    
    .bento-grid { width: 100%; height: 750px; display: grid; gap: 30px; z-index: 10; position: relative; }
    .grid-2 { grid-template-columns: 1fr 1fr; }
    .grid-hybrid { grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; }
    .hybrid-large { grid-row: span 2; }
    .grid-focus { grid-template-columns: 1fr 1.5fr; grid-template-rows: 2fr 1fr; }
    
    .glass { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 32px; backdrop-filter: blur(20px); padding: 50px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; }
    .glass.accent { border-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.05); }
    .glass.accent-blue { border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.05); }
    .glass.dark { background: #000; border-color: var(--glass-border); }
    
    .b-title { font-size: 20px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 4px; z-index: 5; position: relative; }
    .b-val { font-size: 64px; font-weight: 900; color: #FFFFFF; line-height: 1.1; margin-top: 15px; z-index: 5; position: relative; }
    .b-desc { font-size: 24px; color: #D1D5DB; line-height: 1.5; margin-top: 20px; font-weight: 400; }
    .accent .b-val { color: var(--brand-primary); }
    .accent-blue .b-val { color: var(--brand-secondary); }
    
    .footer { width: 100%; display: flex; justify-content: space-between; align-items: flex-end; position: relative; z-index: 10; margin-top: auto;}
    .badge-pill { background: rgba(255,255,255,0.05); padding: 14px 28px; border-radius: 100px; font-weight: 700; font-size: 18px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 15px; text-transform: uppercase; letter-spacing: 2px;}
    .badge-logo { width: 24px; height: 24px; border-radius: 4px; object-fit: contain; }
    .footer-num { font-size: 80px; font-weight: 900; color: rgba(255,255,255,0.05); position: absolute; right: -20px; bottom: -20px; line-height: 1; }
    
    .code-block { font-family: 'JetBrains Mono', monospace; font-size: 18px; color: #A78BFA; background: rgba(0,0,0,0.5); padding: 30px; border-radius: 16px; border: 1px solid rgba(139,92,246,0.2); }
    .floating-icon { font-size: 120px; line-height: 1; align-self: flex-end; opacity: 0.8; filter: drop-shadow(0 0 40px rgba(139,92,246,0.4)); margin-top: auto;}
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
  `<div class="header" style="margin-top: 100px;">
    <div class="eyebrow">Agência Premium</div>
    <h2 class="giant">Nós construímos<br><em>Softwares</em><br><em>de Elite.</em></h2>
    <p style="font-size: 32px; color: #9CA3AF; margin-top: 40px; font-weight: 400; max-width: 800px; line-height: 1.4;">Engenharia de precisão e UX absolutista para marcas que não aceitam ser medianas.</p>
  </div>`,

  // 02
  `<div class="header">
    <div class="eyebrow">O Mercado</div>
    <h2>Sistemas lentos e interfaces genéricas <em>não escalam.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid" style="grid-template-rows: 1fr;">
    <div class="glass dark" style="grid-column: span 3;">
      <div class="b-title" style="color: #EF4444;">O Problema Comum</div>
      <div class="b-desc" style="font-size: 36px; line-height: 1.5; margin-top: 40px;">Se a sua aplicação não impressiona o usuário no primeiro segundo de tela, a conversão já foi perdida. O mercado pune severamente softwares que parecem "baratos" ou travam sob carga.</div>
    </div>
  </div>`,

  // 03
  `<div class="header">
    <div class="eyebrow">Método Du-Software</div>
    <h2>A solução é fundir<br><em>Design e Código.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass hybrid-large accent text-zone">
      <div class="b-title">Arquitetura</div>
      <div class="b-val" style="font-size: 48px;">Código Limpo &<br>Escalabilidade</div>
      <div class="b-desc">Escrevemos bases de código sustentáveis e rigorosamente testadas em TypeScript e Next.js. Prontas para milhões de acessos.</div>
    </div>
    <div class="glass">
      <div class="b-title">Performance</div>
      <div class="b-val" style="font-size: 32px">Latência Zero</div>
    </div>
    <div class="glass accent-blue">
      <div class="b-title">Fricção</div>
      <div class="b-val" style="font-size: 32px">Quase Nula</div>
    </div>
  </div>`,

  // 04
  `<div class="header">
    <div class="eyebrow">Serviços: Design</div>
    <h2>UI/UX Design &<br><em>Design Systems</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr;">
    <div class="glass accent" style="padding: 60px; justify-content: center; align-items: center; text-align: center;">
      <div class="floating-icon" style="align-self: center; margin-bottom: 40px;">✦</div>
      <div class="b-val" style="font-size: 48px;">Prototipação Absoluta no Figma.</div>
      <div class="b-desc" style="font-size: 28px; max-width: 700px; margin: 30px auto 0;">Não usamos templates comprados. Desenhamos a identidade e as telas da sua aplicação do zero, focando na psicologia do usuário e hierarquia de conversão.</div>
    </div>
  </div>`,

  // 05
  `<div class="header">
    <div class="eyebrow">Serviços: Frontend</div>
    <h2>Trabalhamos com o que há de mais <em>Moderno.</em></h2>
  </div>
  <div class="bento-grid grid-2">
    <div class="glass dark">
      <div class="code-block">
        <span style="color:#F43F5E;">export default</span> function <span style="color:#3B82F6;">App</span>() {<br>
        &nbsp;&nbsp;return (<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#10B981;">ThemeProvider</span>&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#10B981;">PerformanceEngine</span> /&gt;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#10B981;">ThemeProvider</span>&gt;<br>
        &nbsp;&nbsp;);<br>
        }
      </div>
    </div>
    <div class="glass accent">
      <div class="b-title">Stack Frontend</div>
      <div class="b-val" style="font-size: 40px; line-height: 1.3;">React<br>Next.js<br>Tailwind CSS<br>Shadcn UI</div>
    </div>
  </div>`,

  // 06
  `<div class="header">
    <div class="eyebrow">Serviços: Backend</div>
    <h2>Infraestrutura <em>Totalmente Inquebrável.</em></h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr; grid-template-rows: auto;">
    <div class="glass accent-blue" style="height: 100%;">
      <div class="b-title">Stack Backend</div>
      <div style="display: flex; gap: 40px; margin-top: 50px;">
         <div style="flex: 1; border-right: 1px solid rgba(255,255,255,0.1); padding-right: 20px;">
            <div class="b-val" style="font-size: 32px">Node.js & TS</div>
            <div class="b-desc" style="font-size: 20px;">Segurança tipada de ponta a ponta.</div>
         </div>
         <div style="flex: 1; border-right: 1px solid rgba(255,255,255,0.1); padding-right: 20px;">
            <div class="b-val" style="font-size: 32px">PostgreSQL</div>
            <div class="b-desc" style="font-size: 20px;">Banco de dados ultra robusto via Prisma ORM ou Drizzle.</div>
         </div>
         <div style="flex: 1;">
            <div class="b-val" style="font-size: 32px">Cloud Integrations</div>
            <div class="b-desc" style="font-size: 20px;">Stripe para pagamentos, Supabase e AWS.</div>
         </div>
      </div>
    </div>
  </div>`,

  // 07
  `<div class="header">
    <div class="eyebrow">Aplicações Práticas</div>
    <h2>Do E-commerce ao SaaS.<br><em>Nós resolvemos.</em></h2>
  </div>
  <div class="bento-grid grid-hybrid">
    <div class="glass" style="grid-row: span 2; display: flex; align-items: center; justify-content: center; padding: 0;">
      <div style="width: 100%; height: 100%; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; background: linear-gradient(145deg, #0f0f15, #050505); box-shadow: inset 0 0 40px rgba(139,92,246,0.1); display: flex; flex-direction: column; padding: 30px;">
        <div style="width: 100%; display: flex; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 20px; margin-bottom: 20px;">
          <div style="width: 15px; height: 15px; border-radius: 50%; background: #EF4444;"></div>
          <div style="width: 15px; height: 15px; border-radius: 50%; background: #F59E0B;"></div>
          <div style="width: 15px; height: 15px; border-radius: 50%; background: #10B981;"></div>
        </div>
        <div style="display: flex; gap: 20px; flex: 1;">
          <div style="width: 25%; background: rgba(255,255,255,0.02); border-radius: 12px; height: 100%;"></div>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 20px;">
            <div style="width: 100%; height: 30%; background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.2); border-radius: 12px; display:flex; align-items:center; justify-content:center"><span style="color:#A78BFA; font-weight:800; letter-spacing:2px">SaaS PLATFORM</span></div>
            <div style="width: 100%; flex: 1; background: rgba(255,255,255,0.02); border-radius: 12px; display:flex; gap:20px; padding:20px;">
              <div style="flex:1; background: rgba(255,255,255,0.03); border-radius: 8px;"></div>
              <div style="flex:1; background: rgba(255,255,255,0.03); border-radius: 8px;"></div>
              <div style="flex:1; background: rgba(255,255,255,0.03); border-radius: 8px;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="glass accent">
      <div class="b-title">Plataformas Web</div>
      <div class="b-val" style="font-size: 32px">Sistemas Custom</div>
    </div>
    <div class="glass accent-blue">
      <div class="b-title">Vendas</div>
      <div class="b-val" style="font-size: 32px">Automated E-com</div>
    </div>
  </div>`,

  // 08
  `<div class="header">
    <div class="eyebrow">O Processo</div>
    <h2>Da primeira ideia<br>até o <em>Deploy em Prod</em>.</h2>
  </div>
  <div class="bento-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
    <div class="glass">
      <div class="b-title">01. Discovery</div>
      <div class="b-desc" style="font-size: 18px;">Mapeamento de arquitetura, banco de dados e fluxos de usuário.</div>
    </div>
    <div class="glass accent">
      <div class="b-title">02. Design</div>
      <div class="b-desc" style="font-size: 18px;">Design de UI/UX em alta fidelidade com prototipação no Figma.</div>
    </div>
    <div class="glass accent-blue">
      <div class="b-title">03. Build & Ship</div>
      <div class="b-desc" style="font-size: 18px;">Codificação Full Stack, testes e deployment em servidores cloud globais.</div>
    </div>
  </div>`,

  // 09
  `<div class="header" style="margin-top: 150px;">
    <div class="eyebrow">Nossa Filosofia</div>
    <h2 class="giant" style="line-height: 1;">Nós não entregamos apenas código.</h2>
    <h2 class="giant" style="margin-top: 20px;"><em>Entregamos Ativos Digitais.</em></h2>
  </div>`,

  // 10
  `<div class="header" style="margin-top: 150px; text-align: center; width: 100%; display: flex; flex-direction: column; align-items: center;">
    <div class="floating-icon" style="margin: 0 auto 40px; font-size: 80px;">🚀</div>
    <h2 style="width: 100%; text-align: center;">Eleve o padrão<br>do seu negócio tecnológico.</h2>
    <div style="margin-top: 80px; background: #fff; color: #000; padding: 24px 60px; font-size: 32px; font-weight: 800; border-radius: 100px; text-transform: uppercase; letter-spacing: 2px;">Faça um Orçamento</div>
    <p style="margin-top: 30px; font-size: 24px; color: #9CA3AF;">Link na nossa biografia.</p>
  </div>`
];

slides.forEach((content, i) => {
  const num = String(i + 1).padStart(2, '0');
  fs.writeFileSync(path.join(outputDir, `slide-${num}.html`), template(num, content));
});
console.log('Institucionais criados.');
