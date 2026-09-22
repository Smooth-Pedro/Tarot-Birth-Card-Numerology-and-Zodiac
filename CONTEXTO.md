# CONTEXTO — Site de Tarot Birth Card & Numerology
_Cole este arquivo no início de um chat novo para continuar sem redescobrir o projeto._

## 1. Primeiro passo (obrigatório)
Carregue a skill **`tarot-site-maintenance`** — ela tem todos os caminhos, comandos, regras de imagem/texto, scripts de build e pegadinhas do projeto. Este arquivo só complementa o que a skill não sabe: preferências e estado pendente.

## 2. Estado atual (atualizado em 2026-09-22)
- Site **pronto e compilado**: React 19 + Vite + Tailwind, 3 rotas (`/`, `/library`, `/pairs`), build em `app/dist`, pasta de deploy `tarot-numerology-site/` atualizada.
- **Preview local funciona**: há um `package.json` na raiz do workspace que delega `npm run dev` para `app/` e encaminha `--host/--port` ao Vite. É assim que o Kimi Work inicia o preview (porta 7100). Não deixe o 3000 como alvo.
- Jornada do Fool: 20 reuniões (I–XX), artes `the-fool-meets-01..20.jpg` em `app/public/journey/`. Em 2026-09-21 as artes **01–09 foram trocadas** por versões novas do usuário (`C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`), com **proporções variadas** (panoramas 2,36:1, retrato no 01) — por isso as imagens da jornada em `JourneyMeetings.tsx` e `LearnSection.tsx` usam `w-full h-auto object-contain` (quadro natural, sem crop). O fundo de hora (`.journey-bg-art`) continua `object-cover`.
- **Textos 6–9 reescritos** (progressão do Fool como o próprio personagem): 6 Lovers (encontra a moça, abre mão das coisas, **perde o cão**); 7 Chariot (o cocheiro é o próprio Fool adulto, drive + metas unilaterais); 8 Strength (é ele domando o leão por compaixão; **o cão retorna aqui**); 9 Hermit — título agora **"The Fool Becomes the Hermit"**: ele não encontra o Eremita, ele **SE TORNA** ele. Usuário vai explicar o motivo depois — não inventar justificativa.
- **HUD no canto superior esquerdo** (`journey-hud` no `index.css` + `FoolsJourney.tsx`): pílula pequena fixa "☾ HH:MM · THE FOOL MEETS THE X". No mobile fica abaixo do nav (top: 44px). Já existiu um painel de texto grande no canto — usuário pediu para remover; **não reintroduzir textão fixo**.
- Cartas do baralho (faces): 22 em `app/src/assets/cards/` (`NN_Nome_EN.jpg`).
- Textos das descrições: âmbar e maiores (bloco no fim de `index.css`).
- **Sem deploy no ar** — pasta `tarot-numerology-site/` pronta para arrastar ao host.
- Código-fonte documentado em `ESTADO-DO-PROJETO.md` (raiz do workspace).
- Usuário tem `REBUILD.bat` (duplo clique = build + atualiza pasta de deploy).
- Atenção: **não existe** `scripts/rebuild_deploy.sh` nem `scripts/normalize_image.py` (a skill menciona, mas o projeto não tem); agentes devem replicar: `npm run build` (com PATH do `.tools`) → apagar/recopiar `app/dist` → `tarot-numerology-site/`.

## 3. Pastas do usuário (fora do workspace)
- Artes da jornada (novas, 01–09): `C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`.
- Baralho mestre: `C:\Users\pudlo\OneDrive\Documents\Cards\`.
- Outras artes PT/EN: `C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Tarot Site\`.

## 4. Preferências do usuário
- Responda **sempre curto** — ele pediu explicitamente: sem textos gigantes, só o que foi perguntado.
- Site em **inglês**; conversa pode ser em PT.
- Gerador de imagem **rejeita nudez** (HTTP 403) — use reformulações (ex.: "bare-chested… loincloths", que funcionou no Diabo).
- Painéis/fixos grandes sobre a página = rejeitados; mantenha elementos de canto pequenos.

## 5. Pendências conhecidas
1. Arte + texto "The Fool Meets the World" (aguardando explicação do usuário).
2. Decisão de hospedagem (usuário vai escolher o serviço).
3. Skill de revisão de código (performance/tokens) — pedido antigo, três perguntas nunca respondidas.
4. **Inconsistência master numbers**: `NameNumerologyPanel` usa `baseOf()` (33→6) para card/perfis de Soul Urge e Personality, então mostra Os Enamorados em vez de O Mundo — mas `LIFE_PATH_CARD` em `numerology.ts` já mapeia `33: 21 // The World` (Life Path 33 mostra O Mundo). Usuário apontou isso; correção proposta (usar o master direto na busca do card, `baseOf` só nos one-liners) **ainda não foi aplicada** — confirmar antes de mexer.
