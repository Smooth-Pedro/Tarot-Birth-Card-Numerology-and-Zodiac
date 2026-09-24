# Resumo do contexto do chat — 24/09/2026

## Projeto
Site **Tarot Birth Cards & Numerology** (React 19 + Vite + Tailwind)
- Workspace: `C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Site de Tarot Birth Card and Numerology`
- Deploy local (fonte da verdade): `tarot-numerology-site/` (52 arquivos)
- Produção: https://tarot-birth-cards-numerology.pages.dev
- Projeto Pages: `tarot-birth-cards-numerology` — Account ID `7fc15c7b2533c3f7909e2fd3eac8f3d5`

## O que foi pedido e feito nesta sessão
1. **GitHub**: atualizar o repositório do projeto → feito (commits anteriores).
2. **Cloudflare**: parar tudo relacionado a Cloudflare por ordem do usuário ("cease anything to do with cloudflare") — EXCETO quando re-autorizado para um item específico.
3. **N8N**: usuário criou automação própria no N8N para manter o deploy no Cloudflare desconectado deste chat. Não interferir.
4. **Perguntas respondidas**:
   - Fazer "próprio clone de IA" não é gratuito (custo de GPU/infra); API do Gemini é o caminho prático; `_worker.js` é onde a API do Gemini está conectada (env var `GEMINI_API_KEY`).
5. **Fix autorizado (última tarefa)**: "background images aren't showing - fix JUST THAT" → **CONCLUÍDO**.

## Estado final do fix de backgrounds (VERIFICADO)
- Todas as 20 imagens `/journey/the-fool-meets-01..20.jpg` → 200 com tamanhos reais (~370–922 KB), JPEG válido conferido.
- Assets core, SPA routes (/library, /pairs, /astrology) e API `POST /api/daily-reading` → 200 (`{"configured":false}`).
- Deploy de produção atual: **v12, id `079012a2-68ca-4555-832b-8541a1bb0f3f`**, env=production, branch=main.

## Causa raiz do bug (importante para o N8N)
1. O deployment anterior (v11) saiu com manifest incompleto (1 entrada) — tudo 404 exceto `/`.
2. O asset store do Pages é content-addressed e **não sobrescreve** hashes já registrados; o conteúdo sob os hashes antigos estava corrompido (stubs de 32 bytes).
3. O endpoint `/pages/assets/upload` **exige `metadata.contentType`** — sem ele retorna sucesso mas não grava nada.
4. `upsert-hashes` usa `{"hashes": ["md5", ...]}` (só strings, sem size); `check-missing` usa `{"hashes": [...]}`.
5. Deploy direto via API: `POST /accounts/{aid}/pages/projects/{proj}/deployments`, multipart com parts `manifest` (JSON path→md5) + `_worker.js` (parte simples, filename=`_worker.js`). **Branch de produção do projeto é `main`** — usar `?branch=main` (query); `branch=production` cria preview.
6. Uploads via `/pages/assets/*` funcionam com curl local + JWT do endpoint `upload-token` (válido 30 min); criação de deployment **só via MCP** (OAuth; JWT dá 9106). MCP sandbox não consegue upload de assets (403, sem escopo).

## Arquivos temporários no workspace (`.tmp/`)
- `manifest-full.json` — manifesto completo dos 52 arquivos (com byte extra → hashes novos).
- `deploy/` — cópias staged dos 52 arquivos (conteúdo original + `\n` final).
- `jwt4.txt` — JWT de upload (provavelmente expirado).
- `kv-worker.b64` / `kv-worker.js` — transcrição corrompida, **não usar**.

## Pendente / avisos
- **`_worker.js` do repositório GitHub ≠ versão deployada** (md5 local `5d2a3465...` vs deployada `1b61435e12a782602d89b0a0babdf4c3`, ambas 4669 bytes). Se o N8N deployar do repo, o worker do repo sobrescreve o do Cloudflare — verificar se o do repo tem o SPA fallback fixado.
- Namespace KV temporário `5aa1bda219ab40cbb0c4348f9d436dfa` já foi **excluído** (cleanup feito).
- Deployments preview órfãos (`b44ddd85` falhou; `8a81a71f`, `04109f77` previews) expiram sozinhos.
- Nunca confiar em `successful_key_count` — sempre curl-verify após deploy.
