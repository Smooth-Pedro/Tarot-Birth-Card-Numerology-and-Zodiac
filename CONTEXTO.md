# CONTEXTO — Site de Tarot Birth Card & Numerology
_Cole este arquivo no início de um chat novo para continuar sem redescobrir o projeto._

## 1. Primeiro passo (obrigatório)
Carregue a skill **`tarot-site-maintenance`** — ela tem todos os caminhos, comandos, regras de imagem/texto, scripts de build e pegadinhas do projeto. Este arquivo só complementa o que a skill não sabe: preferências e estado pendente.

## 2. Estado atual
- Site **pronto e compilado**: React 19 + Vite + Tailwind, 3 rotas (`/`, `/library`, `/pairs`), build em `app/dist`, pasta de deploy `tarot-numerology-site/` atualizada.
- Jornada do Fool: 20 artes "THE FOOL MEETS THE X" (`01`–`20`) concluídas; **falta só o Mundo (21)** — o usuário vai explicar como quer ele antes de gerar.
- Cartas do baralho (faces): 22 em `app/src/assets/cards/` (nomeadas `NN_Nome_EN.jpg`). Sacerdotisa e Diabo já foram corrigidas/regeneradas.
- Textos das descrições: âmbar e maiores (bloco no fim de `index.css`).
- **Não há deploy no ar no momento** (o Netlify Drop antigo expirou; usuário não quer Netlify; pasta de deploy está pronta pra Cloudflare Pages/Netlify/etc).
- Código-fonte completo documentado em `ESTADO-DO-PROJETO.md` (na raiz do workspace).
- Usuário tem `REBUILD.bat` (duplo clique = build + atualiza pasta de deploy).

## 3. Pastas do usuário (fora do workspace)
- Baralho mestre: `C:\Users\pudlo\OneDrive\Documents\Cards\` (original da Sacerdotisa intacto; versão corrigida salva como `_fixed.png`).
- Outras artes PT/EN: `C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Tarot Site\`.

## 4. Preferências do usuário
- Responda **sempre curto** — ele pediu explicitamente: sem textos gigantes, só o que foi perguntado.
- Site em **inglês**; conversa pode ser em PT.
- Gerador de imagem **rejeita nudez** (HTTP 403) — use reformulações (ex.: "bare-chested… loincloths", que funcionou no Diabo).

## 5. Pendências conhecidas
1. Arte + texto "The Fool Meets the World" (aguardando explicação do usuário).
2. Decisão de hospedagem (usuário vai escolher o serviço).
3. Skill de revisão de código (performance/tokens) — pedido antigo, três perguntas nunca respondidas.
