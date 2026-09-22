@echo off
REM ============================================================
REM  REBUILD.BAT - Recompila o site e atualiza a pasta de deploy
REM  Como usar: troque as imagens, deois DE DOIS CLIQUES neste
REM  arquivo. Depois e so arrastar a pasta "tarot-numerology-site"
REM  pro seu hospedeiro (Netlify, Cloudflare, etc).
REM ============================================================
set PATH=C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Site de Tarot Birth Card and Numerology\.tools;C:\Users\pudlo\AppData\Local\Programs\Kimi\resources\resources\runtime;%PATH%
cd /d "C:\Users\pudlo\OneDrive\Documents\Kimi\Workspaces\Site de Tarot Birth Card and Numerology\app"

echo.
echo === Compilando o site... ===
echo.
call npm run build
if errorlevel 1 (
  echo.
  echo !!! A COMPILACAO FALHOU. Me chama que eu resolvo. !!!
  pause
  exit /b 1
)

cd ..
echo.
echo === Atualizando a pasta de deploy... ===
if exist tarot-numerology-site rmdir /s /q tarot-numerology-site
xcopy /e /i /h /y "app\dist" "tarot-numerology-site" >nul

echo.
echo ============================================================
echo  PRONTO! A pasta "tarot-numerology-site" foi atualizada.
echo  Agora e so arrastar ela pro seu hospedeiro.
echo ============================================================
pause
