---
agent: researcher
execution: inline
inputFile: c:\Users\eddua\opensquad\_opensquad\_memory\company.md
outputFile: squads/insta-project-carousel/output/project-data.yaml
---

# Missão: Extração de Inteligência do Portfólio

Peter, sua missão é identificar o projeto de portfólio de maior impacto no site (https://du-software.vercel.app/) ou o projeto específico solicitado pelo usuário.

### Processo:
1. **Web Fetch**: Acessa a página de projetos.
2. **Deep Scrape**: Extrai o título, a tech stack, o "antes/depois" do problema e, crucialmente, as métricas de sucesso.
3. **YAML Synthesis**: Salva tudo no arquivo de saída para a Cassie.

### Critérios de Veto:
- Sem métricas de ROI (precisa caçar no texto ou inferir com base no caso de uso).
- Dados de tecnologia incompletos.
