# Squad Memory: dusoftware-showcase

## Estilo de Escrita
- **Tom:** Premium, visionário, técnico e autoritário (Estilo "Software de Elite").
- **Concisão:** Textos curtos e magnéticos. Sem parágrafos extensos. Uso de gatilhos mentais voltados a ROI, escalabilidade e valor.
- **Terminologia Chave:** "Ativos Digitais" (em vez de sites), "Engenharia de Precisão", "Zero Fricção", "Design System", "Cloud".

## Design Visual
- **Direção de Arte:** "Spatial Design" e Glassmorphism.
- **Identidade de Marca (CRUCIAL):** É OBRIGATÓRIO o uso da logo oficial da Du-Software em todos os carrosséis institucionais e projetos. O asset absoluto da logo está localizado obrigatoriamente e permanentemente em `C:/Users/eddua/opensquad/squads/dusoftware-showcase/images/logo.png`. Use este caminho via `file:///` para src de imagens.
- **Paleta de Cores:** Fundo Super Dark (`#050505`), Accent Primário Violeta (`#8B5CF6`), Accent Secundário Azul (`#3B82F6`), com glow flares radiais no fundo (orbs iluminados).
- **Tipografia:** Fonte 'Inter' para interface e corpo + 'JetBrains Mono' para elementos de código.
- **Apresentação de Produto:** Uso contínuo do sistema **"Bento Grid"**. Componentes em formato "glass" (backdrop-filter: blur) com bordas finas (`rgba(255,255,255,0.08)`).
- **Mocks SaaS Genéricos:** Quando não houver screenshot específica do cliente disponível, utilizar a técnica de "SaaS Dashboard Abstract Skeleton" gerada por código (via Divs/CSS gradient e glassmorphism), para ilustrar funcionalidade e robustez técnica sem depender de marcas de terceiros.
- **Apresentação de Mockups (Crucial):** Utilizar setups assimétricos (ex: *Grid-Hybrid* ou *Focus-Grid*). Aplicar rotação 3D isométrica (`rotateX`, `rotateZ`) ou janelas estáticas integrais. Imagens NUNCA devem ser cortadas drasticamente ou ter textos longos jogados diretamente sobre telas de UI.
 
## Estrutura de Conteúdo (Carrossel Padrão - 10 Slides)
1. **Hero/Capa:** Impacto visual massivo (Mockup herói fluindo da borda) + Título Gigante + Eyebrow.
2. **Contextualização do Problema:** Ex: "O mercado está cheio de sistemas lentos".
3. **Pilares / Solução:** Mostrar arquitetura, UI/UX premium.
4-8. **Showcase Visual / Funcionalidades:** Cards Bento focados ou Mockups 3D com bullet points ultra limpos.
9. **Filosofia / Diferencial:** Value Proposition (Ex: "Não entregamos código, entregamos valor").
10. **CTA Final:** Slide altamente focado em conversão.

## Proibições Explícitas
- 🚫 Proibido usar gradientes de texto bregas ou paletas fora do Dark/Violet/Blue.
- 🚫 Proibido cruzar textos legíveis diretamente EM CIMA de prints de tela. Prints (mockups) precisam de espaço próprio no Bento Grid.
- 🚫 Proibido texto longo discursivo. O foco é UI Showcase e bullet points de copy.
- 🚫 Proibido `object-fit: cover` em imagens de mockups de software se isso cortar a interface. Prefira `object-fit: contain` em contêineres "glass" focados.

## Técnico (específico do squad)
- **Pipeline de Imagens:** Geração via Scripts Node.js (`build_institutional.js`, etc.) exportando templates em arquivos `.html`.
- **Motor de Prints:** Extratores via `Puppeteer` (`capture_institutional.js`) simulando device 2x scale (1080x1350) para Instagram.
- **Publicação:** Upload direto das imagens. (Nota: `localtunnel` e `ImgBB` podem sofrer bloqueios temporais de scraper da API Meta; a geração de PNG local está 100% calibrada e funciona perfeitamente para publicação direta).
- **Setup Variáveis:** O `INSTAGRAM_ACCESS_TOKEN` foi atualizado em `.env` (Long-lived ativado via Meta Graph Explorer).
