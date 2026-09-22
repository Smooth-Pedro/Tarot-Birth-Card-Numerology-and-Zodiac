# CONTEXTO — Site de Tarot Birth Card & Numerology
_Cole este arquivo no início de um chat novo para continuar sem redescobrir o projeto._

## 1. Primeiro passo (obrigatório)
Carregue a skill **`tarot-site-maintenance`** — ela tem todos os caminhos, comandos, regras de imagem/texto, scripts de build e pegadinhas do projeto. Este arquivo só complementa o que a skill não sabe: preferências, estado pendente e planos futuros.

## 2. Como o site funciona (visão geral)
- **Stack**: React 19 + Vite + Tailwind. Código em `app/src`, build em `app/dist`, deploy em `tarot-numerology-site/` (recriada do `dist` a cada build — nunca editar à mão).
- **3 rotas** (`App.tsx`): `/` (Home), `/library`, `/pairs`. `ScrollManager` cuida do scroll por âncora; `ArrowScroll` implementa o scroll por setas do teclado.
- **Dados = TypeScript, sem backend**: tudo é arquivo de dados tipado — `tarot.ts` (22 arcanos maiores: significados, keywords, shadow), `numerology.ts` (perfis 1–33, master numbers), `extendedNumerology.ts` (pares, karmic debts), `journeyMeeting.ts` (as 20 reuniões do Fool: title, role, place, text, image). O build falha em entrada mal formada — é o "type-check" do projeto.
- **A Jornada do Fool** é também o **fundo do site**: `journeyCardAt` mapeia hora do dia → reunião (`the-fool-meets-NN.jpg`), rotacionando o cenário de fundo (`.journey-bg-art`, object-cover) conforme a hora local. HUD no canto superior esquerdo mostra "☾ HH:MM · THE FOOL MEETS THE X".
- **Imagens**: artes da jornada em `app/public/journey/the-fool-meets-NN.jpg` (NN = 01–20), referenciadas por número — trocar a imagem não exige editar código. Faces das cartas em `app/src/assets/cards/NN_Nome_EN.jpg` (glob-importado; prefixo de 2 dígitos + `_EN.jpg` obrigatórios).
- **Estilo**: descrições em âmbar/fontes maiores via bloco override no final de `index.css` — mexer lá, não nas classes Tailwind.
- **Preview local**: `package.json` na raiz do workspace delega `npm run dev` para `app/` e encaminha `--host/--port` ao Vite (porta 7100).
- **Build/deploy**: `REBUILD.bat` (duplo clique) para o usuário; agentes rodam `npm run build` com o PATH do `.tools` (ver `REBUILD.bat`), depois apagam e recopiam `app/dist` → `tarot-numerology-site/`. NÃO existem `scripts/rebuild_deploy.sh` nem `scripts/normalize_image.py` (a skill menciona, o projeto não tem) — normalizar imagem = Pillow do `python` gerenciado (redimensionar mantendo proporção, salvar JPG q82; proporções variadas são aceitas, componentes usam `w-full h-auto object-contain`).
- Código-fonte documentado em `ESTADO-DO-PROJETO.md` (raiz do workspace).

## 3. Estado atual (atualizado em 2026-09-22)
- Site pronto e compilado; pasta de deploy atualizada. **Sem deploy no ar** — arrastar `tarot-numerology-site/` pro host quando o usuário escolher o serviço.
- **Jornada do Fool — artes 01–12 agora são versões do usuário** (`C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`), com proporções variadas (panoramas ~2,36:1; 01 e 12 são retrato) — por isso imagens da jornada usam `w-full h-auto object-contain` (quadro natural, sem crop).
  - **10 Wheel of Fortune**: arte trocada + **texto reescrito** — o Hermit (pós-9) tem a visão do infinito e de como tudo se conecta, vê a Roda no céu e recebe a oferta de voltar a ser jovem. Gancho p/ futuro: ele aceita e rejuvezce (arte 11 mostra o Fool jovem de novo).
  - **11 Justice**: arte trocada (Fool jovem diante da Justiça, cartas dos encontros no chão).
  - **12 Hanged Man**: arte trocada — agora é **o próprio Fool pendurado** (não um estranho). **Texto ainda descreve o encontro com o estranho — pendente reescrever para combinar com a arte.**
- **Face da carta 10 Wheel of Fortune trocada** (nova arte do usuário, `Cards\10_Wheel_of_Fortune_EN.png`) — vale em todo o site (baralho, resultados, biblioteca).
- **Scroll por setas (desktop) consertado de verdade**: o `scroll-behavior: smooth` global em `index.css` fazia cada tick do intervalo reiniciar uma animação suave (por isso "segurar" parecia câmera lenta). Fix em `App.tsx` (`ArrowScroll`): tap = meia tela smooth (`innerHeight * 0.5`); hold = `scrollBy` com `behavior: 'instant'` a 60px/16ms após 250ms. Velocidades nos números dessas linhas se precisar ajustar de novo.
- **Textos 6–9 reescritos** (Fool como protagonista): 6 Lovers (abre mão, **perde o cão**); 7 Chariot (o cocheiro é o próprio Fool adulto); 8 Strength (doma o leão; **o cão retorna**); 9 Hermit = **"The Fool Becomes the Hermit"** (ele SE TORNA o Eremita; usuário explica o motivo — não inventar).
- HUD pequeno no canto (sem painéis grandes — usuário rejeitou textão fixo; manter elementos de canto pequenos).
- Gerador de imagem rejeita nudez (HTTP 403) — reformular ("bare-chested… loincloths" funcionou no Diabo).

## 4. Pastas do usuário (fora do workspace)
- Artes novas da jornada: `C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`.
- Baralho mestre (faces das cartas): `C:\Users\pudlo\OneDrive\Documents\Cards\`.
- Outras artes PT/EN: `C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Tarot Site\`.

## 5. Ideias futuras — contas por email, leituras por IA e preço
Ideias discutidas para monetizar/expandir o site (nada implementado ainda):

- **Contas por email**: cadastro/login com email (magic link ou senha), sem rede social. Guarda: data de nascimento, histórico de leituras, favoritos. Stack simples possível: Supabase ou Firebase (auth + banco grátis no começo) + Vercel/Netlify Functions. Custo inicial ~zero.
- **Leitura de cartas por IA**: usuário faz uma pergunta → sorteia 1–3 arcanos → LLM gera interpretação no estilo do site (usar os textos de `tarot.ts` como contexto/anexo pra manter a voz). Pode ser: (a) tiragem diária gratuita, (b) leitura profunda paga, (c) chat contínuo com a leitura.
- **Preços possíveis** (estimativas de mercado, validar antes de publicar):
  - Leitura avulsa por IA: **US$ 3–10** (ou pacote de 5 por US$ 15–30).
  - Assinatura mensal (tiragem diária + histórico + leituras ilimitadas): **US$ 5–15/mês**.
  - Relatório PDF completo (birth card + numerologia + jornada): **US$ 9–19** avulso.
  - Freemium de entrada: cálculo de birth card grátis (já é o core do site) e 1 leitura de amostra grátis com cadastro.
- Decisões pendentes do usuário: se/quando implementar, provedor de IA (custo por leitura ~centavos com modelo pequeno), e gateway de pagamento (Stripe/PayPal, Mercado Pago se público BR).

## 6. Pendências conhecidas
1. **Reescrever texto do Hanged Man (12)** pra combinar com a arte nova (o próprio Fool pendurado).
2. Arte + texto "The Fool Meets the World" (21) — aguardando explicação do usuário.
3. Decisão de hospedagem (usuário escolhe o serviço).
4. **Inconsistência master numbers**: `NameNumerologyPanel` usa `baseOf()` (33→6) para card/perfis de Soul Urge e Personality, mas `LIFE_PATH_CARD` em `numerology.ts` já mapeia `33: 21 // The World`. Correção proposta (usar o master direto na busca do card) **ainda não aplicada** — confirmar antes de mexer.
