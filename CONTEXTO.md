# CONTEXTO — Site de Tarot Birth Card & Numerology
_Cole este arquivo no início de um chat novo para continuar sem redescobrir o projeto._

## 1. Primeiro passo (obrigatório)
Carregue a skill **`tarot-site-maintenance`** — ela tem todos os caminhos, comandos, regras de imagem/texto, scripts de build e pegadinhas do projeto. Este arquivo só complementa o que a skill não sabe: preferências, estado pendente e planos futuros.
Existe também a skill **`salvar-contexto`** (mesma pasta de skills): use quando o usuário pedir pra salvar/atualizar este arquivo ao fim de uma sessão — ela consolida o que rolou no chat aqui dentro.

## 2. Como o site funciona (visão geral)
- **Stack**: React 19 + Vite + Tailwind. Código em `app/src`, build em `app/dist`, deploy em `tarot-numerology-site/` (recriada do `dist` a cada build — nunca editar à mão).
- **7 rotas** (`App.tsx`): `/` (Home), `/library`, `/pairs`, `/astrology`, `/synastry`, `/astrology-library`, `/numerology-library`. `ScrollManager` cuida do scroll por âncora; `ArrowScroll` implementa o scroll por setas do teclado.
- **Dados = TypeScript, sem backend**: tudo é arquivo de dados tipado — `tarot.ts` (22 arcanos maiores: significados, keywords, shadow), `numerology.ts` (perfis 1–33, master numbers), `extendedNumerology.ts` (pares, karmic debts), `journeyMeeting.ts` (as 20 reuniões do Fool: title, role, place, text, image), `astrology.ts` (12 signos, 12 casas, 10 planetas, decans, ~620 cidades com lat/lng — interior de todos os 26 estados + DF, incl. Petrópolis RJ; além de Portugal, América Latina, Europa, Ásia, Oceania, África/Middle East, América do Norte), `natalChart.ts` (wrapper da lib astrológica), `tarotChart.ts` (mapa de tarot numérico por partes da data), `synastry.ts` (sinastria em 4 camadas), `numerologyParts.ts` (as 9 posições da numerologia explicadas). O build falha em entrada mal formada — é o "type-check" do projeto.
- **A Jornada do Fool** é também o **fundo do site**: `journeyCardAt` mapeia hora do dia → reunião (`the-fool-meets-NN.jpg`), rotacionando o cenário de fundo (`.journey-bg-art`, object-cover) conforme a hora local. HUD no canto superior esquerdo mostra "☾ HH:MM · THE FOOL MEETS THE X".
- **Imagens**: artes da jornada em `app/public/journey/the-fool-meets-NN.jpg` (NN = 01–20), referenciadas por número — trocar a imagem não exige editar código. Faces das cartas em `app/src/assets/cards/NN_Nome_EN.jpg` (glob-importado; prefixo de 2 dígitos + `_EN.jpg` obrigatórios).
- **Estilo**: descrições em âmbar/fontes maiores via bloco override no final de `index.css` — mexer lá, não nas classes Tailwind.
- **Preview local**: `package.json` na raiz do workspace delega `npm run dev` para `app/` e encaminha `--host/--port` ao Vite (porta 7100).
- **Build/deploy**: `REBUILD.bat` (duplo clique) para o usuário; agentes rodam `bash "C:/Users/pudlo/AppData/Roaming/kimi-desktop/daimon-share/daimon/skills/tarot-site-maintenance/scripts/rebuild_deploy.sh"` (funciona de qualquer diretório; deve terminar com `DEPLOY-OK ... 20 journey images`). Normalizar imagem = Pillow do `python` gerenciado (redimensionar mantendo proporção, salvar JPG q82; proporções variadas são aceitas, componentes usam `w-full h-auto object-contain`).
- Código-fonte documentado em `ESTADO-DO-PROJETO.md` (raiz do workspace).

## 3. Estado atual (atualizado em 2026-09-26)
- Site pronto e compilado; pasta de deploy atualizada. **Sem deploy no ar** — arrastar `tarot-numerology-site/` pro host quando o usuário escolher o serviço. Reconfirmado em 26/09: nenhuma mudança no site desde 24/09; hospedagem continua pendente (item 3 da seção 6). Só existe preview local (`npm run dev`, porta 7100).
- **24/09 — ASTROLOGIA + TAROT BIRTH CHART + SINASTRIA IMPLEMENTADOS** (deploy atualizado, verificado no browser — Sol/Lua/Ascendente conferem com a efeméride):
  - `/astrology` "The Tarot Sky": data obrigatória; hora e cidade opcionais (datalist com ~620 cidades em `astrology.ts` — cobertura completa do interior dos 26 estados + DF, mais cidades de Portugal, América Latina, Europa, Ásia, Oceania, África e América do Norte). Sol/Lua/10 planetas com signo, grau, Maior correspondente e decan; **detecção de cúspide da Lua** (se mudou de signo no dia, avisa que precisa da hora). Com hora+cidade: Ascendente, MC, casas whole-sign e **roda de tarot de 12 casas**; sem hora/cidade: aviso honesto + **anel zodiacal** (12 signos com os planetas). Mapa numérico de tarot sempre presente (day/month/year/attitude/birth cards/life path/year card).
  - `/synastry`: duas pessoas (nome/data/hora/cidade), 4 camadas com checkboxes — Signos (Sol×Lua×Ascendente por elementos), Tarot Cards (correntes de birth cards), Números (life path pelos grupos clássicos), Céu Completo (inter-aspectos com pesos; Vênus-Marte/Sol-Lua/Saturno com textos próprios). Score combinado = média das camadas + cada camada separada.
  - `/astrology-library` (Cosmos): 12 signos em profundidade (essência, sombra, amor, trabalho, Maior + 3 decans) e 12 casas em profundidade.
  - `/numerology-library` (Numbers): 9 posições explicadas separadamente (`numerologyParts.ts`, incl. karmic debts) + números 1–9/11/22/33 em profundidade.
  - Nav agora tem 7 itens (Reading · The Sky · Synastry · Cards · Numbers · Cosmos · Pairs).
  - **Gotcha técnico**: `circular-natal-horoscope-js` tem `module: src/index.js` no package.json mas o npm não publica `src/` (só `dist/`) — o Vite falhava; resolvido com **alias no `vite.config.ts`** apontando para `node_modules/.../dist/index.js`. Não remover esse alias.
  - **Gotcha de verificação**: o `fill` do InAppBrowser colou valores errados nos inputs (autofill do perfil do browser); para testar, setar valor via `evaluate` com o setter nativo + dispatch de `input`.
- **Jornada do Fool — artes 01–15 agora são versões do usuário** (`C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`); 16–20 ainda são as geradas. Proporções variadas (panoramas ~2,36:1; 01 e 12 são retrato) — por isso imagens da jornada usam `w-full h-auto object-contain` (quadro natural, sem crop).
  - **10 Wheel of Fortune**: arte trocada + **texto reescrito** — o Hermit (pós-9) tem a visão do infinito e de como tudo se conecta, vê a Roda no céu e recebe a oferta de voltar a ser jovem. Gancho p/ futuro: ele aceita e rejuvezce (arte 11 mostra o Fool jovem de novo).
  - **11 Justice**: arte trocada (Fool jovem diante da Justiça, cartas dos encontros no chão).
  - **12 Hanged Man**: arte trocada — agora é **o próprio Fool pendurado** (não um estranho). **Texto ainda descreve o encontro com o estranho — pendente reescrever para combinar com a arte.**
  - **13 Death**: arte do usuário trocada + **Fool consertado** (mangas igualadas no comprimento padrão, cotovelo; vara+mochila no chão aos pés, fora do corpo — mão direita segura a rosa branca).
  - **14 Temperance**: arte do usuário trocada (usada `TEMPERANCE.png`; variante `the_fool_meets_014 .png` ficou na pasta do usuário, não instalada). **Fool consertado**: mangas padrão; vara+mochila fora do ombro — agora é o **cão que segura a vara na boca** (mochila pendurada na ponta).
  - **15 Devil**: arte do usuário (`THE_DEVIL.png`, 1672×941). Antes: regen com casal acorrentado de coleiras soltas + chifres e cabelos vermelhos em chamas (nas duas versões geradas). O casal tem chifres, cabelo vermelho-flamejante e rabos, como na carta.
- **Padronização do Fool (06/13/14 feitos)**: design de referência = túnica verde-escura floral, gola branca (ruff), flapes vermelhos nos ombros, mangas até o cotovelo, botas amarelas, capa vermelha de penas. Regra do usuário: **quando a mão esquerda do Fool estiver ocupada com outra coisa, vara+mochila vão pro chão OU o cão segura na boca (modelo = arte 06)**. Arte 06 (Lovers) refeita: visual padronizado + cão segurando a vara direito.
- **Face da carta 10 Wheel of Fortune trocada** (nova arte do usuário, `Cards\10_Wheel_of_Fortune_EN.png`) — vale em todo o site (baralho, resultados, biblioteca). Face 15 Devil conferida em 22/09: o arquivo que o usuário mandou era idêntico (mesmo MD5) ao já instalado — nada a trocar.
- **Scroll por setas (desktop) consertado de verdade**: o `scroll-behavior: smooth` global em `index.css` fazia cada tick do intervalo reiniciar uma animação suave (por isso "segurar" parecia câmera lenta). Fix em `App.tsx` (`ArrowScroll`): tap = meia tela smooth (`innerHeight * 0.5`); hold = `scrollBy` com `behavior: 'instant'` a 60px/16ms após 250ms. Velocidades nos números dessas linhas se precisar ajustar de novo.
- **Textos 6–9 reescritos** (Fool como protagonista): 6 Lovers (abre mão, **perde o cão**); 7 Chariot (o cocheiro é o próprio Fool adulto); 8 Strength (doma o leão; **o cão retorna**); 9 Hermit = **"The Fool Becomes the Hermit"** (ele SE TORNA o Eremita; usuário explica o motivo — não inventar).
- HUD pequeno no canto (sem painéis grandes — usuário rejeitou textão fixo; manter elementos de canto pequenos).
- Gerador de imagem rejeita nudez (HTTP 403) — reformular ("bare-chested… loincloths" funcionou no Diabo).
- **Gotcha recorrente**: usuário às vezes deixa arquivos novos dentro de `tarot-numerology-site/` (deploy) — essa pasta é apagada e recopiada do `app/dist` a cada build, então arquivos lá se perdem. Sempre instalar em `app/public/journey/` e limpar as cópias soltas.

## 4. Pastas do usuário (fora do workspace)
- Artes novas da jornada: `C:\Users\pudlo\OneDrive\Documents\The Fool's Journey\`.
- Baralho mestre (faces das cartas): `C:\Users\pudlo\OneDrive\Documents\Cards\`.
- Outras artes PT/EN: `C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Tarot Site\`.

## 5. Ideias futuras — contas por email, leituras por IA e preço
Ideias discutidas para monetizar/expandir o site (nada implementado ainda):

- **Contas por email**: cadastro/login com email (magic link ou senha), sem rede social. Guarda: data de nascimento, histórico de leituras, favoritos. Stack simples possível: Supabase ou Firebase (auth + banco grátis no começo) + Vercel/Netlify Functions. Custo inicial ~zero.
- **Leitura de cartas por IA**: usuário faz uma pergunta → sorteia 1–3 arcanos → LLM gera interpretação no estilo do site (usar os textos de `tarot.ts` como contexto/anexo pra manter a voz). Pode ser: (a) tiragem diária gratuita, (b) leitura profunda paga, (c) chat contínuo com a leitura.
- **Astrologia, mapa astral de tarot e sinastria — IMPLEMENTADOS em 24/09** (ver seção 3). Escopos finais: mapa completo com degrade honesto (só data → sem ascendente/casas), mapa de tarot híbrido (numérico sempre + astrológico com hora/local), sinastria com 4 camadas juntas ou separadas, bibliotecas separadas de cosmos (signos+casas) e de numerologia (posições+números).
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
5. **Regra vara+mochila nas artes 01–05 e 11** (oferecido, usuário ainda não respondeu): aplicar o mesmo tratamento (chão ou cão) se quiser consistência total — hoje lá a pose clássica de ombro continua (mão esquerda livre, mão direita segura a vara).
6. Variante de Temperance (`the_fool_meets_014 .png`) ficou na pasta do usuário — trocar pela instalada (`TEMPERANCE.png`) se preferir a outra.
7. **Rodar `salvar-contexto` automaticamente ao fim de cada sessão de trabalho no site** (oferecido em 23/09 — aguardando resposta do usuário).
8. **Regenerar `ESTADO-DO-PROJETO.md`** — a estrutura mudou muito em 24/09 (4 rotas, 5 libs, nav nova, dependência npm); o snapshot está desatualizado.

## 7. Pesquisa técnica — Astrologia, Tarot Birth Chart & Sinastria (24/09/2026)

### Cálculo astrológico client-side
- **`circular-natal-horoscope-js`** (npm, GitHub 0xStarcat/CircularNatalHoroscopeJS): JS puro, roda no browser, sem backend. `Origin({year, month(0–11), date, hour, minute, latitude, longitude})` deriva timezone e UTC sozinho (inclui horário de verão histórico); `Horoscope` devolve Ascendente, MC, 10 planetas, nodos/Lilith, casas (placidus, whole-sign, equal-house, koch, regiomontanus, campanus, topocentric), trópico ou sideral, aspectos com orbs configuráveis e retrogradação. Base: efemérides Moshier + Jean Meeus. Funciona com TypeScript. É a recomendação principal.
- Alternativa `astronomy-engine` (MIT; o synastrychart.org a usa no browser): posições planetares precisas, mas **sem ascendente/casas** — serviria só pra sinastria por aspectos. Swiss Ephemeris wasm existe, mas é bem mais pesado.
- Regra de formulário: **data obrigatória; hora e cidade opcionais**. Sem hora → Sol/Lua calculados normalmente (a Lua anda 12–15°/dia, então há risco de cúspide); sem hora **não mostrar ascendente** (deckaura/astrologyrising usam 12:00 e marcam o ascendente como "estimado" — melhor omitir).
- Geocoding da cidade: precisa de uma fonte de lat/lng por cidade. Opções: lista embutida das principais cidades (zero dependência) ou API de geocoding (precisa chave). Decisão pendente.

### Correspondências tarot × astrologia (Golden Dawn / Book T)
- Signos → Maiores: Áries 4 Emperor, Touro 5 Hierophant, Gêmeos 6 Lovers, Câncer 7 Chariot, Leão 8 Strength, Virgem 9 Hermit, Libra 11 Justice, Escorpião 13 Death, Sagitário 14 Temperance, Capricórnio 15 Devil, Aquário 17 Star, Peixes 18 Moon.
- Planetas → Maiores: Mercúrio 1 Magician, Lua 2 High Priestess, Vênus 3 Empress, Marte 16 Tower, Júpiter 10 Wheel of Fortune, Saturno 21 World, Sol 19 Sun; atribuições modernas: Urano 0 Fool, Netuno 12 Hanged Man, Plutão 20 Judgement.
- Decanatos (36 decans de 10° ↔ menores numerados 2–10): naipe = elemento do signo (Wands=Fogo, Cups=Água, Swords=Ar, Pentacles=Terra); 2–4 = signos cardinais, 5–7 = fixos, 8–10 = mutáveis; começa em Áries I = 2 of Wands. Permite a "carta do grau exato" do Sol/Lua (ex.: Sol a 15° de Touro = 6 of Pentacles).
- Fontes: tarotologist.com/astrology (tabela Book T), kerykeion.net e thalira.com (decans).

### Tarot birth chart — como os sites existentes fazem
- **Birth card calculators** (o que o site já faz): tarot.com, deckaura.com, mysticmondays — método Tarot School: MM+DD+centúria+ano, reduzir a ≤21, depois soul card (às vezes tripla no 19).
- **"Birth Chart Tarot Spread"** (The Tarot Zodiac, Substack): usa o mapa natal de verdade; coloca a carta de cada signo nas 12 casas (whole-sign) e a carta de cada planeta ao lado da carta do signo onde ele está (ex.: Mercúrio em Aquário = Magician junto da Star). Exige data+hora+local.
- **"Birth year card"** (numerologia do ano): ano reduzido a 1–9 mapeado pra arcano+planeta (matéria do Yahoo/Parade). **Year card pessoal** (Greer): dia+mês+ano corrente reduzidos.
- **Destiny Matrix** (Natalia Ladini, 2006): octagrama de 22 arcanos derivado só da data (centro, pontos cardeais, linhas amor/dinheiro, cauda kármica); vários sites no ar (datemyst, destinymatrixcalc, theastroscope) — valida que existe mercado pra "mapa de tarot por data".

### Sinastria — referências
- **deckaura.com/pages/synastry-calculator**: compara Sol/Lua/Ascendente por elementos (Fogo+Ar se energizam, Terra+Água se nutrem) com score; funciona só com as datas.
- **synastrychart.org**: sinastria completa por aspectos, 100% no browser com astronomy-engine; score ponderado (Vênus–Marte pesa mais que Mercúrio–Saturno).
- **Destiny Matrix compat** (destinymatrixcalc.com): soma posição a posição das duas matrizes, redução subtrai-22 → "terceira energia" do casal (energia comum, karma, canal financeiro, zonas de tensão).
- **astromix.net** (sinastria clássica): Vênus/Marte = química, Saturno = estabilidade, overlay de casas 4/5/7/8 ativados pelos planetas do parceiro.
