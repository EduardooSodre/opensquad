const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'output', 'stories', 'v1');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const stories = [
  {
    id: '01',
    content: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:flex-start; padding: 100px;">
        <h1 style="font-size: 80px; font-weight: 800; line-height: 1.1; margin-bottom: 40px;">Você sente que perde a energia do seu dia tentando resolver problemas de um <span class="highlight">sistema mal feito?</span></h1>
        <div class="glass" style="width: 100%; border: 1px solid rgba(255,255,255,0.2); padding: 40px; border-radius: 40px; text-align: center; margin-top: 60px;">
           <span style="font-size: 40px; font-weight: 600; color: rgba(255,255,255,0.5);">[ Insira uma Enquete aqui no app ]</span><br/>
           <span style="font-size: 30px; font-weight: 400; color: #8B5CF6; margin-top: 20px; display:inline-block;">Todo dia 🤯  ou  Rodando liso 🚀</span>
        </div>
      </div>
    `
  },
  {
    id: '02',
    content: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; padding: 100px; text-align: center;">
        <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #8B5CF6, #3B82F6); display:flex; align-items:center; justify-content:center; margin-bottom: 60px; box-shadow: 0 0 80px rgba(139,92,246,0.5);">
            <img src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png" style="width: 80px; filter: brightness(0) invert(1);" />
        </div>
        <h2 style="font-size: 70px; font-weight: 700; line-height: 1.2; margin-bottom: 50px;">A diferença entre um site comum e um <span class="highlight">Software de Elite:</span></h2>
        <p style="font-size: 50px; font-weight: 400; color: #aaa; line-height: 1.4;">O software trabalha para você enquanto você almoça.<br/><br/>O site amador te faz perder o apetite.</p>
      </div>
    `
  },
  {
    id: '03',
    content: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; align-items:center; padding: 120px 80px;">
        <div style="text-align: center;">
            <div style="display:inline-block; background: #8B5CF6; color: white; padding: 15px 40px; border-radius: 100px; font-size: 30px; font-weight: 800; letter-spacing: 4px; margin-bottom: 40px;">NEW POST</div>
            <h1 style="font-size: 65px; font-weight: 800; line-height: 1.1;">Liberamos os bastidores técnicos de como a Du-Software opera.</h1>
        </div>
        
        <div class="glass" style="width: 600px; height: 600px; border: 2px dashed rgba(139,92,246,0.5); border-radius: 40px; display:flex; align-items:center; justify-content:center; position: relative; animation: pulse 2s infinite;">
            <span style="font-size: 35px; color: rgba(255,255,255,0.4); text-align: center;">[ Colepe o Novo<br/>Carrossel Aqui ]</span>
            <div style="position: absolute; bottom: -80px; display:flex; gap: 20px; align-items:center;">
                <img src="https://cdn-icons-png.flaticon.com/512/2838/2838306.png" style="width: 40px; filter: invert(1)" />
                <span style="font-size: 35px; font-weight: 600;">Toque na imagem</span>
            </div>
        </div>
        
        <div></div>
      </div>
    `
  },
  {
    id: '04',
    content: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; padding: 100px; text-align: center;">
        <h1 style="font-size: 75px; font-weight: 800; line-height: 1.2; margin-bottom: 80px;">Um sistema escalável não é um custo...<br/><br/><span class="highlight">É uma máquina de alavancagem.</span></h1>
        
        <div class="glass" style="width: 100%; height: 400px; border: 1px solid rgba(255,255,255,0.2); border-radius: 40px; display:flex; flex-direction: column; align-items:center; justify-content:center;">
            <span style="font-size: 40px; font-weight: 800; color: white; margin-bottom: 20px;">PERGUNTE-ME</span>
            <span style="font-size: 35px; font-weight: 400; color: rgba(255,255,255,0.5);">[ Insira a Caixinha de Perguntas ]</span>
            <span style="font-size: 32px; font-weight: 400; color: #8B5CF6; margin-top: 30px;">"Qual é o maior gargalo técnico do seu negócio hoje?"</span>
        </div>
      </div>
    `
  },
  {
    id: '05',
    content: `
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; padding: 100px; text-align: center; position: relative;">
        <!-- Fundo Absoluto com a logo gigante -->
        <img src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png" style="position: absolute; width: 800px; opacity: 0.05; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 0;" />
        
        <div style="z-index: 10; align-items: center; display: flex; flex-direction: column;">
            <img src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png" style="width: 150px; margin-bottom: 60px;" />
            <h1 style="font-size: 70px; font-weight: 800; line-height: 1.2; margin-bottom: 50px;">Pronto para investir no nível de qualidade que o seu negócio exige?</h1>
            <p style="font-size: 45px; font-weight: 400; color: #aaa; line-height: 1.4; margin-bottom: 80px;">Se você quer parar de apagar incêndios técnicos, o nosso direct está aberto.</p>
            
            <div style="background: rgba(139,92,246,0.1); border: 2px solid #8B5CF6; border-radius: 30px; padding: 40px 60px;">
                <span style="font-size: 40px; font-weight: 600; color: white;">Responda <span style="color: #8B5CF6; font-weight: 900;">ESCALA</span> ao direct e vamos desenhar a sua nova arquitetura.</span>
            </div>
        </div>
      </div>
    `
  }
];

const template = (content) => `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand-primary: #8B5CF6;
      --brand-secondary: #3B82F6;
      --bg-dark: #050505;
      --text-main: #FFFFFF;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1080px; height: 1920px;
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      display: flex; flex-direction: column;
      position: relative; overflow: hidden;
    }
    .bg-elements { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; overflow: hidden; }
    .bg-glow-1 { position: absolute; width: 800px; height: 800px; background: var(--brand-primary); filter: blur(300px); border-radius: 50%; opacity: 0.15; top: -200px; left: -200px; }
    .bg-glow-2 { position: absolute; width: 800px; height: 800px; background: var(--brand-secondary); filter: blur(300px); border-radius: 50%; opacity: 0.10; bottom: -200px; right: -200px; }
    .glass {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
    }
    .highlight { color: var(--brand-primary); }
    
    .footer { width: 100%; display: flex; justify-content: center; align-items: flex-end; position: relative; z-index: 10; margin-top: auto; padding: 60px;}
    .badge-pill { background: rgba(255,255,255,0.05); padding: 16px 36px; border-radius: 100px; font-weight: 700; font-size: 24px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 20px; text-transform: uppercase; letter-spacing: 2px;}
    .badge-logo { width: 30px; height: 30px; border-radius: 4px; object-fit: contain; }
  </style>
</head>
<body>
  <div class="bg-elements"><div class="bg-glow-1"></div><div class="bg-glow-2"></div></div>
  ${content}
  <div class="footer">
    <div class="badge-pill"><img class="badge-logo" src="file:///C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png" /> dusoftware.dev</div>
  </div>
</body>
</html>`;

stories.forEach(s => {
  const html = template(s.content);
  fs.writeFileSync(path.join(OUTPUT_DIR, `story-${s.id}.html`), html);
});

console.log('Stories HTML gerados.');
