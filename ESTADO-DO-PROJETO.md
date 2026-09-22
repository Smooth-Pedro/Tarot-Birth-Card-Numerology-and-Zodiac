# Estado do Projeto — Site de Tarot Birth Card and Numerology

_Gerado em 20/09/2026 13:17 · build atual compilado em `app/dist` · pasta de deploy: `tarot-numerology-site/`_

## 1. Estrutura de arquivos

```
src/src/App.css
src/src/App.tsx
src/src/assets/cards/00_O_Louco_EN.jpg
src/src/assets/cards/01_O_Mago_EN.jpg
src/src/assets/cards/02_A_Sacerdotisa_EN.jpg
src/src/assets/cards/03_A_Imperatriz_EN.jpg
src/src/assets/cards/04_O_Imperador_EN.jpg
src/src/assets/cards/05_O_Hierofante_EN.jpg
src/src/assets/cards/06_Os_Enamorados_EN.jpg
src/src/assets/cards/07_O_Carro_EN.jpg
src/src/assets/cards/08_A_Forca_EN.jpg
src/src/assets/cards/09_O_Eremita_EN.jpg
src/src/assets/cards/10_Wheel_of_Fortune_EN.jpg
src/src/assets/cards/11_Justice_EN.jpg
src/src/assets/cards/12_The_Hanged_Man_EN.jpg
src/src/assets/cards/13_Death_EN.jpg
src/src/assets/cards/14_Temperance_EN.jpg
src/src/assets/cards/15_The_Devil_EN.jpg
src/src/assets/cards/16_The_Tower_EN.jpg
src/src/assets/cards/17_The_Star_EN.jpg
src/src/assets/cards/18_The_Moon_EN.jpg
src/src/assets/cards/19_The_Sun_EN.jpg
src/src/assets/cards/20_Judgement_EN.jpg
src/src/assets/cards/21_The_World_EN.jpg
src/src/assets/celestial-bg.jpg
src/src/assets/fool-walk.png
src/src/components/ExtendedChartPanel.tsx
src/src/components/FoolsJourney.tsx
src/src/components/JourneyMeetings.tsx
src/src/components/JusticeCuriosity.tsx
src/src/components/LearnSection.tsx
src/src/components/NameExtrasPanel.tsx
src/src/components/NameNumerologyPanel.tsx
src/src/components/ResultsPanel.tsx
src/src/components/SmartRef.tsx
src/src/components/TarotCardFace.tsx
src/src/components/ui/accordion.tsx
src/src/components/ui/alert-dialog.tsx
src/src/components/ui/alert.tsx
src/src/components/ui/aspect-ratio.tsx
src/src/components/ui/avatar.tsx
src/src/components/ui/badge.tsx
src/src/components/ui/breadcrumb.tsx
src/src/components/ui/button-group.tsx
src/src/components/ui/button.tsx
src/src/components/ui/calendar.tsx
src/src/components/ui/card.tsx
src/src/components/ui/carousel.tsx
src/src/components/ui/chart.tsx
src/src/components/ui/checkbox.tsx
src/src/components/ui/collapsible.tsx
src/src/components/ui/command.tsx
src/src/components/ui/context-menu.tsx
src/src/components/ui/dialog.tsx
src/src/components/ui/drawer.tsx
src/src/components/ui/dropdown-menu.tsx
src/src/components/ui/empty.tsx
src/src/components/ui/field.tsx
src/src/components/ui/form.tsx
src/src/components/ui/hover-card.tsx
src/src/components/ui/input-group.tsx
src/src/components/ui/input-otp.tsx
src/src/components/ui/input.tsx
src/src/components/ui/item.tsx
src/src/components/ui/kbd.tsx
src/src/components/ui/label.tsx
src/src/components/ui/menubar.tsx
src/src/components/ui/navigation-menu.tsx
src/src/components/ui/pagination.tsx
src/src/components/ui/popover.tsx
src/src/components/ui/progress.tsx
src/src/components/ui/radio-group.tsx
src/src/components/ui/resizable.tsx
src/src/components/ui/scroll-area.tsx
src/src/components/ui/select.tsx
src/src/components/ui/separator.tsx
src/src/components/ui/sheet.tsx
src/src/components/ui/sidebar.tsx
src/src/components/ui/skeleton.tsx
src/src/components/ui/slider.tsx
src/src/components/ui/sonner.tsx
src/src/components/ui/spinner.tsx
src/src/components/ui/switch.tsx
src/src/components/ui/table.tsx
src/src/components/ui/tabs.tsx
src/src/components/ui/textarea.tsx
src/src/components/ui/toggle-group.tsx
src/src/components/ui/toggle.tsx
src/src/components/ui/tooltip.tsx
src/src/hooks/use-mobile.ts
src/src/index.css
src/src/lib/cardArt.ts
src/src/lib/extendedNumerology.ts
src/src/lib/journeyMeeting.ts
src/src/lib/nameNumerology.ts
src/src/lib/numerology.ts
src/src/lib/tarot.ts
src/src/lib/utils.ts
src/src/main.tsx
src/src/pages/Home.tsx
src/src/pages/LibraryPage.tsx
src/src/pages/PairsPage.tsx
public/_redirects
public/journey/  (20 artes: the-fool-meets-01.jpg … the-fool-meets-20.jpg)
dist/  (build de produção)
```

> `src/components/ui/` (48 arquivos) é a biblioteca padrão shadcn/ui, usada sem alterações — não reproduzida aqui. `src/assets/` contém as imagens (22 cartas EN, fundo celestial, sprite antigo).

## 2. Código-fonte de cada arquivo

### `app/package.json` (2.5 KB)

```json
{
  "name": "my-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.562.0",
    "next-themes": "^0.4.6",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-router": "^7.6.1",
    "react-hook-form": "^7.70.0",
    "react-resizable-panels": "^4.2.2",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "vaul": "^1.1.2",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "kimi-plugin-inspect-react": "^1.0.3",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}
```

### `app/vite.config.ts` (0.4 KB)

```ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### `app/tailwind.config.js` (2.7 KB)

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### `app/postcss.config.js` (0.1 KB)

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `app/index.html` (0.8 KB)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Calculate your Tarot Birth Cards and Numerology Life Path number from your birth date — one complete reading."
    />
    <title>Tarot Birth Cards &amp; Numerology</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `app/public/_redirects` (0.1 KB)

```text
# SPA fallback: every path serves the app
/*    /index.html   200
```

### `app/src/main.tsx` (0.3 KB)

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

### `app/src/App.tsx` (3.1 KB)

```tsx
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import LibraryPage from './pages/LibraryPage'
import PairsPage from './pages/PairsPage'

/** Smooth-scroll to the hash target after a route change; top otherwise */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

/**
 * Arrow keys scroll the page (skipped while typing in inputs).
 * Single press = one screen, smooth. Holding = continuous fast scroll
 * driven by a timer (~85 px per frame, independent of the OS key-repeat
 * rate, which is what made holding feel so slow before).
 */
function ArrowScroll() {
  useEffect(() => {
    let interval: number | null = null
    let holdTimer: number | null = null
    let heldKey: string | null = null

    const stop = () => {
      if (interval !== null) {
        clearInterval(interval)
        interval = null
      }
      if (holdTimer !== null) {
        clearTimeout(holdTimer)
        holdTimer = null
      }
      heldKey = null
    }

    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return
      const dir =
        e.key === 'ArrowDown' || e.key === 'ArrowRight'
          ? 1
          : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
            ? -1
            : 0
      if (!dir) return
      e.preventDefault()
      if (e.repeat) return // the hold-interval keeps scrolling while the key stays down
      if (heldKey === e.key) return
      stop()
      heldKey = e.key

      // tap: one smooth jump
      window.scrollBy({ top: dir * window.innerHeight * 0.85, behavior: 'smooth' })

      // hold: after a short delay, scroll fast until keyup / window blur
      holdTimer = window.setTimeout(() => {
        const tick = () => window.scrollBy({ top: dir * 85, behavior: 'auto' })
        tick()
        interval = window.setInterval(tick, 16)
      }, 350)
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === heldKey) stop()
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', stop)
    return () => {
      stop()
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', stop)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <ArrowScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/pairs" element={<PairsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
```

### `app/src/index.css` (6.3 KB)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 258 45% 6%;
    --foreground: 240 20% 95%;
    --card: 258 40% 9%;
    --card-foreground: 240 20% 95%;
    --popover: 258 40% 9%;
    --popover-foreground: 240 20% 95%;
    --primary: 43 85% 62%;
    --primary-foreground: 258 45% 8%;
    --secondary: 255 30% 16%;
    --secondary-foreground: 240 20% 95%;
    --muted: 255 25% 14%;
    --muted-foreground: 245 15% 68%;
    --accent: 255 30% 16%;
    --accent-foreground: 240 20% 95%;
    --destructive: 0 70% 55%;
    --destructive-foreground: 0 0% 98%;
    --border: 255 25% 20%;
    --input: 255 25% 22%;
    --ring: 43 85% 62%;
    --radius: 0.625rem;
    --sidebar-background: 258 40% 9%;
    --sidebar-foreground: 240 20% 95%;
    --sidebar-primary: 43 85% 62%;
    --sidebar-primary-foreground: 258 45% 8%;
    --sidebar-accent: 255 30% 16%;
    --sidebar-accent-foreground: 240 20% 95%;
    --sidebar-border: 255 25% 20%;
    --sidebar-ring: 43 85% 62%;
  }

  .dark {
    --background: 258 45% 6%;
    --foreground: 240 20% 95%;
    --card: 258 40% 9%;
    --card-foreground: 240 20% 95%;
    --popover: 258 40% 9%;
    --popover-foreground: 240 20% 95%;
    --primary: 43 85% 62%;
    --primary-foreground: 258 45% 8%;
    --secondary: 255 30% 16%;
    --secondary-foreground: 240 20% 95%;
    --muted: 255 25% 14%;
    --muted-foreground: 245 15% 68%;
    --accent: 255 30% 16%;
    --accent-foreground: 240 20% 95%;
    --destructive: 0 70% 55%;
    --destructive-foreground: 0 0% 98%;
    --border: 255 25% 20%;
    --input: 255 25% 22%;
    --ring: 43 85% 62%;
    --sidebar-background: 258 40% 9%;
    --sidebar-foreground: 240 20% 95%;
    --sidebar-primary: 43 85% 62%;
    --sidebar-primary-foreground: 258 45% 8%;
    --sidebar-accent: 255 30% 16%;
    --sidebar-accent-foreground: 240 20% 95%;
    --sidebar-border: 255 25% 20%;
    --sidebar-ring: 43 85% 62%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  }
}

/* Display font for headings & card names */
.font-cinzel {
  font-family: 'Cinzel', 'Times New Roman', serif;
}

/* Starry night backdrop: celestial artwork under a deep-indigo veil */
.starfield {
  isolation: isolate;
  background:
    radial-gradient(ellipse at 50% -10%, rgba(99, 80, 220, 0.18), transparent 60%),
    radial-gradient(ellipse at 50% 110%, rgba(120, 60, 180, 0.15), transparent 60%),
    linear-gradient(rgba(16, 10, 34, 0.88), rgba(13, 8, 28, 0.9)),
    url('./assets/celestial-bg.jpg');
  background-size:
    auto,
    auto,
    auto,
    cover;
  background-position:
    center,
    center,
    center,
    center;
  background-attachment: fixed;
}

/* Gentle floating for hero symbols */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}

/* Results fade-in */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.7s ease-out both;
}

/* Smooth anchor navigation for the library links */
html {
  scroll-behavior: smooth;
}
[id] {
  scroll-margin-top: 5rem;
}

/* ── The Fool's Journey background: the meeting of the hour ── */
.journey-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  background: #0d081c;
}
.journey-bg-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.32;
  filter: saturate(0.85) brightness(0.8);
  animation: journey-dissolve 1.6s ease-out both;
}
.journey-bg-openroad {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% -10%, rgba(99, 80, 220, 0.18), transparent 60%),
    radial-gradient(ellipse at 50% 110%, rgba(120, 60, 180, 0.15), transparent 60%),
    linear-gradient(rgba(16, 10, 34, 0.88), rgba(13, 8, 28, 0.9)),
    url('./assets/celestial-bg.jpg');
  background-size: auto, auto, auto, cover;
  background-position: center;
  opacity: 0.5;
}
/* indigo veil so the content above stays readable */
.journey-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(13, 8, 28, 0.55), rgba(13, 8, 28, 0.4) 40%, rgba(13, 8, 28, 0.78)),
    radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(13, 8, 28, 0.5) 100%);
}
@keyframes journey-dissolve {
  from {
    opacity: 0;
    transform: scale(1.03);
  }
  to {
    opacity: 0.32;
    transform: none;
  }
}
.journey-caption {
  position: absolute;
  left: 14px;
  bottom: 10px;
  max-width: 62ch;
  font-size: 11.5px;
  line-height: 1.5;
  font-style: italic;
  color: rgba(196, 205, 252, 0.78);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
  z-index: 1;
}
.journey-caption .journey-clock {
  display: block;
  font-style: normal;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 9px;
  color: rgba(251, 191, 36, 0.85);
  margin-bottom: 3px;
}
.journey-role {
  display: inline-block;
  margin-left: 8px;
  padding: 1px 7px;
  border-radius: 999px;
  border: 1px solid currentColor;
  letter-spacing: 0.14em;
  font-size: 8px;
}
.journey-role-friend,
.journey-role-rejuvenation,
.journey-role-rebirth {
  color: rgba(110, 231, 183, 0.9);
}
.journey-role-guide,
.journey-role-teacher {
  color: rgba(147, 197, 253, 0.9);
}
.journey-role-trial,
.journey-role-ordeal {
  color: rgba(251, 191, 36, 0.9);
}
.journey-role-foe,
.journey-role-destruction {
  color: rgba(253, 164, 175, 0.9);
}
@media (max-width: 640px) {
  .journey-caption {
    max-width: 36ch;
    font-size: 10px;
  }
}

/* ── Readability pass: descriptions in warm amber, larger letters ──
   Every description-toned text (indigo body copy, rose shadow side,
   emerald guidance) becomes a warm yellow; body sizes go up. */
[class*='text-indigo-']:not(.text-indigo-950):not([class*='placeholder:']),
[class*='text-rose-100'],
[class*='text-rose-200'],
[class*='text-emerald-50'],
[class*='text-emerald-200'] {
  color: rgba(253, 230, 138, 0.95) !important;
}
.text-xs {
  font-size: 0.82rem !important;
}
.text-sm {
  font-size: 1rem !important;
  line-height: 1.75 !important;
}
.journey-caption {
  font-size: 13px;
  color: rgba(253, 230, 138, 0.9);
}
```

### `app/src/App.css` (0.6 KB)

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

### `app/src/pages/Home.tsx` (19.8 KB)

```tsx
import { useMemo, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import ResultsPanel, { type ReadingScope } from '@/components/ResultsPanel'
import FoolsJourney from '@/components/FoolsJourney'
import JourneyMeetings, { type JourneyEntry } from '@/components/JourneyMeetings'
import { SiteNav, LibLink, PairLink } from '@/components/SmartRef'
import { computeBirthCards } from '@/lib/tarot'
import { computeLifePath, getNumberProfile } from '@/lib/numerology'
import { computeNameNumbers } from '@/lib/nameNumerology'

type ScopeOption = {
  value: ReadingScope
  icon: string
  label: string
  hint: string
}

const SCOPE_OPTIONS: ScopeOption[] = [
  { value: 'date', icon: '📅', label: 'Date of birth', hint: 'Tarot birth cards & life path' },
  { value: 'name', icon: '🔤', label: 'Name', hint: 'Destiny, soul urge & personality' },
  { value: 'all', icon: '✦', label: 'Everything', hint: 'The complete chart' },
]

function dateWorkings(date: string): string {
  const digits = date.replace(/\D/g, '')
  const total = digits.split('').reduce((acc, d) => acc + Number(d), 0)
  return digits.split('').join(' + ') + ' = ' + total
}

export default function Home() {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [scope, setScope] = useState<ReadingScope>('all')
  const [error, setError] = useState('')
  const [result, setResult] = useState<{
    date: string
    name: string
    scope: ReadingScope
    birth: NonNullable<ReturnType<typeof computeBirthCards>> | null
    lifePath: NonNullable<ReturnType<typeof computeLifePath>> | null
    workings: string
  } | null>(null)

  const needsDate = scope === 'date' || scope === 'all'
  const needsName = scope === 'name' || scope === 'all'

  /** The user's cards, shown as "The Fool Meets Your Cards" after the results */
  const journeyEntries = useMemo<JourneyEntry[]>(() => {
    if (!result) return []
    const out: JourneyEntry[] = []
    if (result.birth) {
      out.push({ num: result.birth.primary, label: 'Birth Card' })
      if (result.birth.secondary !== result.birth.primary) {
        out.push({ num: result.birth.secondary, label: 'Soul Card' })
      }
    }
    if (result.lifePath) {
      const card = getNumberProfile(result.lifePath.number).card
      if (card) out.push({ num: card.num, label: 'Life Path Card' })
    }
    if (result.name) {
      const nn = computeNameNumbers(result.name)
      const card = nn ? getNumberProfile(nn.expression).card : null
      if (card) out.push({ num: card.num, label: 'Name Card' })
    }
    return out
  }, [result])

  const handleCalculate = () => {
    if (needsDate && !date) {
      setError(
        scope === 'date'
          ? 'Please choose your birth date first.'
          : 'Please choose your birth date first — or switch to the name-only reading.',
      )
      return
    }
    if (needsName && !name.trim()) {
      setError(
        scope === 'name'
          ? 'Please enter your name for a name reading.'
          : 'Please enter your name for the name numerology layer.',
      )
      return
    }
    if (name.trim() && !/[A-Za-z]/.test(name)) {
      setError('Your name needs at least one letter for name numerology.')
      return
    }

    const birth = needsDate ? computeBirthCards(date) : null
    const lifePath = needsDate ? computeLifePath(date) : null
    if (needsDate && (!birth || !lifePath)) {
      setError('That date does not look right — please try again.')
      return
    }
    setError('')
    setResult({
      date,
      name: name.trim(),
      scope,
      birth,
      lifePath,
      workings: needsDate && date ? dateWorkings(date) : '',
    })
    setTimeout(
      () => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }),
      100,
    )
  }

  return (
    <div className="starfield min-h-screen">
      {/* ── The Fool's Journey: the meeting of the hour, behind everything ── */}
      <FoolsJourney />
      <SiteNav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <header className="relative px-6 pt-20 pb-14 text-center max-w-4xl mx-auto">
        <div className="text-amber-200/70 text-5xl mb-6 animate-float">☾ ✦ ☀</div>
        <h1 className="font-cinzel text-4xl sm:text-6xl text-amber-100 leading-tight drop-shadow-[0_0_25px_rgba(251,191,36,0.25)]">
          Tarot Birth Cards
          <span className="block text-2xl sm:text-3xl mt-3 text-indigo-200/90">
            &amp; Numerology Life Path
          </span>
        </h1>
        <p className="mt-6 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed">
          Your birth date is a key. Turn it once through the Major Arcana to reveal your{' '}
          <span className="text-amber-200">Tarot Birth Cards</span> — then through the numbers to
          find your <span className="text-amber-200">Life Path</span>. Add your name and the
          Pythagorean chart reveals your <span className="text-amber-200">Destiny, Soul Urge and
          Personality numbers</span> — one complete portrait of who you are and why you are here.
        </p>

        {/* ── Calculator form ────────────────────────────── */}
        <Card className="mt-10 max-w-md mx-auto bg-white/[0.04] border-indigo-400/25 backdrop-blur-md shadow-[0_0_60px_-15px_rgba(99,80,220,0.5)]">
          <CardContent className="pt-6 pb-6 space-y-5">
            <div className="space-y-2">
              <Label className="text-indigo-200/90 tracking-wide">What would you like to read?</Label>
              <div className="grid grid-cols-3 gap-2">
                {SCOPE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setScope(opt.value)
                      setError('')
                    }}
                    className={`rounded-xl border px-2 py-3 text-center transition-all ${
                      scope === opt.value
                        ? 'border-amber-300/60 bg-amber-200/10 shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)]'
                        : 'border-indigo-400/20 bg-indigo-950/30 hover:border-indigo-300/40'
                    }`}
                  >
                    <span className="block text-xl mb-1">{opt.icon}</span>
                    <span
                      className={`block text-xs font-cinzel tracking-wide ${
                        scope === opt.value ? 'text-amber-200' : 'text-indigo-200/80'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <span className="block text-[10px] text-indigo-300/50 mt-0.5 leading-tight">
                      {opt.hint}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {needsDate && (
              <div className="space-y-2 text-left">
                <Label htmlFor="birthdate" className="text-indigo-200/90 tracking-wide">
                  Your birth date
                </Label>
                <Input
                  id="birthdate"
                  type="date"
                  value={date}
                  min="1900-01-01"
                  max="2099-12-31"
                  onChange={(e) => {
                    setDate(e.target.value)
                    setError('')
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCalculate()
                  }}
                  className="bg-indigo-950/50 border-indigo-400/30 text-indigo-100 focus-visible:ring-amber-300/60 [color-scheme:dark]"
                />
              </div>
            )}
            {needsName && (
              <div className="space-y-2 text-left">
                <Label htmlFor="fullname" className="text-indigo-200/90 tracking-wide">
                  Your full name
                  {scope === 'all' && (
                    <span className="text-indigo-300/50"> (for name numerology)</span>
                  )}
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  value={name}
                  placeholder="e.g. Mary Jane Smith"
                  onChange={(e) => {
                    setName(e.target.value)
                    setError('')
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCalculate()
                  }}
                  className="bg-indigo-950/50 border-indigo-400/30 text-indigo-100 placeholder:text-indigo-300/30 focus-visible:ring-amber-300/60"
                />
              </div>
            )}
            {error && <p className="text-rose-300 text-sm text-left">{error}</p>}
            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-300 text-indigo-950 font-semibold hover:from-amber-400 hover:to-amber-200 shadow-[0_0_25px_-5px_rgba(251,191,36,0.6)]"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Reveal My Reading
            </Button>
          </CardContent>
        </Card>
      </header>

      {/* ── Results ──────────────────────────────────────── */}
      {result && (
        <main id="results" className="px-4 sm:px-6 pb-10 scroll-mt-8">
          <ResultsPanel
            date={result.date}
            name={result.name}
            birth={result.birth ?? undefined}
            lifePath={result.lifePath ?? undefined}
            workings={result.workings}
            scope={result.scope}
          />
          <div className="max-w-5xl mx-auto">
            <JourneyMeetings entries={journeyEntries} />
          </div>
        </main>
      )}

      {/* ── How it works ─────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-6">
          How the calculation works
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem
            value="tarot"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              🃏 Tarot Birth Cards
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed">
              Add every digit of your birth date together and reduce until you reach a number of{' '}
              <span className="text-amber-200">21 or less</span> — that number is a Major Arcana
              card, your <em>personality card</em>. Then add the two digits of that number
              together for your <em>soul card</em>. For example,{' '}
              <span className="font-mono text-amber-200/90">19 → The Sun</span>,{' '}
              <span className="font-mono text-amber-200/90">1 + 9 = 10 → Wheel of Fortune</span>,
              and <span className="font-mono text-amber-200/90">1 + 0 = 1 → The Magician</span>{' '}
              — a rare triple birth card.
              <span className="block mt-3 text-xs">
                Explore:{' '}
                <LibLink hash="library-arcanas">all 22 Major Arcana</LibLink>
                {' · '}
                <PairLink hash="library-pairs">what each pair means together</PairLink>
                {' · '}
                e.g.{' '}
                <LibLink hash="arcana-19">The Sun</LibLink>,{' '}
                <LibLink hash="arcana-10">Wheel of Fortune</LibLink>,{' '}
                <LibLink hash="arcana-1">The Magician</LibLink>
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="numerology"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              🔢 Life Path Number
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed">
              Numerology adds the same digits but keeps reducing to a{' '}
              <span className="text-amber-200">single digit</span> — unless it lands on a{' '}
              <span className="text-amber-200">master number</span>: 11, 22 or 33, which are kept
              whole. Your life path number describes your life’s theme and direction, and each
              number corresponds to its own Major Arcana card — the two systems share one deck.
              <span className="block mt-3 text-xs">
                Explore:{' '}
                <LibLink hash="library-numbers">every life path number in depth</LibLink>
                {' · '}
                e.g.{' '}
                <LibLink hash="number-7">the 7</LibLink>,{' '}
                <LibLink hash="arcana-7">its card, The Chariot</LibLink>,{' '}
                <LibLink hash="number-11">master number 11</LibLink>
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="name"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              🔤 Name Numerology (Pythagorean)
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed">
              Every letter maps to a number (A=1, B=2 … I=9, then the alphabet wraps so J=1).{' '}
              <span className="text-amber-200">Each name is summed and reduced by itself</span> —
              first name, middle name, last name — and only then are the results combined into
              your <em>Destiny (Expression) number</em>. The vowels alone give your{' '}
              <em>Soul Urge</em> — what your heart privately wants — and the consonants alone give
              your <em>Personality</em> — how you appear to others on first meeting.
              <span className="block mt-3 text-xs">
                Explore:{' '}
                <LibLink hash="number-3">the numbers</LibLink>
                {' · '}
                <PairLink hash="library-pairs">the pairs</PairLink>
                {' · '}
                <LibLink hash="library-arcanas">the arcanas behind them</LibLink>
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="extended"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              🌗 The Complete Chart — every other layer
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed space-y-2">
              <p>
                <span className="text-amber-200">Attitude number</span> (month + day): your
                instinctive first response, with its own card.
              </p>
              <p>
                <span className="text-amber-200">Year card</span> (month + day + current year): the
                theme of each year of your life.
              </p>
              <p>
                <span className="text-amber-200">Maturity number</span> (life path + destiny): the
                person you fully become from mid-life onward.
              </p>
              <p>
                <span className="text-amber-200">Balance number</span> (first letters of each name):
                how you restore yourself under stress.
              </p>
              <p>
                <span className="text-amber-200">Karmic debt scan</span>: checks your birth day,
                life path and name for 13/4, 14/5, 16/7 and 19/1 before they reduce — debts from
                past cycles, each with its paying card.
              </p>
              <span className="block mt-3 text-xs">
                Explore:{' '}
                <LibLink hash="library-numbers">every number, in depth</LibLink>
                {' · '}
                <LibLink hash="arcana-16">The Tower</LibLink>,{' '}
                <LibLink hash="arcana-7">The Chariot</LibLink>
                {' · '}
                <PairLink hash="pair-16-7">the 16/7 pair</PairLink>
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="masters"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              ✦ Master numbers &amp; karmic debts — why they show up
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed space-y-2">
              <p>
                <span className="text-amber-200">Master numbers</span> (11, 22, 33) appear when
                the digits of your date or name refuse to finish reducing — the arithmetic itself
                flags a higher voltage, so the number is kept whole instead of being folded into a
                single digit. Each master number is a base digit (2, 4, 6) raised to a harder
                octave: more gift, more demand.
              </p>
              <p>
                <span className="text-amber-200">Karmic debts</span> (13, 14, 16, 19) are the
                opposite signature: numbers that appear <em>mid-reduction</em> and mark lessons
                carried over from a previous cycle. They never cancel the gift — a 16/7 is still a
                7 — but the theme repeats with interest until it is lived consciously. Every debt
                names its paying card.
              </p>
              <span className="block mt-3 text-xs">
                Explore:{' '}
                <LibLink hash="number-11">11 · the Illuminator</LibLink>,{' '}
                <LibLink hash="number-22">22 · the Master Builder</LibLink>,{' '}
                <LibLink hash="number-33">33 · the Master Teacher</LibLink>
                {' · '}
                <PairLink hash="pair-16-7">16/7 · Tower into Chariot</PairLink>,{' '}
                <PairLink hash="pair-19-10">19/1 · Sun into Wheel</PairLink>
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="together"
            className="border border-indigo-400/20 rounded-2xl bg-white/[0.03] px-5"
          >
            <AccordionTrigger className="text-amber-100 hover:no-underline font-cinzel">
              ✦ Used together
            </AccordionTrigger>
            <AccordionContent className="text-indigo-200/75 leading-relaxed">
              The tarot shows <em>what energy you embody</em>; numerology shows{' '}
              <em>the road that energy travels on</em>. Your birth card is the face you wear, your
              soul card is the lesson underneath, your life path number is the journey, and your
              name adds the current you bring to it all. This site calculates every layer from one
              date and one name, then weaves them into a single reading.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
```

### `app/src/pages/LibraryPage.tsx` (1.6 KB)

```tsx
import { Badge } from '@/components/ui/badge'
import { NumbersLibrary, ArcanasLibrary, LibrarySeparator } from '@/components/LearnSection'
import { SiteNav, PairLink } from '@/components/SmartRef'
import FoolsJourney from '@/components/FoolsJourney'

/** /library — the full reference: every number, every Major Arcana */
export default function LibraryPage() {
  return (
    <div className="starfield min-h-screen relative">
      <FoolsJourney />
      <SiteNav />
      <header className="relative px-6 pt-20 pb-10 text-center max-w-4xl mx-auto">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Library
        </Badge>
        <h1 className="font-cinzel text-3xl sm:text-5xl text-amber-100 leading-tight">
          Every Number, Every Arcana
        </h1>
        <p className="mt-4 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed text-sm">
          The reference behind every reading on this site — what each number brings into any
          position of a chart, and what each of the 22 Major Arcana means, shadow included. The{' '}
          <PairLink hash="library-pairs">birth card pairs</PairLink> live on their own page.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <NumbersLibrary />
        <LibrarySeparator />
        <ArcanasLibrary />
      </main>

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
```

### `app/src/pages/PairsPage.tsx` (1.7 KB)

```tsx
import { Badge } from '@/components/ui/badge'
import { PairsLibrary } from '@/components/LearnSection'
import JusticeCuriosity from '@/components/JusticeCuriosity'
import { SiteNav, LibLink } from '@/components/SmartRef'
import FoolsJourney from '@/components/FoolsJourney'

/** /pairs — what each birth card pair means, plus the hidden Justice */
export default function PairsPage() {
  return (
    <div className="starfield min-h-screen relative">
      <FoolsJourney />
      <SiteNav />
      <header className="relative px-6 pt-20 pb-10 text-center max-w-4xl mx-auto">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Pairs
        </Badge>
        <h1 className="font-cinzel text-3xl sm:text-5xl text-amber-100 leading-tight">
          What Each Pair Means Together
        </h1>
        <p className="mt-4 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed text-sm">
          A birth card is a portrait; a pair is a path. Here is what each personality + soul card
          combination means as a combination — including the hidden third card that walks behind
          the Star &amp; Strength. The individual cards live in{' '}
          <LibLink hash="library-arcanas">the library</LibLink>.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <PairsLibrary />
        <div className="mt-10">
          <JusticeCuriosity />
        </div>
      </main>

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
```

### `app/src/components/SmartRef.tsx` (1.5 KB)

```tsx
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router'

const LINK_STYLE =
  'text-amber-300/90 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-200 hover:decoration-amber-200/70 transition-colors'

/** Link into the reference library (/library) — client-side, hash-aware */
export function LibLink({
  hash,
  children,
  className = LINK_STYLE,
}: {
  hash: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link to={`/library#${hash}`} className={className}>
      {children}
    </Link>
  )
}

/** Link into the pairs page (/pairs) — client-side, hash-aware */
export function PairLink({
  hash,
  children,
  className = LINK_STYLE,
}: {
  hash: string
  children: ReactNode
  className?: string
}) {
  return (
    <Link to={`/pairs#${hash}`} className={className}>
      {children}
    </Link>
  )
}

/** Small site navigation shown on every page */
export function SiteNav() {
  const item = 'font-cinzel text-xs tracking-[0.25em] uppercase text-indigo-300/60 hover:text-amber-200 transition-colors'
  const cls = (isActive: boolean) => item + (isActive ? ' text-amber-300/90' : '')
  return (
    <nav className="absolute top-4 right-5 z-20 flex gap-5">
      <NavLink to="/" end className={({ isActive }) => cls(isActive)}>
        ✦ Reading
      </NavLink>
      <NavLink to="/library" className={({ isActive }) => cls(isActive)}>
        The Library
      </NavLink>
      <NavLink to="/pairs" className={({ isActive }) => cls(isActive)}>
        The Pairs
      </NavLink>
    </nav>
  )
}
```

### `app/src/components/FoolsJourney.tsx` (1.9 KB)

```tsx
import { useEffect, useState } from 'react'
import { getJourneyMeeting, journeyCardAt } from '@/lib/journeyMeeting'

/**
 * The Fool's Journey as the site's living background.
 *
 * The old walking-sprite scene is gone: the background is now simply the
 * Fool meeting each of the Major Arcana, one meeting per hour of the day
 * (the Magician at 1am … Judgement at 8pm; late evening returns to the
 * open road). The current meeting's wide artwork fills the screen beneath
 * the content, veiled so the text stays readable, with the role and the
 * story of the encounter at the bottom of the viewport.
 */
export default function FoolsJourney() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(t)
  }, [])

  const hour = now.getHours()
  const minutes = now.getMinutes()
  const sceneNum = journeyCardAt(hour)
  const meeting = sceneNum ? getJourneyMeeting(sceneNum) : undefined

  const clockLabel = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

  return (
    <div className="journey-bg" aria-hidden="true">
      {meeting ? (
        <img
          key={meeting.num}
          src={meeting.image}
          alt=""
          draggable={false}
          className="journey-bg-art"
        />
      ) : (
        <div className="journey-bg-openroad" />
      )}

      <p className="journey-caption">
        <span className="journey-clock">
          ☾ {clockLabel} · {meeting ? meeting.title : 'The open road'}
          {meeting && <span className={`journey-role journey-role-${meeting.role.toLowerCase()}`}>{meeting.role}</span>}
        </span>
        {meeting
          ? meeting.text
          : 'The day is done — the Fool walks the last quiet miles under the stars, the journey complete, ready to leap again at dawn.'}
      </p>
    </div>
  )
}
```

### `app/src/components/JourneyMeetings.tsx` (3.3 KB)

```tsx
import { getJourneyMeeting, type MeetingRole } from '@/lib/journeyMeeting'

export interface JourneyEntry {
  num: number
  label: string
}

const ROLE_STYLE: Record<MeetingRole, string> = {
  Friend: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
  Guide: 'border-sky-300/50 bg-sky-400/10 text-sky-200',
  Teacher: 'border-sky-300/50 bg-sky-400/10 text-sky-200',
  Trial: 'border-amber-300/50 bg-amber-400/10 text-amber-200',
  Ordeal: 'border-amber-300/50 bg-amber-400/10 text-amber-200',
  Foe: 'border-rose-300/50 bg-rose-400/10 text-rose-200',
  Destruction: 'border-rose-300/50 bg-rose-400/10 text-rose-200',
  Rejuvenation: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
  Rebirth: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
}

/**
 * "The Fool Meets Your Cards" — for each unique card in the reading, the
 * wide journey artwork of the Fool meeting that Major Arcana, with the role
 * that being plays (friend, foe, destruction, rejuvenation…) and the full
 * story of the encounter.
 */
export default function JourneyMeetings({ entries }: { entries: JourneyEntry[] }) {
  const unique = entries.filter(
    (e, i) => entries.findIndex((x) => x.num === e.num) === i,
  )
  const meetings = unique
    .map((e) => ({ entry: e, meeting: getJourneyMeeting(e.num) }))
    .filter((x) => x.meeting)

  if (meetings.length === 0) return null

  return (
    <section className="mt-14">
      <h3 className="font-cinzel text-2xl text-amber-100 text-center mb-2">
        The Fool Meets Your Cards
      </h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
        Every card in your reading is a being the Fool met on his journey — some greeted him as
        friends, some taught him, some tore him down so he could be rebuilt. Here is what happened
        at each of your meetings.
      </p>
      <div className="space-y-10">
        {meetings.map(({ entry, meeting }) => (
          <article
            key={entry.num}
            className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={meeting!.image}
                alt={meeting!.title}
                className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 rounded-full bg-indigo-950/80 border border-indigo-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                {entry.label}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h4 className="font-cinzel text-xl text-amber-100">{meeting!.title}</h4>
                <span
                  className={`rounded-full border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] ${ROLE_STYLE[meeting!.role]}`}
                >
                  {meeting!.role}
                </span>
              </div>
              <p className="text-indigo-300/60 text-xs italic mb-3">{meeting!.place}</p>
              <p className="text-indigo-100/85 text-sm leading-relaxed">{meeting!.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
```

### `app/src/components/ResultsPanel.tsx` (22.4 KB)

```tsx
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import TarotCardFace from '@/components/TarotCardFace'
import { getCard, type BirthCards, type MajorArcana } from '@/lib/tarot'
import {
  getNumberProfile,
  lifePathWorkings,
  type LifePathResult,
} from '@/lib/numerology'
import { computeNameNumbers } from '@/lib/nameNumerology'
import { pairPath, PAIR_DETAILS } from '@/lib/extendedNumerology'
import NameNumerologyPanel from './NameNumerologyPanel'
import ExtendedChartPanel from './ExtendedChartPanel'
import NameExtrasPanel from './NameExtrasPanel'

export type ReadingScope = 'date' | 'name' | 'all'

interface Props {
  date?: string // YYYY-MM-DD
  birth?: BirthCards
  lifePath?: LifePathResult
  workings?: string // e.g. "0+3+1+9+9+5 = 27 → 9"
  name?: string
  scope: ReadingScope
}

function formatDate(date: string): string {
  return new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Full, readable deep-dive block for one Major Arcana card */
function CardDeepDive({ card }: { card: MajorArcana }) {
  return (
    <div className="space-y-4 text-left w-full">
      <p className="text-indigo-100/90 text-base leading-relaxed">{card.meaning}</p>
      <p className="text-indigo-200/70 text-sm leading-relaxed">{card.detail}</p>
      <div className="rounded-2xl border border-rose-300/25 bg-rose-400/[0.07] p-4">
        <h5 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
          ☾ Shadow side
        </h5>
        <p className="text-rose-100/90 text-sm leading-relaxed">{card.shadowDetail}</p>
      </div>
      <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4">
        <h5 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
          ✦ Working with this card
        </h5>
        <p className="text-emerald-50/85 text-sm leading-relaxed">{card.guidance}</p>
      </div>
    </div>
  )
}

/** Inline link into the reference pages (/library or /pairs) */
function RefLink({
  hash,
  to = '/library',
  children,
}: {
  hash: string
  to?: '/library' | '/pairs'
  children: ReactNode
}) {
  return (
    <Link
      to={`${to}#${hash}`}
      className="text-amber-300/90 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-200 hover:decoration-amber-200/70 transition-colors"
    >
      {children}
    </Link>
  )
}

/** The reading's table of contents — every layer in order of importance */
function ChartIndex({ scope, hasName }: { scope: ReadingScope; hasName: boolean }) {
  const dateScope = scope === 'date' || scope === 'all'
  const nameScope = scope === 'name' || scope === 'all'
  const layers: { n: number; label: string; href: string }[] = []
  let n = 0
  if (dateScope) {
    layers.push({ n: ++n, label: 'Life Path — the spine of the whole chart', href: '#layer-life-path' })
    layers.push({ n: ++n, label: 'Tarot Birth Cards — your archetype pair', href: '#layer-birth-cards' })
  }
  if (nameScope) {
    layers.push({ n: ++n, label: 'Destiny — what your name makes of you', href: '#layer-destiny' })
    layers.push({ n: ++n, label: 'Soul Urge — what your heart privately wants', href: '#layer-soul-urge' })
    layers.push({ n: ++n, label: 'Personality — how you appear at first meeting', href: '#layer-personality' })
  }
  if (dateScope) {
    layers.push({ n: ++n, label: 'Birthday Number — the sub-influence of your day', href: '#layer-birthday' })
    layers.push({ n: ++n, label: 'Karmic Debt — lessons carried from before', href: '#layer-karmic' })
    layers.push({ n: ++n, label: 'Attitude Number — your instinctive first response', href: '#layer-attitude' })
    if (nameScope) {
      layers.push({ n: ++n, label: 'Maturity Number — who you fully grow into', href: '#layer-maturity' })
      layers.push({ n: ++n, label: 'Balance Number — how you restore yourself', href: '#layer-balance' })
    }
    layers.push({ n: ++n, label: 'Year Cards — the theme of this year and next', href: '#layer-year-cards' })
  } else if (hasName) {
    layers.push({ n: ++n, label: 'Balance Number — how you restore yourself', href: '#layer-balance' })
    layers.push({ n: ++n, label: 'Karmic Debt — lessons carried in your name', href: '#layer-karmic' })
  }

  return (
    <nav className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8">
      <h3 className="font-cinzel text-xl text-amber-100 text-center mb-1">
        Your Chart, Layer by Layer
      </h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-5 max-w-xl mx-auto">
        In order of weight — the top layers describe the core of who you are; the lower layers add
        nuance, timing, and the lessons you carried in.
      </p>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl mx-auto">
        {layers.map((l) => (
          <li key={`${l.n}-${l.href}`} className="flex items-baseline gap-3 text-sm">
            <span className="font-cinzel text-amber-300/80 text-xs w-6 shrink-0">
              {String(l.n).padStart(2, '0')}
            </span>
            <a
              href={l.href}
              className="text-indigo-200/80 hover:text-amber-200 underline decoration-indigo-400/20 underline-offset-4 hover:decoration-amber-300/50 transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ol>
      <p className="text-center text-indigo-300/50 text-xs mt-5">
        Browse the full reference:{' '}
        <Link to="/library#library-numbers" className="text-amber-300/80 hover:text-amber-200">all numbers</Link>
        {' · '}
        <Link to="/library#library-arcanas" className="text-amber-300/80 hover:text-amber-200">all 22 Major Arcana</Link>
        {' · '}
        <Link to="/pairs#library-pairs" className="text-amber-300/80 hover:text-amber-200">all birth card pairs</Link>
      </p>
    </nav>
  )
}

export default function ResultsPanel({ date, birth, lifePath, workings, name, scope }: Props) {
  const showDate = scope === 'date' || scope === 'all'
  const showName = scope === 'name' || scope === 'all'

  // birth / lifePath are guaranteed present whenever showDate is true;
  // safe dummies keep name-only scope from crashing (their sections don't render)
  const b: BirthCards = birth ?? { primary: 0, secondary: 0, tertiary: null, chain: [] }
  const lp: LifePathResult = lifePath ?? {
    number: 1,
    isMaster: false,
    birthdayNumber: 1,
    birthdayIsMaster: false,
  }

  const primary = getCard(b.primary)
  const secondary = getCard(b.secondary)
  const tertiary = b.tertiary !== null ? getCard(b.tertiary) : null

  // Dedupe: if primary and secondary are the same card (e.g. 9 → 9), show it once
  const pairCards =
    b.primary === b.secondary ? [primary] : [primary, secondary]

  const lpProfile = getNumberProfile(lp.number)
  const bdProfile = getNumberProfile(lp.birthdayNumber)
  const chainLabel = b.chain.join(' → ')
  const nameNumbers = name ? computeNameNumbers(name) : null
  const nameProfile = nameNumbers ? getNumberProfile(nameNumbers.expression) : null
  const pathName = pairPath(b.primary, b.secondary)
  const pairDetail = PAIR_DETAILS[`${b.primary}-${b.secondary}`] ?? null

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 animate-fade-in">
      {/* Summary header */}
      <div className="text-center space-y-3">
        <p className="text-indigo-300/80 text-sm tracking-[0.25em] uppercase">
          {showDate ? (
            <>Reading for {formatDate(date!)}</>
          ) : (
            <>Name reading</>
          )}
          {showName && name && nameNumbers && (
            <span className="block mt-1 normal-case tracking-normal font-serif">
              ✦ {nameNumbers.cleanedName} — Destiny {nameNumbers.expression}
              {nameNumbers.expressionIsMaster && ' ✦'}
            </span>
          )}
        </p>
        <h2 className="font-cinzel text-3xl sm:text-4xl text-amber-100">
          {showDate ? `${primary.name} · Life Path ${lp.number}` : `${nameNumbers?.cleanedName} · Destiny ${nameNumbers?.expression}`}
        </h2>
        {showDate && (
          <p className="text-indigo-200/70 text-sm font-mono">
            {workings} → {chainLabel}
          </p>
        )}
      </div>

      {/* ── Chart index: layers in order of importance ────── */}
      <ChartIndex scope={scope} hasName={!!name} />

      {/* ── Layer 1: Life Path (date scope / everything) ───── */}
      {showDate && (
      <section id="layer-life-path" className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10 scroll-mt-24">
        <div className="text-center mb-8">
          <Badge
            variant="outline"
            className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
          >
            Layer 1 · The Spine of Your Chart
          </Badge>
          <h3 className="font-cinzel text-2xl text-amber-100">
            Life Path {lp.number}
            {lp.isMaster && (
              <span className="ml-2 text-amber-300/90 text-base align-middle">✦ Master Number</span>
            )}
          </h3>
          <p className="text-indigo-200/70 text-sm mt-1 italic">{lpProfile.title}</p>
          <p className="text-indigo-300/60 text-xs mt-3 font-mono">
            {lifePathWorkings(date!)}
          </p>
          <p className="text-indigo-300/60 text-xs mt-2">
            Dive deeper: <RefLink hash={`number-${lp.number}`}>the number {lp.number}</RefLink>
            {lpProfile.card && (
              <>
                {' · '}
                <RefLink hash={`arcana-${lpProfile.card.num}`}>{lpProfile.card.name}</RefLink>
              </>
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          {/* Life path medallion + corresponding tarot card */}
          <div className="flex flex-col items-center gap-5 mx-auto">
            <div className="relative w-36 h-36 rounded-full border-2 border-amber-200/50 bg-amber-200/5 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(251,191,36,0.35)]">
              <div className="absolute inset-2 rounded-full border border-amber-200/20" />
              <span className="font-cinzel text-6xl text-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                {lp.number}
              </span>
            </div>
            {lpProfile.card && (
              <div className="flex flex-col items-center gap-2">
                <TarotCardFace card={lpProfile.card} size="sm" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
                  Your Life Path Card
                </span>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <p className="text-indigo-100/90 text-base leading-relaxed">{lpProfile.meaning}</p>
            <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4">
              <h4 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
                ⚡ The energy of {lp.number}
              </h4>
              <p className="text-indigo-200/75 text-sm leading-relaxed">{lpProfile.energy}</p>
            </div>
            <p className="text-indigo-200/70 text-sm leading-relaxed">{lpProfile.detail}</p>
            {lp.isMaster && lpProfile.masterNote && (
              <div className="rounded-2xl border border-amber-200/30 bg-amber-200/[0.06] p-4">
                <h4 className="font-cinzel text-amber-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ✦ Why a master number shows up here
                </h4>
                <p className="text-amber-50/85 text-sm leading-relaxed">{lpProfile.masterNote}</p>
                <p className="text-amber-200/70 text-xs mt-2">
                  <RefLink hash={`number-${lp.number}`}>
                    Read the full entry on {lp.number} in the library ↓
                  </RefLink>
                </p>
              </div>
            )}
            <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4">
              <h4 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
                ✦ Walking this path
              </h4>
              <p className="text-emerald-50/85 text-sm leading-relaxed">{lpProfile.advice}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-4">
                <h4 className="text-emerald-200 font-cinzel text-sm tracking-widest uppercase mb-2">
                  Strengths
                </h4>
                <ul className="text-indigo-100/80 text-sm space-y-1">
                  {lpProfile.strengths.map((s) => (
                    <li key={s}>✦ {s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-300/20 bg-rose-400/5 p-4">
                <h4 className="text-rose-200 font-cinzel text-sm tracking-widest uppercase mb-2">
                  Challenges
                </h4>
                <ul className="text-indigo-100/80 text-sm space-y-1">
                  {lpProfile.challenges.map((c) => (
                    <li key={c}>☾ {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-indigo-400/10" />

        {/* Birthday number */}
        <div id="layer-birthday" className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center sm:text-left scroll-mt-24">
          <div className="w-16 h-16 shrink-0 rounded-full border border-indigo-300/40 bg-indigo-500/10 flex items-center justify-center">
            <span className="font-cinzel text-2xl text-indigo-100">{lp.birthdayNumber}</span>
          </div>
          <div>
            <h4 className="font-cinzel text-amber-100">
              Birthday Number {lp.birthdayNumber}
              {lp.birthdayIsMaster && (
                <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
              )}
            </h4>
            <p className="text-indigo-200/70 text-sm max-w-2xl">
              The day you were born adds a sub-influence of “{bdProfile.title}” —{' '}
              {bdProfile.strengths.slice(0, 3).join(', ').toLowerCase()} colour your natural
              temperament.
            </p>
            <p className="text-indigo-300/60 text-sm max-w-2xl mt-1">{bdProfile.detail}</p>
            <p className="text-indigo-300/60 text-xs max-w-2xl mt-1">
              <RefLink hash={`number-${lp.birthdayNumber}`}>
                the number {lp.birthdayNumber} ↓
              </RefLink>
            </p>
          </div>
        </div>
      </section>
      )}

      {/* ── Layer 2: Tarot Birth Cards (date scope / everything) ── */}
      {showDate && (
      <section id="layer-birth-cards" className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10 scroll-mt-24">
        <div className="text-center mb-8">
          <Badge
            variant="outline"
            className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
          >
            Layer 2 · Tarot Birth Cards
          </Badge>
          <h3 className="font-cinzel text-2xl text-amber-100">
            {pairCards.length === 1 ? 'Your Birth Card' : 'Your Birth Card Pair'}
          </h3>
          {pathName && (
            <p className="font-cinzel text-amber-300/90 tracking-[0.2em] uppercase text-sm mt-1">
              ✦ {pathName} ✦
            </p>
          )}
          <p className="text-indigo-200/70 text-sm mt-2 max-w-2xl mx-auto">
            The date digits reduce through the Major Arcana chain{' '}
            <span className="text-amber-200/90 font-mono">{chainLabel}</span>. The first card is
            your outer personality — how you meet the world. The second is your soul card, the
            hidden lesson beneath.
          </p>
          {pairDetail && (
            <p className="text-indigo-100/80 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
              {pairDetail.together}{' '}
              <RefLink hash={`pair-${b.primary}-${b.secondary}`} to="/pairs">Full pair entry ↓</RefLink>
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {pairCards.map((card, i) => (
            <div key={card.num} className="flex flex-col items-center gap-4 w-full max-w-md">
              <TarotCardFace card={card} size="lg" />
              <Badge
                variant="secondary"
                className="bg-indigo-500/15 text-indigo-200 border-indigo-300/20"
              >
                {i === 0 ? 'Personality Card' : pairCards.length === 3 ? 'Middle Card' : 'Soul Card'}
              </Badge>
              <CardDeepDive card={card} />
              <RefLink hash={`arcana-${card.num}`}>Full library entry for {card.name} ↓</RefLink>
            </div>
          ))}
        </div>

        {/* Hidden Justice card — now a compact note; full story lives on /pairs */}
        {b.primary === 17 && (
          <div className="mt-10 pt-8 border-t border-indigo-400/10">
            <p className="text-center text-indigo-200/75 text-sm max-w-2xl mx-auto leading-relaxed">
              A hidden third card walks behind this pair: in the oldest decks{' '}
              <span className="text-amber-200">VIII is Justice</span> and XI is Strength — and
              strength without justice does not exist.{' '}
              <RefLink hash="justice-curiosity" to="/pairs">
                Read the full story, with Justice added to this pair ↓
              </RefLink>
            </p>
          </div>
        )}

        {tertiary && b.tertiary !== null && b.secondary !== b.tertiary && (
          <div className="mt-10 pt-8 border-t border-indigo-400/10">
            <div className="text-center mb-6">
              <Badge
                variant="outline"
                className="border-amber-200/40 text-amber-200 mb-2 tracking-[0.2em] uppercase"
              >
                Triple Birth Cards · Rare
              </Badge>
              <p className="text-indigo-200/70 text-sm max-w-xl mx-auto">
                Your chain keeps reducing to a third card — a life of layered lessons and rare
                depth.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <TarotCardFace card={tertiary} size="md" />
                <CardDeepDive card={tertiary} />
              </div>
            </div>
          </div>
        )}
      </section>
      )}

      {/* ── Layers 3–5: Name numerology (name scope / everything) ── */}
      {showName && name && <NameNumerologyPanel name={name} />}
      {scope === 'name' && name && <NameExtrasPanel name={name} />}

      {/* ── Extended chart (date scope / everything) ──────── */}
      {showDate && (
        <ExtendedChartPanel
          date={date!}
          name={showName ? name : undefined}
          lifePathNumber={lp.number}
          expressionNumber={nameNumbers?.expression}
        />
      )}

      {/* ── Combined Reading ──────────────────────────────── */}
      <section className="rounded-3xl border border-amber-200/30 bg-gradient-to-b from-amber-200/[0.06] to-transparent p-6 sm:p-10 text-center">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-4 tracking-[0.2em] uppercase"
        >
          The Complete Picture
        </Badge>
        {scope === 'name' ? (
          <p className="text-indigo-100/85 leading-relaxed max-w-3xl mx-auto">
            Your name — <span className="text-amber-200">{nameNumbers?.cleanedName}</span> —
            carries the destiny number {nameNumbers?.expression}
            {nameNumbers?.expressionIsMaster && ' ✦'} ({nameProfile?.title.toLowerCase()}): the
            current you add to everything you touch. The vowels whisper what your heart wants (
            {nameNumbers && <span>soul urge {nameNumbers.soulUrge}</span>}); the consonants shape
            the first impression you leave ({nameNumbers && <span>personality {nameNumbers.personality}</span>}).
            A name reading shows the instrument; the birth date shows the road — run both together
            for the full chart.
          </p>
        ) : (
          <p className="text-indigo-100/85 leading-relaxed max-w-3xl mx-auto">
            Born under <span className="text-amber-200">{primary.name}</span>, you carry its
            signature — {primary.keywords.slice(0, 2).join(' and ').toLowerCase()} — into every
            room you enter.
            {pairCards.length > 1 && (
              <>
                {' '}
                Beneath the surface, <span className="text-amber-200">{secondary.name}</span> works
                as your soul lesson, quietly pulling you toward {secondary.keywords[0].toLowerCase()}.
              </>
            )}{' '}
            Your Life Path {lp.number} ({lpProfile.title.toLowerCase()}) describes the road
            itself: {lpProfile.strengths[0].toLowerCase()} is the gift,{' '}
            {lpProfile.challenges[0].toLowerCase()} is the test.
            {nameNumbers && nameProfile && (
              <>
                {' '}
                And your name — <span className="text-amber-200">{nameNumbers.cleanedName}</span> —
                carries the destiny number {nameNumbers.expression}
                {nameNumbers.expressionIsMaster && ' ✦'} ({nameProfile.title.toLowerCase()}), the
                current you add to everything you touch. When birth card, life path and destiny
                number point the same way, the whole chart lights up at once.
              </>
            )}
            {!nameNumbers && (
              <>
                {' '}
                When the outer card and the inner number agree — when you live your{' '}
                {primary.keywords[0].toLowerCase()} in the service of your path — the whole chart
                lights up at once.
              </>
            )}
          </p>
        )}
      </section>
    </div>
  )
}
```

### `app/src/components/NameNumerologyPanel.tsx` (16.0 KB)

```tsx
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import TarotCardFace from '@/components/TarotCardFace'
import { getNumberProfile } from '@/lib/numerology'
import {
  PYTHAGOREAN_ROWS,
  computeNameNumbers,
  expressionWorkings,
  formatPartWorking,
  SOUL_URGE_DETAILS,
  PERSONALITY_DETAILS,
  DESTINY_DETAILS,
} from '@/lib/nameNumerology'

/** Destiny-number meanings (name-based, complements the life-path profiles) */
const DESTINY_MEANINGS: Record<number, string> = {
  1: 'Your name carries the signature of a natural initiator. You are remembered as someone who starts things — projects, ideas, movements — and who would rather lead than follow.',
  2: 'Your name carries the signature of a peacemaker. People experience you as gentle, intuitive and connecting — the one who smooths friction and makes collaborations actually work.',
  3: 'Your name carries the signature of a communicator. You are perceived as expressive, charming and creative — someone whose words and presence lift the mood of any room.',
  4: 'Your name carries the signature of a builder. Others see you as dependable, organised and solid — the person whose promises hold weight and whose work stands the test of time.',
  5: 'Your name carries the signature of a free spirit. People experience you as adaptable, magnetic and alive — change does not frighten you, it feeds you.',
  6: 'Your name carries the signature of a caretaker. You are seen as warm, responsible and beauty-appreciating — the one people trust with what matters most to them.',
  7: 'Your name carries the signature of a seeker. Others sense depth behind your reserve — you come across as thoughtful, perceptive and quietly wise beyond your years.',
  8: 'Your name carries the signature of a powerhouse. People read you as capable, ambitious and authoritative — someone built to handle big responsibility and bigger visions.',
  9: 'Your name carries the signature of a humanitarian. You are perceived as compassionate, artistic and worldly — the old soul others turn to when they need perspective.',
  11: 'Your name carries the rare signature of an illuminator. You come across as inspiring, intuitive and almost electrically perceptive — a natural guide for others.',
  22: 'Your name carries the rarest signature of all: the master builder. People sense you can turn grand visions into real, lasting structures — if you dare to believe in your own scale.',
  33: 'Your name carries the signature of a master teacher. You are felt as pure devotion in human form — someone whose compassion heals simply by being near.',
}

/** One-liners for Soul Urge (vowels) — what your heart privately wants */
const SOUL_URGE_LINES: Record<number, string> = {
  1: 'to lead, to pioneer, to be first',
  2: 'to love, to belong, to harmonise',
  3: 'to express, to create, to delight',
  4: 'to build, to stabilise, to be trusted',
  5: 'to roam, to experience, to be free',
  6: 'to care, to nurture, to be needed',
  7: 'to understand, to reflect, to be left in peace',
  8: 'to achieve, to command, to be respected',
  9: 'to give, to forgive, to serve something greater',
}

/** One-liners for Personality (consonants) — how you first appear to others */
const PERSONALITY_LINES: Record<number, string> = {
  1: 'comes across as confident, direct and self-assured',
  2: 'comes across as warm, gentle and easy to be around',
  3: 'comes across as fun, witty and socially bright',
  4: 'comes across as serious, capable and trustworthy',
  5: 'comes across as lively, restless and adventurous',
  6: 'comes across as kind, responsible and reassuring',
  7: 'comes across as reserved, thoughtful and a little mysterious',
  8: 'comes across as strong, polished and in control',
  9: 'comes across as open, wise and quietly charismatic',
}

function baseOf(n: number): number {
  // for master numbers, fall back to base digit for the one-liners
  return n > 9 ? Number(String(n).split('').reduce((a, d) => a + Number(d), 0)) || n : n
}

function RefLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      to={`/library${href}`}
      className="text-amber-300/90 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-200 hover:decoration-amber-200/70 transition-colors"
    >
      {children}
    </Link>
  )
}

interface Props {
  name: string
}

export default function NameNumerologyPanel({ name }: Props) {
  const numbers = computeNameNumbers(name)
  if (!numbers) return null

  const profile = getNumberProfile(numbers.expression)
  const destinyMeaning =
    DESTINY_MEANINGS[numbers.expression] ?? DESTINY_MEANINGS[baseOf(numbers.expression)]
  const soulProfile = getNumberProfile(baseOf(numbers.soulUrge))
  const persProfile = getNumberProfile(baseOf(numbers.personality))

  return (
    <section className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
      <div className="text-center mb-8">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          Numerology · Your Name
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">
          “{numbers.cleanedName}” adds up to {numbers.expression}
          {numbers.expressionIsMaster && (
            <span className="ml-2 text-amber-300/90 text-base align-middle">✦ Master Number</span>
          )}
        </h3>
        <p className="text-indigo-200/70 text-sm mt-1 italic">{profile.title} — by name</p>
      </div>

      {/* Workings: each name summed by itself */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 space-y-2">
          {numbers.parts.map((p) => (
            <p key={p.name} className="font-mono text-sm text-indigo-200/80">
              {formatPartWorking(p)}
            </p>
          ))}
          <Separator className="bg-indigo-400/15" />
          <p className="font-mono text-sm text-amber-200/90">
            {expressionWorkings(numbers.parts)} → {numbers.expression}
          </p>
        </div>
        <p className="text-indigo-300/50 text-xs text-center mt-3 italic">
          Each name is reduced on its own, then the results are combined — the classic
          Pythagorean method.
        </p>
      </div>

      {/* ── Layer 3: Destiny / Expression ───────────────────── */}
      <div id="layer-destiny" className="grid md:grid-cols-[auto_1fr] gap-8 items-start scroll-mt-24">
        <div className="flex flex-col items-center gap-5 mx-auto">
          <div className="relative w-36 h-36 rounded-full border-2 border-amber-200/50 bg-amber-200/5 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(251,191,36,0.35)]">
            <div className="absolute inset-2 rounded-full border border-amber-200/20" />
            <span className="font-cinzel text-6xl text-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              {numbers.expression}
            </span>
          </div>
          {profile.card && (
            <div className="flex flex-col items-center gap-2">
              <TarotCardFace card={profile.card} size="sm" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
                Your Destiny Card
              </span>
            </div>
          )}
        </div>

        <div className="space-y-5">
          <p className="text-indigo-100/90 text-base leading-relaxed">{destinyMeaning}</p>
          <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4">
            <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
              ⚡ The energy of {numbers.expression}
            </h5>
            <p className="text-indigo-200/75 text-sm leading-relaxed">{profile.energy}</p>
          </div>
          <p className="text-indigo-200/70 text-sm leading-relaxed">
            {DESTINY_DETAILS[numbers.expression] ?? DESTINY_DETAILS[baseOf(numbers.expression)]}
          </p>
          {numbers.expressionIsMaster && profile.masterNote && (
            <div className="rounded-2xl border border-amber-200/30 bg-amber-200/[0.06] p-4">
              <h5 className="font-cinzel text-amber-200 text-xs tracking-[0.25em] uppercase mb-2">
                ✦ Why a master number shows up here
              </h5>
              <p className="text-amber-50/85 text-sm leading-relaxed">{profile.masterNote}</p>
            </div>
          )}
          <p className="text-indigo-300/60 text-xs">
            Dive deeper:{' '}
            <RefLink href={`#number-${numbers.expression}`}>
              the number {numbers.expression}
            </RefLink>
            {profile.card && (
              <>
                {' · '}
                <RefLink href={`#arcana-${profile.card.num}`}>{profile.card.name}</RefLink>
              </>
            )}
          </p>
        </div>
      </div>

      <Separator className="my-8 bg-indigo-400/10" />

      {/* ── Layer 4: Soul Urge ──────────────────────────────── */}
      <div id="layer-soul-urge" className="scroll-mt-24">
        <div className="rounded-2xl border border-amber-200/25 bg-amber-200/[0.05] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex flex-col items-center gap-2 shrink-0 mx-auto sm:mx-0">
              <div className="w-16 h-16 rounded-full border border-amber-300/50 bg-amber-200/10 flex items-center justify-center">
                <span className="font-cinzel text-3xl text-amber-100">{numbers.soulUrge}</span>
              </div>
              {soulProfile.card && (
                <>
                  <TarotCardFace card={soulProfile.card} size="sm" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
                    Soul Urge Card
                  </span>
                </>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-cinzel text-amber-100">
                ♥ Soul Urge {numbers.soulUrge}
                {numbers.soulUrgeIsMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="text-indigo-300/60 text-xs mt-1 italic">
                From the vowels of your name — what your heart privately wants, before any strategy
                or appearance. This is the engine of the chart: every other number works to feed
                this hunger.
              </p>
              <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">
                Your heart privately wants {SOUL_URGE_LINES[baseOf(numbers.soulUrge)]}.
              </p>
              <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4 mt-3">
                <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ⚡ The energy it asks for
                </h5>
                <p className="text-indigo-200/75 text-sm leading-relaxed">{soulProfile.energy}</p>
              </div>
              <p className="text-indigo-200/70 text-sm leading-relaxed mt-3">
                {SOUL_URGE_DETAILS[baseOf(numbers.soulUrge)]}
              </p>
              <p className="text-indigo-300/60 text-xs mt-3">
                Dive deeper:{' '}
                <RefLink href={`#number-${baseOf(numbers.soulUrge)}`}>
                  the number {baseOf(numbers.soulUrge)}
                </RefLink>
                {soulProfile.card && (
                  <>
                    {' · '}
                    <RefLink href={`#arcana-${soulProfile.card.num}`}>
                      {soulProfile.card.name}
                    </RefLink>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Layer 5: Personality ────────────────────────────── */}
      <div id="layer-personality" className="mt-6 scroll-mt-24">
        <div className="rounded-2xl border border-indigo-300/25 bg-indigo-400/[0.05] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex flex-col items-center gap-2 shrink-0 mx-auto sm:mx-0">
              <div className="w-16 h-16 rounded-full border border-indigo-300/50 bg-indigo-400/10 flex items-center justify-center">
                <span className="font-cinzel text-3xl text-indigo-100">{numbers.personality}</span>
              </div>
              {persProfile.card && (
                <>
                  <TarotCardFace card={persProfile.card} size="sm" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
                    Personality Card
                  </span>
                </>
              )}
            </div>
            <div className="flex-1">
              <h4 className="font-cinzel text-indigo-100">
                ◈ Personality {numbers.personality}
                {numbers.personalityIsMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="text-indigo-300/60 text-xs mt-1 italic">
                From the consonants of your name — the wrapper the world meets first. It filters
                how your Soul Urge and Destiny actually land on people before they know you.
              </p>
              <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">
                You {PERSONALITY_LINES[baseOf(numbers.personality)]} on first meeting.
              </p>
              <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4 mt-3">
                <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ⚡ The energy it projects
                </h5>
                <p className="text-indigo-200/75 text-sm leading-relaxed">{persProfile.energy}</p>
              </div>
              <p className="text-indigo-200/70 text-sm leading-relaxed mt-3">
                {PERSONALITY_DETAILS[baseOf(numbers.personality)]}
              </p>
              <p className="text-indigo-300/60 text-xs mt-3">
                Dive deeper:{' '}
                <RefLink href={`#number-${baseOf(numbers.personality)}`}>
                  the number {baseOf(numbers.personality)}
                </RefLink>
                {persProfile.card && (
                  <>
                    {' · '}
                    <RefLink href={`#arcana-${persProfile.card.num}`}>
                      {persProfile.card.name}
                    </RefLink>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-indigo-400/10" />

      {/* Pythagorean chart reference */}
      <div>
        <h4 className="font-cinzel text-amber-100 text-center text-sm tracking-[0.2em] uppercase mb-4">
          The Pythagorean Letter Chart
        </h4>
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 max-w-3xl mx-auto">
          {PYTHAGOREAN_ROWS.map((row) => (
            <div
              key={row.number}
              className="rounded-xl border border-indigo-400/20 bg-indigo-950/40 px-2 py-3 text-center"
            >
              <div className="font-cinzel text-amber-200 text-lg">{row.number}</div>
              <div className="text-indigo-200/70 text-xs tracking-widest mt-1">{row.letters}</div>
            </div>
          ))}
        </div>
        <p className="text-indigo-300/50 text-xs text-center mt-4 italic">
          The alphabet repeats through 1–9: A=1, B=2 … I=9, then J=1 again. Vowels reveal the
          Soul Urge; consonants reveal the outer Personality.
        </p>
      </div>
    </section>
  )
}
```

### `app/src/components/NameExtrasPanel.tsx` (5.9 KB)

```tsx
import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { computeBalance, scanKarmicDebts, KARMIC_DEBTS } from '@/lib/extendedNumerology'
import { getNumberProfile } from '@/lib/numerology'
import TarotCardFace from './TarotCardFace'
import { getCard } from '@/lib/tarot'

interface Props {
  name: string
}

/** Name-only extras: Balance number + karmic debts hidden in the name */
export default function NameExtrasPanel({ name }: Props) {
  const balance = computeBalance(name)
  const karmic = scanKarmicDebts('', name)

  if (!balance && (!karmic || karmic.instances.length === 0)) return null

  return (
    <section className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
      <div className="text-center mb-8">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          Name · Hidden Layers
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">What Your Name Keeps Quiet</h3>
        <p className="text-indigo-200/70 text-sm mt-2 max-w-2xl mx-auto">
          Two more readings hide inside your name: the Balance number — how you recover when life
          knocks you off centre — and any karmic debt numbers carried in the letters themselves.
        </p>
      </div>

      {balance && (
        <div
          id="layer-balance"
          className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 mb-6 scroll-mt-24"
        >
          <h4 className="font-cinzel text-amber-100">
            Balance Number {balance.number}
            {balance.isMaster && <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>}
          </h4>
          <p className="font-mono text-xs text-indigo-300/60 mt-1">
            First letters of “{balance.letters.join(' · ')}” · {balance.workings}
          </p>
          <p className="text-indigo-100/85 text-sm mt-3 leading-relaxed">{balance.line}</p>
          <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/60 p-4 mt-3">
            <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
              ⚡ The energy it restores
            </h5>
            <p className="text-indigo-200/75 text-sm leading-relaxed">
              {getNumberProfile(
                balance.number > 9
                  ? Number(String(balance.number).split('').reduce((a, d) => a + Number(d), 0))
                  : balance.number,
              ).energy}
            </p>
          </div>
          <p className="text-indigo-300/50 text-xs mt-2 italic">
            Calculated from the first letter of each name — it reveals your instinctive path back
            to equilibrium under stress, the remedy you reach for before you have decided
            anything.{' '}
            <Link
              to={`/library#number-${balance.number}`}
              className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
            >
              the number {balance.number} ↓
            </Link>
          </p>
        </div>
      )}

      {karmic && karmic.instances.length > 0 && (
        <>
          <Separator className="mb-6 bg-indigo-400/10" />
          <h4 id="layer-karmic" className="font-cinzel text-amber-100 text-lg mb-1 scroll-mt-24">
            Karmic Debts in Your Name
          </h4>
          <p className="text-indigo-300/60 text-xs mb-5">
            The letters of “{name.trim()}” reduce through the karmic numbers 13, 14, 16 or 19 —
            debts carried in the name itself, independent of the birth date.
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            {karmic.instances.map((inst) => {
              const debt = KARMIC_DEBTS[inst.number]
              const high = getCard(inst.number)
              const low = getCard(
                Number(String(inst.number).split('').reduce((a, d) => a + Number(d), 0)),
              )
              return (
                <div
                  key={`${inst.source}-${inst.number}`}
                  className="rounded-2xl border border-rose-300/25 bg-rose-400/[0.04] p-5"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-cinzel text-3xl text-rose-200">{debt.pair}</span>
                    <Badge variant="outline" className="border-rose-300/40 text-rose-200">
                      {inst.source}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <TarotCardFace card={high} size="sm" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-rose-200/70">
                        The Debt
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <TarotCardFace card={low} size="sm" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-200/70">
                        The Resolution
                      </span>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-indigo-300/60 mb-2">{inst.workings}</p>
                  <h5 className="font-cinzel text-rose-100 mb-1">{debt.debtTitle}</h5>
                  <p className="text-indigo-100/80 text-sm leading-relaxed mb-2">{debt.debt}</p>
                  <p className="text-rose-100/80 text-sm leading-relaxed mb-2">{debt.energy}</p>
                  <p className="text-indigo-200/70 text-sm leading-relaxed border-l-2 border-emerald-300/40 pl-3">
                    {debt.resolution}
                  </p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}
```

### `app/src/components/ExtendedChartPanel.tsx` (12.5 KB)

```tsx
import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import TarotCardFace from '@/components/TarotCardFace'
import { getCard } from '@/lib/tarot'
import { getNumberProfile } from '@/lib/numerology'
import {
  computeAttitude,
  computeBalance,
  computeMaturity,
  computeYearCard,
  scanKarmicDebts,
  KARMIC_DEBTS,
  type KarmicInstance,
} from '@/lib/extendedNumerology'

interface Props {
  date: string
  name?: string
  lifePathNumber: number
  expressionNumber?: number
}

function KarmicCard({ inst }: { inst: KarmicInstance }) {
  const debt = KARMIC_DEBTS[inst.number]
  const lowCard = Number(
    String(inst.number)
      .split('')
      .reduce((a, d) => a + Number(d), 0),
  )
  const High = getCard(inst.number)
  const Low = getCard(lowCard)
  return (
    <div
      id={`karmic-${inst.number}`}
      className="rounded-2xl border-2 border-rose-300/30 bg-rose-400/[0.05] p-5 sm:p-7 scroll-mt-24 shadow-[0_0_40px_-12px_rgba(244,63,94,0.3)]"
    >
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <span className="font-cinzel text-3xl text-rose-200">{debt.pair}</span>
        <Badge variant="outline" className="border-rose-300/40 text-rose-200">
          {inst.source}
        </Badge>
      </div>
      <h5 className="font-cinzel text-amber-100 mb-4">{debt.debtTitle}</h5>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-5">
        <Link to={`/library#arcana-${High.num}`} className="flex flex-col items-center gap-2 group">
          <TarotCardFace card={High} size="sm" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-rose-200/70 group-hover:text-amber-300/80 transition-colors">
            The Debt · {High.name} ↓
          </span>
        </Link>
        <Link to={`/library#arcana-${Low.num}`} className="flex flex-col items-center gap-2 group">
          <TarotCardFace card={Low} size="sm" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/70 group-hover:text-amber-300/80 transition-colors">
            The Resolution · {Low.name} ↓
          </span>
        </Link>
      </div>

      <p className="font-mono text-xs text-indigo-300/60 mb-4">{inst.workings}</p>

      <h6 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
        ☾ The debt
      </h6>
      <p className="text-indigo-100/85 text-sm leading-relaxed mb-4">{debt.debt}</p>

      <div className="rounded-2xl border border-rose-300/20 bg-rose-400/[0.06] p-4 mb-4">
        <h6 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
          ⚡ The energy it carries
        </h6>
        <p className="text-rose-100/85 text-sm leading-relaxed">{debt.energy}</p>
      </div>

      <h6 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
        ✦ How it is paid
      </h6>
      <p className="text-indigo-200/75 text-sm leading-relaxed border-l-2 border-emerald-300/40 pl-3">
        {debt.resolution}
      </p>
    </div>
  )
}

export default function ExtendedChartPanel({ date, name, lifePathNumber, expressionNumber }: Props) {
  const attitude = computeAttitude(date)
  const now = new Date().getFullYear()
  const yearCards = [computeYearCard(date, now), computeYearCard(date, now + 1)]
  const karmic = scanKarmicDebts(date, name)
  const maturity =
    expressionNumber !== undefined ? computeMaturity(lifePathNumber, expressionNumber) : null
  const balance = name ? computeBalance(name) : null

  return (
    <section className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
      <div className="text-center mb-8">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Complete Chart
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">Every Layer of Your Numbers</h3>
        <p className="text-indigo-200/70 text-sm mt-2 max-w-2xl mx-auto">
          Beyond the birth cards and life path: the numbers that describe your instincts, your
          yearly cycles, what you grow into, and any karmic debts carried into this life.
        </p>
      </div>

      {/* ── Karmic debts FIRST — the layer people most need to understand ── */}
      <div id="layer-karmic" className="scroll-mt-24 mb-10">
        <div className="text-center mb-5">
          <Badge
            variant="outline"
            className="border-rose-300/40 text-rose-200 mb-3 tracking-[0.2em] uppercase"
          >
            Karmic Lessons · A Major Layer
          </Badge>
          <h4 className="font-cinzel text-amber-100 text-center text-lg mb-3">
            Karmic Debt in Your Chart
          </h4>
          <p className="text-indigo-100/80 text-sm leading-relaxed max-w-3xl mx-auto">
            Karmic debts are the numbers <span className="text-rose-200 font-mono">13, 14, 16 and 19</span> —
            spotted anywhere in your chart <em>before</em> they reduce to a single digit. Numerology
            reads each one as an unfinished lesson carried over from a previous cycle: the digit
            they would have reduced to (the 4, 5, 7 or 1) still describes the gift, but it arrives
            with interest — the same theme repeats, louder, until it is consciously worked through.
            A karmic number is never a punishment; it is the syllabus of this lifetime, and each
            one names both the debt and the card that pays it.
          </p>
          <p className="text-indigo-300/60 text-xs mt-3 italic">
            Scanning your birth day, life path and name for 13/4, 14/5, 16/7 and 19/1 before they
            reduce.
          </p>
        </div>
        {karmic && karmic.instances.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-5">
            {karmic.instances.map((inst) => (
              <KarmicCard key={`${inst.source}-${inst.number}`} inst={inst} />
            ))}
          </div>
        ) : (
          <p className="text-center text-indigo-200/70 text-sm rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.04] py-5 px-4 max-w-xl mx-auto">
            ✦ No karmic debt numbers found in your birth day
            {karmic?.scannedExpression ? ', life path, or name' : ' or life path'}
            {karmic?.scannedExpression ? '' : ' — add your name to scan it too'}. Your chart starts
            clean — the lessons here are chosen, not owed.
          </p>
        )}
      </div>

      <Separator className="mb-8 bg-indigo-400/10" />

      {/* ── Attitude + Year cards row ─────────────────────── */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {attitude && (
          <div
            id="layer-attitude"
            className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
          >
            <h4 className="font-cinzel text-amber-100">
              Attitude Number {attitude.number}
              {attitude.number > 9 && <span className="ml-1 text-amber-300/80 text-xs">✦</span>}
            </h4>
            <p className="font-mono text-xs text-indigo-300/60 mt-1">{attitude.workings}</p>
            <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">{attitude.line}</p>
            <p className="text-indigo-300/50 text-xs mt-2 italic">
              Your instinctive first response — read from month + day: how you react before you
              have decided anything. Its card:{' '}
              <Link
                to={`/library#arcana-${attitude.card.num}`}
                className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
              >
                {attitude.card.name} ↓
              </Link>
              .
            </p>
          </div>
        )}

        <div
          id="layer-year-cards"
          className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
        >
          <h4 className="font-cinzel text-amber-100 mb-1">Year Cards</h4>
          <p className="text-indigo-300/60 text-xs italic mb-3">
            Your month + day are added to any year to read that year’s governing Major Arcana —
            the theme, lesson and weather of the twelve months ahead.
          </p>
          <div className="space-y-4">
            {yearCards.map(
              (yc) =>
                yc && (
                  <div key={yc.year} className="flex gap-4 items-start">
                    <TarotCardFace card={yc.card} size="sm" />
                    <div>
                      <p className="text-amber-200/90 text-sm font-cinzel">
                        {yc.year === now ? `${yc.year} · this year` : `${yc.year} · next year`}
                      </p>
                      <p className="font-mono text-xs text-indigo-300/60 mt-0.5">{yc.workings}</p>
                      <p className="text-indigo-200/75 text-sm mt-1 leading-relaxed">
                        {yc.card.meaning}
                      </p>
                      <p className="text-indigo-300/50 text-xs mt-1 italic">
                        This year’s theme —{' '}
                        <Link
                          to={`/library#arcana-${yc.card.num}`}
                          className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                        >
                          {yc.card.name} ↓
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>

      {/* ── Maturity + Balance row ────────────────────────── */}
      {(maturity || balance) && (
        <div className="grid md:grid-cols-2 gap-6">
          {maturity && (
            <div
              id="layer-maturity"
              className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
            >
              <h4 className="font-cinzel text-amber-100">
                Maturity Number {maturity.number}
                {maturity.isMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="font-mono text-xs text-indigo-300/60 mt-1">
                Life Path {lifePathNumber} + Destiny {expressionNumber} · {maturity.workings}
              </p>
              <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">
                {getNumberProfile(maturity.number).meaning}
              </p>
              <p className="text-indigo-300/50 text-xs mt-2 italic">
                The self you fully grow into — this number strengthens from the mid-thirties
                onward.{' '}
                <Link
                  to={`/library#number-${maturity.number}`}
                  className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                >
                  the number {maturity.number} ↓
                </Link>
              </p>
            </div>
          )}
          {balance && (
            <div
              id="layer-balance"
              className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
            >
              <h4 className="font-cinzel text-amber-100">
                Balance Number {balance.number}
                {balance.isMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="font-mono text-xs text-indigo-300/60 mt-1">
                First letters of “{balance.letters.join(' · ')}” · {balance.workings}
              </p>
              <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">{balance.line}</p>
              <p className="text-indigo-300/50 text-xs mt-2 italic">
                How you restore yourself when life knocks you off centre — from the first letters
                of each of your names.{' '}
                <Link
                  to={`/library#number-${balance.number}`}
                  className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                >
                  the number {balance.number} ↓
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
```

### `app/src/components/LearnSection.tsx` (13.0 KB)

```tsx
import type { ReactNode } from 'react'
import { Separator } from '@/components/ui/separator'
import TarotCardFace from '@/components/TarotCardFace'
import { MAJOR_ARCANA, getCard } from '@/lib/tarot'
import { getJourneyMeeting } from '@/lib/journeyMeeting'
import { getNumberProfile, MASTER_NOTES } from '@/lib/numerology'
import { PAIR_PATHS, PAIR_DETAILS } from '@/lib/extendedNumerology'

const NUMBER_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33]
const PAIR_ORDER = Object.keys(PAIR_PATHS)

function LibraryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-amber-300/90 underline decoration-amber-300/30 underline-offset-4 hover:text-amber-200 hover:decoration-amber-200/70 transition-colors"
    >
      {children}
    </a>
  )
}

/** ── The Numbers 1–9 & the Master Numbers (page section, id anchors number-N) ── */
export function NumbersLibrary() {
  return (
    <div id="library-numbers" className="scroll-mt-10">
      <h3 className="font-cinzel text-2xl text-amber-100 text-center mb-2">
        The Numbers 1–9 & the Master Numbers
      </h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
        The same nine currents run through every position of your chart — life path, expression,
        soul urge, personality, birthday, attitude, maturity and balance — each bringing its own
        energy to wherever it lands.
      </p>
      <div className="space-y-6">
        {NUMBER_ORDER.map((n) => {
          const p = getNumberProfile(n)
          const isMaster = n > 9
          return (
            <article
              key={n}
              id={`number-${n}`}
              className={`rounded-3xl border p-6 sm:p-8 scroll-mt-24 ${
                isMaster
                  ? 'border-amber-200/35 bg-amber-200/[0.04]'
                  : 'border-indigo-400/20 bg-white/[0.03]'
              } backdrop-blur-sm`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div
                  className={`relative w-24 h-24 shrink-0 rounded-full border-2 flex items-center justify-center ${
                    isMaster
                      ? 'border-amber-300/60 bg-amber-200/10 shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]'
                      : 'border-indigo-300/40 bg-indigo-500/10'
                  }`}
                >
                  <span
                    className={`font-cinzel text-4xl ${
                      isMaster ? 'text-amber-100' : 'text-indigo-100'
                    }`}
                  >
                    {n}
                  </span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="font-cinzel text-xl text-amber-100">
                    {n} — {p.title}
                    {isMaster && (
                      <span className="ml-2 text-amber-300/90 text-sm align-middle">
                        ✦ Master Number
                      </span>
                    )}
                  </h4>
                  <p className="text-indigo-300/70 text-xs mt-1 tracking-wide">
                    {p.strengths.join(' · ')}
                  </p>
                  <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">{p.meaning}</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4">
                <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ⚡ The energy it brings
                </h5>
                <p className="text-indigo-200/75 text-sm leading-relaxed">{p.energy}</p>
              </div>

              <p className="text-indigo-200/70 text-sm leading-relaxed mt-4">{p.detail}</p>

              {isMaster && MASTER_NOTES[n] && (
                <div className="mt-4 rounded-2xl border border-amber-200/30 bg-amber-200/[0.06] p-4">
                  <h5 className="font-cinzel text-amber-200 text-xs tracking-[0.25em] uppercase mb-2">
                    ✦ Why the master numbers show up
                  </h5>
                  <p className="text-amber-50/85 text-sm leading-relaxed">{MASTER_NOTES[n]}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-4">
                  <h5 className="text-emerald-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                    Strengths
                  </h5>
                  <ul className="text-indigo-100/80 text-sm space-y-1">
                    {p.strengths.map((s) => (
                      <li key={s}>✦ {s}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-rose-300/20 bg-rose-400/5 p-4">
                  <h5 className="text-rose-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                    Challenges
                  </h5>
                  <ul className="text-indigo-100/80 text-sm space-y-1">
                    {p.challenges.map((c) => (
                      <li key={c}>☾ {c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center gap-5">
                <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4 flex-1">
                  <h5 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
                    ✦ Working with this number
                  </h5>
                  <p className="text-emerald-50/85 text-sm leading-relaxed">{p.advice}</p>
                </div>
                {p.card && (
                  <a
                    href={`#arcana-${p.card.num}`}
                    className="flex flex-col items-center gap-2 shrink-0 group"
                  >
                    <TarotCardFace card={p.card} size="sm" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60 group-hover:text-amber-300/80 transition-colors">
                      Its arcana · {p.card.name} ↓
                    </span>
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

/** ── The 22 Major Arcana (page section, id anchors arcana-N) ── */
export function ArcanasLibrary() {
  return (
    <div id="library-arcanas" className="scroll-mt-10">
      <h3 className="font-cinzel text-2xl text-amber-100 text-center mb-2">The 22 Major Arcana</h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
        The tarot and the numbers share one deck: every numerology number corresponds to a Major
        Arcana card, and every birth date walks down a chain of them.
      </p>
      <div className="space-y-6">
        {MAJOR_ARCANA.map((card) => (
          <article
            key={card.num}
            id={`arcana-${card.num}`}
            className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href={`#arcana-${card.num}`} className="shrink-0">
                <TarotCardFace card={card} size="sm" />
              </a>
              <div className="text-center sm:text-left">
                <h4 className="font-cinzel text-xl text-amber-100">
                  {card.roman} — {card.name}
                </h4>
                <p className="text-indigo-300/70 text-xs mt-1 tracking-wide">
                  {card.keywords.join(' · ')}
                </p>
                <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">{card.meaning}</p>
              </div>
            </div>
            <p className="text-indigo-200/70 text-sm leading-relaxed mt-4">{card.detail}</p>

            {getJourneyMeeting(card.num) && (() => {
              const m = getJourneyMeeting(card.num)!
              return (
                <div className="mt-5 rounded-2xl border border-amber-200/20 bg-amber-200/[0.03] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full aspect-[21/9] object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h5 className="font-cinzel text-amber-100 text-sm tracking-wide">
                        {m.title}
                      </h5>
                      <span className="rounded-full border border-amber-300/40 bg-amber-400/10 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-amber-200">
                        {m.role}
                      </span>
                    </div>
                    <p className="text-indigo-300/50 text-[11px] italic mb-2">{m.place}</p>
                    <p className="text-indigo-100/80 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              )
            })()}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl border border-rose-300/25 bg-rose-400/[0.07] p-4">
                <h5 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ☾ Shadow side
                </h5>
                <p className="text-rose-100/90 text-sm leading-relaxed">{card.shadowDetail}</p>
              </div>
              <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4">
                <h5 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
                  ✦ Working with this card
                </h5>
                <p className="text-emerald-50/85 text-sm leading-relaxed">{card.guidance}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

/** ── What each birth card pair means together (id anchors pair-K) ── */
export function PairsLibrary() {
  return (
    <div id="library-pairs" className="scroll-mt-10">
      <h3 className="font-cinzel text-2xl text-amber-100 text-center mb-2">
        What Each Birth Card Pair Means Together
      </h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
        A birth card is a portrait; a pair is a path. Here is what each personality + soul card
        combination means as a combination.
      </p>
      <div className="space-y-6">
        {PAIR_ORDER.map((key) => {
          const path = PAIR_PATHS[key]
          const detail = PAIR_DETAILS[key]
          const [primary, secondary] = key.split('-').map(Number)
          const High = getCard(primary)
          const Low = getCard(secondary)
          if (!path || !detail) return null
          return (
            <article
              key={key}
              id={`pair-${key}`}
              className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 scroll-mt-24"
            >
              <div className="text-center mb-5">
                <h4 className="font-cinzel text-xl text-amber-100">✦ {path} ✦</h4>
                <p className="text-indigo-300/70 text-xs mt-1 tracking-wide italic">
                  {detail.essence}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-5">
                <a href={`#arcana-${High.num}`} className="flex flex-col items-center gap-2 group">
                  <TarotCardFace card={High} size="sm" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60 group-hover:text-amber-300/80 transition-colors">
                    Personality · {High.name}
                  </span>
                </a>
                <a href={`#arcana-${Low.num}`} className="flex flex-col items-center gap-2 group">
                  <TarotCardFace card={Low} size="sm" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60 group-hover:text-amber-300/80 transition-colors">
                    Soul · {Low.name}
                  </span>
                </a>
              </div>
              <p className="text-indigo-100/85 text-sm leading-relaxed max-w-3xl mx-auto text-center sm:text-left">
                {detail.together}
              </p>
              {key === '17-8' && (
                <p className="text-center mt-4">
                  <LibraryLink href="#justice-curiosity">
                    …and a hidden third card walks behind this pair ↓
                  </LibraryLink>
                </p>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

/** Kept for reference: separator used between library sections */
export function LibrarySeparator() {
  return <Separator className="my-12 bg-indigo-400/10" />
}
```

### `app/src/components/JusticeCuriosity.tsx` (3.6 KB)

```tsx
import { Badge } from '@/components/ui/badge'
import TarotCardFace from '@/components/TarotCardFace'
import { getCard } from '@/lib/tarot'

/**
 * The hidden Justice card — the 8/11 curiosity behind the Star & Strength
 * pair (17/8). Lives on the Pairs page, next to the 17-8 entry.
 */
export default function JusticeCuriosity() {
  return (
    <article
      id="justice-curiosity"
      className="rounded-3xl border-2 border-amber-200/30 bg-amber-200/[0.05] p-6 sm:p-10 scroll-mt-24"
    >
      <div className="text-center mb-6">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Star · Strength — and the Hidden Third
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">
          XI — Justice stands behind this pair
        </h3>
        <p className="text-indigo-300/70 text-sm mt-2 max-w-2xl mx-auto italic">
          Strength does not exist without Justice — and the oldest decks can prove it.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 shrink-0">
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(17)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
              XVII · The Star
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(8)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
              VIII · Strength
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(11)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
              Hidden · XI Justice
            </span>
          </div>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-indigo-100/85 max-w-2xl">
          <p>
            In the oldest tarot traditions — the Marseille deck, centuries older than
            Rider–Waite — card <span className="text-amber-200">VIII is Justice</span> and card{' '}
            <span className="text-amber-200">XI is Strength</span>. Waite swapped them so that the
            majors could line up with the astrological zodiac, and decks have argued about it ever
            since. The 17/8 pair touches both sides of that ancient exchange: its Strength is an{' '}
            <span className="text-amber-200">8 that could just as well be an 11</span>.
          </p>
          <p>
            And there is a reason the number lingers on this pair in particular:{' '}
            <span className="text-amber-200">strength without justice does not exist</span>. Power
            without fairness is only force; courage without a cause is only appetite; hope without
            truth is only wishful thinking. Justice stands behind the Star and Strength as this
            pair’s hidden card — a quiet reminder that radiance and gentleness become virtues only
            when balanced by what is right.
          </p>
          <p className="text-indigo-300/70 text-xs italic">
            8 + 11 = 19 — the Sun. When a chart holds the Star, Strength and Justice together,
            the reduction lands on the Sun: fairness, courage and hope completing themselves in
            joy.
          </p>
        </div>
      </div>
    </article>
  )
}
```

### `app/src/components/TarotCardFace.tsx` (4.2 KB)

```tsx
import type { MajorArcana } from '@/lib/tarot'
import { getCardArt } from '@/lib/cardArt'

/** Simple glyphs for each Major Arcana — used as card centre art */
const GLYPHS: Record<number, string> = {
  0: '✈', // The Fool — a small white flower / cliff edge; use a light glyph
  1: '∞', // The Magician — lemniscate above his head
  2: '☽', // The High Priestess — the moon
  3: '♀', // The Empress — Venus
  4: '♈', // The Emperor — Aries
  5: '✠', // The Hierophant — the keys / triple crown
  6: '💑', // The Lovers
  7: '♋', // The Chariot — the city walls / Cancer
  8: '♌', // Strength — Leo
  9: '✧', // The Hermit — the lantern star
  10: '✺', // Wheel of Fortune — the wheel
  11: '⚖', // Justice — the scales
  12: '✚', // The Hanged Man — the tau cross
  13: '🦋', // Death — the white rose / scorpion: butterfly of transformation
  14: '⚗', // Temperance — the alchemical vessel
  15: '♑', // The Devil — Capricorn / the inverted pentagram
  16: '⚡', // The Tower — the lightning bolt
  17: '✶', // The Star — the eight-pointed star
  18: '🌙', // The Moon
  19: '☀', // The Sun
  20: '📯', // Judgement — the trumpet
  21: '🌍', // The World — the dancing figure in the wreath
}

interface Props {
  card: MajorArcana
  size?: 'sm' | 'md' | 'lg'
  flipped?: boolean
}

export default function TarotCardFace({ card, size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'w-28 sm:w-32',
    md: 'w-36 sm:w-44',
    lg: 'w-44 sm:w-56',
  }[size]

  const art = getCardArt(card.num)

  // Real deck artwork for cards 0–9; stylised face for the rest (until the full deck arrives)
  if (art) {
    return (
      <div
        className={`tarot-card group relative ${sizeClasses} select-none transition-transform duration-500 hover:-translate-y-2 hover:rotate-1`}
      >
        <img
          src={art}
          alt={card.name}
          className="w-full h-auto rounded-2xl border border-amber-200/40 shadow-[0_10px_40px_-10px_rgba(120,80,220,0.55)]"
          draggable={false}
        />
      </div>
    )
  }

  return (
    <div
      className={`tarot-card group relative ${sizeClasses} aspect-[2/3.4] select-none transition-transform duration-500 hover:-translate-y-2 hover:rotate-1`}
    >
      {/* Card body */}
      <div className="absolute inset-0 rounded-2xl border-2 border-amber-200/60 bg-gradient-to-b from-indigo-950 via-[#1a1033] to-[#120a24] shadow-[0_10px_40px_-10px_rgba(120,80,220,0.45)] overflow-hidden">
        {/* Inner frame */}
        <div className="absolute inset-2 rounded-xl border border-amber-200/25 pointer-events-none" />
        {/* Corner flourishes */}
        <div className="absolute top-3 left-3 text-amber-200/50 text-xs">✦</div>
        <div className="absolute top-3 right-3 text-amber-200/50 text-xs">✦</div>
        <div className="absolute bottom-3 left-3 text-amber-200/50 text-xs">✦</div>
        <div className="absolute bottom-3 right-3 text-amber-200/50 text-xs">✦</div>

        <div className="h-full flex flex-col items-center justify-between py-5 px-3 text-center">
          <span className="font-cinzel text-amber-200/90 text-sm tracking-[0.3em]">
            {card.roman}
          </span>

          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-amber-200/30 bg-amber-200/5 flex items-center justify-center shadow-[inset_0_0_20px_rgba(251,191,36,0.12)]">
              <span className="text-3xl sm:text-4xl text-amber-100 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
                {GLYPHS[card.num]}
              </span>
            </div>
            <h3 className="font-cinzel text-amber-100 text-base sm:text-lg leading-tight px-1">
              {card.name}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-1 px-1">
            {card.keywords.slice(0, 3).map((k) => (
              <span
                key={k}
                className="text-[9px] sm:text-[10px] uppercase tracking-wider text-indigo-200/70 border border-indigo-300/20 rounded-full px-1.5 py-0.5"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### `app/src/lib/tarot.ts` (37.1 KB)

```ts
export interface MajorArcana {
  num: number
  roman: string
  name: string
  keywords: string[]
  meaning: string
  shadow: string
  /** Deeper layer: symbolism and how the energy tends to show up in a life */
  detail: string
  /** The shadow side, fully explained */
  shadowDetail: string
  /** Practical guidance for working with this card's energy */
  guidance: string
}

export const MAJOR_ARCANA: MajorArcana[] = [
  {
    num: 0,
    roman: '0',
    name: 'The Fool',
    keywords: ['Beginnings', 'Spontaneity', 'Faith', 'Leap of faith'],
    meaning:
      'The Fool marks the start of a journey. You are being called to step into the unknown with an open heart, trusting that the universe will catch you. Innocence, wonder and raw potential define this energy.',
    shadow: 'Recklessness, naivety, fear of the unknown',
    detail:
      'The Fool is numbered zero because it sits outside the whole system of the Major Arcana — it is pure potential before anything has been defined. In a birth chart it describes someone who keeps finding new beginnings: careers started from scratch, moves to unknown places, leaps that make no sense on paper and yet land. The dog at the Fool’s heels is both warning and companion — instinct nipping at you when the cliff edge is near, but loyalty keeping you company as you step off it anyway. People strongly marked by the Fool often feel most alive at the start of things and most restless at the end of them.',
    shadowDetail:
      'Its shadow is the leap taken with no landing planned — impulsiveness mistaken for courage, promises made that the wind has no intention of keeping. When the Fool turns dark it becomes the eternal beginner who starts a hundred roads and finishes none, or the naivety that trusts where verification was required.',
    guidance:
      'Work with the Fool by honouring beginnings: give yourself permission to be a novice and to begin badly. Pair every leap with one small practical anchor — a savings buffer, a return ticket, a deadline — so that faith has something solid to stand on. Ask regularly: is this a true calling or just the thrill of the edge?',
  },
  {
    num: 1,
    roman: 'I',
    name: 'The Magician',
    keywords: ['Manifestation', 'Willpower', 'Resourcefulness', 'Skill'],
    meaning:
      'The Magician holds all the tools of the four suits and knows how to use them. This is the card of pure creative will — you already have everything you need to turn ideas into reality.',
    shadow: 'Manipulation, trickery, untapped potential',
    detail:
      'The Magician stands with one hand raised to the sky and one pointing to the earth — “as above, so below” — the eternal translator between vision and matter. On the table before him lie the wand, cup, sword and pentacle: will, feeling, thought and the material world. In a birth chart this is the person who makes things happen simply by deciding they will; who learns quickly, adapts fast, and can turn a handful of unrelated skills into a livelihood. The Magician’s gift is focus: energy directed, not scattered.',
    shadowDetail:
      'Its shadow is the con artist and the dabbler. Manipulated, the Magician becomes someone who uses insight into others as a lever rather than a bridge — charm deployed to get, not to give. In its milder form it is the curse of scattered talent: many tools on the table, none ever picked up.',
    guidance:
      'Work with the Magician by naming one intention at a time and giving it your full current. Inventory your actual tools — skills, contacts, time — before believing you lack anything. And set yourself an integrity test for every influence you wield: would I still do this if the other person could see my full hand?',
  },
  {
    num: 2,
    roman: 'II',
    name: 'The High Priestess',
    keywords: ['Intuition', 'Sacred knowledge', 'Inner voice', 'Mystery'],
    meaning:
      'The High Priestess guards the veil between worlds. She invites you to trust your intuition and the quiet knowing beneath the surface of things. Not everything can be learned from books — some truths are felt.',
    shadow: 'Secrets, withdrawal, ignoring your inner voice',
    detail:
      'She sits between the black pillar of severity and the white pillar of mercy, behind a veil decorated with pomegranates and palms — the seen and the unseen held in perfect balance. The scroll in her lap, Torah partly covered, reminds us that some knowledge must remain half-hidden to stay true. In a birth chart the High Priestess marks someone who reads rooms, silences and subtexts faster than words; who dreams vividly and often knows things before they happen; who needs solitude the way others need company. Her wisdom arrives quietly and rarely announces itself as wisdom.',
    shadowDetail:
      'Its shadow is the keeper of secrets who forgets how to be known — withdrawal that hardens into isolation, intuition suppressed until it turns into anxiety, or knowledge used as quiet leverage. It can also appear as endless receptivity: feeling everything, deciding nothing.',
    guidance:
      'Work with the High Priestess by treating intuition as data, not noise: write down what you sense before events confirm or deny it, and review the record. Protect a private inner life deliberately — a practice, a journal, a door that closes — and remember that the veil parts for the balanced, not the busy.',
  },
  {
    num: 3,
    roman: 'III',
    name: 'The Empress',
    keywords: ['Abundance', 'Nurturing', 'Creativity', 'Sensuality'],
    meaning:
      'The Empress is the archetype of creation and care. She rules fertility of all kinds — projects, relationships, ideas — and reminds you that beauty and comfort are forms of wisdom too.',
    shadow: 'Smothering, dependence, creative blocks',
    detail:
      'She reclines in a living room of wheat and forest, her crown of stars borrowed from the sky, the Venus symbol etched on her shield — love as the fundamental technology of growth. In a birth chart the Empress describes the person through whom things flourish: gardens, teams, children, businesses, ideas placed in their care grow faster than they should. She governs the senses as intelligence — taste, touch, appetite — and treats pleasure not as indulgence but as information about what is healthy.',
    shadowDetail:
      'Its shadow is the smother — care that becomes control, abundance that becomes hoarding or dependence, creativity stalled by perfectionism or by needing to be needed. It can also show as neglect of self: the garden watered for everyone except the gardener.',
    guidance:
      'Work with the Empress by creating conditions rather than forcing outcomes: feed the soil, then let the plant do its work. Schedule beauty the way you schedule obligations — it is maintenance, not luxury. And keep one corner of your life that is yours alone to tend, where you receive rather than give.',
  },
  {
    num: 4,
    roman: 'IV',
    name: 'The Emperor',
    keywords: ['Authority', 'Structure', 'Stability', 'Fatherhood'],
    meaning:
      'The Emperor builds kingdoms from stone and law. He represents order, discipline and the protective use of power — the ability to create stability for yourself and for others.',
    shadow: 'Tyranny, rigidity, control issues',
    detail:
      'He sits on a throne carved with rams’ heads — Aries, the first spark of the zodiac — holding orb and ankh, the world and the life that sustains it, dressed in iron armour beneath his robes: even at rest, he is armoured for duty. In a birth chart the Emperor marks the natural anchor of any group — the one who makes the plan, keeps the ledger, holds the door. His gift is structure: he turns chaos into systems that outlast moods, and he understands that real authority is rented daily through service, not owned once through title.',
    shadowDetail:
      'Its shadow is the tyrant — control mistaken for safety, rules kept long after their reason has died, authority used to silence rather than shelter. In softer form it becomes rigidity: the inability to improvise, the fear beneath every inflexible plan, the father who cannot say he was wrong.',
    guidance:
      'Work with the Emperor by building one structure that serves life rather than cages it — a budget, a routine, a constitution for your household — and reviewing it on schedule. Practise saying “I was wrong” out loud; it is the cheapest proof that your authority is real. And remember: the throne exists to hold the kingdom, not the other way around.',
  },
  {
    num: 5,
    roman: 'V',
    name: 'The Hierophant',
    keywords: ['Tradition', 'Spiritual wisdom', 'Teaching', 'Belief'],
    meaning:
      'The Hierophant is the bridge between the divine and the everyday. He honours lineage, ritual and shared wisdom — asking you to find the sacred in established paths, or to consciously forge your own.',
    shadow: 'Dogma, conformity, rebellion against structure',
    detail:
      'Between two pillars he raises the triple cross of blessing, two acolytes kneeling before him — the chain of transmission from mystery to student. His is the wisdom of institutions: religions, schools, crafts, traditions that carry distilled experience across centuries. In a birth chart the Hierophant marks the teacher, the mentor, the keeper of methods; someone who finds meaning in lineage and transmits what they have learned almost by reflex. He also governs the middle path between blind conformity and empty rebellion: honouring the form until the spirit inside it is strong enough to walk alone.',
    shadowDetail:
      'Its shadow is dogma — the letter worshipped while the spirit suffocates, tradition kept as a cage rather than a bridge, or its mirror image: reflexive rejection of all structure, which leaves the rebel with nothing solid to build on.',
    guidance:
      'Work with the Hierophant by apprenticing yourself to something older than you — a tradition, a craft, a lineage of thought — long enough to absorb its depth before editing it. Teach what you know; transmission completes the circuit. And when you inherit a rule, ask what problem it was built to solve before you keep or break it.',
  },
  {
    num: 6,
    roman: 'VI',
    name: 'The Lovers',
    keywords: ['Love', 'Harmony', 'Choices', 'Alignment'],
    meaning:
      'The Lovers speak of union — with another, with yourself, with your values. Every deep connection is a mirror, and every choice made from love shapes the architecture of your life.',
    shadow: 'Imbalance, disharmony, misaligned values',
    detail:
      'A man and woman stand beneath the Tree of Knowledge and the Tree of Life, an angel of air blessing the space between them while a mountain rises in the distance — the road every honest relationship must eventually climb. Crucially, this is not only the card of romance: it is the card of choice, of values made visible. In a birth chart the Lovers describe someone who grows through relationship — who becomes themselves most clearly in the mirror of another — and for whom every significant choice is really a question of alignment: does this match what I actually love?',
    shadowDetail:
      'Its shadow is the wrong union — relationships kept from fear of emptiness, choices made to please the mirror instead of honour it, or the constant splitting of the self: one life shown to others, another lived in secret. Its imbalance is always a values problem wearing a costume of a love problem.',
    guidance:
      'Work with the Lovers by writing your actual values down and testing your big choices against the list, not against the moment’s weather. Treat relationships as curriculum: what is this bond teaching, and am I learning or repeating? And when torn between two paths, ask which one you would defend even if no one ever applauded it.',
  },
  {
    num: 7,
    roman: 'VII',
    name: 'The Chariot',
    keywords: ['Determination', 'Willpower', 'Triumph', 'Direction'],
    meaning:
      'The Chariot is victory through focused will. Two sphinxes pull in opposite directions — only your mastery of opposing forces moves you forward. Discipline turns ambition into arrival.',
    shadow: 'Aggression, scattered energy, loss of control',
    detail:
      'A warrior stands in a square chariot hung with stars, no reins in his hands — he drives by will alone. The black and white sphinxes are the twin engines of every human life: instinct and reason, fear and appetite, what pulls toward and what pulls away. In a birth chart the Chariot marks the person who wins not by talent but by vector — who picks a direction and out-endures everyone. Life keeps handing them opposing forces to unify: two careers, two homes, two loyalties. Their gift is that conflict, held firmly, becomes horsepower.',
    shadowDetail:
      'Its shadow is the runaway — willpower curdled into aggression, control held so tightly that everything it touches resents it, or its opposite: scattered energy firing in six directions and arriving nowhere. The crashed chariot is always a story about unowned inner conflict projected onto the road.',
    guidance:
      'Work with the Chariot by choosing fewer battles and winning them completely; define the destination in one sentence before you harness the horses. Notice which sphinx you have been starving — the disciplined one or the instinctive one — and feed it deliberately. And remember: the warrior’s real armour is certainty of purpose, not hardness.',
  },
  {
    num: 8,
    roman: 'VIII',
    name: 'Strength',
    keywords: ['Courage', 'Inner strength', 'Patience', 'Compassion'],
    meaning:
      'Strength is the quiet power of the soul. The woman does not kill the lion — she befriends it. This card asks you to meet your wildness with gentleness and your obstacles with steady, patient courage.',
    shadow: 'Self-doubt, raw emotion, weakness under pressure',
    detail:
      'A woman in white calmly closes the jaws of a lion, the infinity sign floating above her head — not the brief explosion of force but the endless one. In a birth chart Strength marks someone whose real power is softness held steady: the parent who never raises their voice and is never disobeyed, the negotiator who wins by refusing to flinch, the person who has made peace with their own appetite and is therefore no longer ruled by it. This is mastery of the inner animal — desire, temper, fear — achieved not by chains but by relationship.',
    shadowDetail:
      'Its shadow is the two failures of courage: force — domination, shouting, the tantrum dressed as strength — and collapse — self-doubt so chronic that every challenge is met with apology. Both are the same wound: the inner animal feared instead of befriended.',
    guidance:
      'Work with Strength by practising the long exhale in the exact moment you want to strike — the pause between impulse and action is where this card lives. Make peace with one appetite consciously (rest, food, anger, comfort) rather than warring with it forever. And measure your power not by what you can break but by what you can hold gently without tiring.',
  },
  {
    num: 9,
    roman: 'IX',
    name: 'The Hermit',
    keywords: ['Introspection', 'Soul-searching', 'Guidance', 'Inner light'],
    meaning:
      'The Hermit walks alone by choice, lantern in hand. He is the seeker who understands that withdrawal is not loneliness but a laboratory — a sacred space where truth can surface.',
    shadow: 'Isolation, loneliness, refusal of help',
    detail:
      'On a peak above the world he raises a lantern whose star is the six-pointed seal of wisdom — he does not illuminate the whole path, only the next step, which is all anyone is ever actually given. In a birth chart the Hermit marks the soul on the long solo road: drawn to depth over company, to study over chatter, to the one true question rather than the hundred passing ones. These are the people who do their real growing in private and emerge changed. Their presence calms rooms precisely because they are not performing for them.',
    shadowDetail:
      'Its shadow is isolation chosen from fear and renamed as wisdom — the refusal of every outstretched hand, the door locked so long that the Hermit forgets he has the key. It can also appear as aimless drifting: wandering without the lantern, busyness substituting for the search.',
    guidance:
      'Work with the Hermit by scheduling real solitude — hours, not minutes — and protecting it from the world’s static. Carry the lantern for others occasionally: share what your solitude has taught, or it curdles into superiority. And when you notice the difference between “I need to be alone” and “I am afraid to be seen”, honour whichever is true.',
  },
  {
    num: 10,
    roman: 'X',
    name: 'Wheel of Fortune',
    keywords: ['Luck', 'Karma', 'Cycles', 'Turning point'],
    meaning:
      'The Wheel turns for everyone. This card signals a shift in fate — what was down begins to rise. It teaches you to ride the cycles of life rather than cling to any single moment of them.',
    shadow: 'Bad luck, resistance to change, stuck cycles',
    detail:
      'The wheel carries the letters T-A-R-O and the signs of the fixed zodiac; sphinx above, wolf and serpent riding the rim, Anubis rising as Typhon falls — nothing on the wheel is static except the hub. In a birth chart this card marks a life of visible cycles: seasons of rise and fall that arrive on their own schedule, often dramatically. These people learn young that fortune is a wheel and not a wall — that holding on at the top is as pointless as giving up at the bottom. Their gift is timing: they sense when the wheel is about to turn.',
    shadowDetail:
      'Its shadow is the gambler’s error — believing the wheel owes you a win because you lost before, or clinging to a summit as if the wheel could be stopped by grip. It also appears as the victim story: “luck” used as the permanent explanation, which quietly deletes all agency.',
    guidance:
      'Work with the Wheel by investing in what survives a full rotation — skills, relationships, health — rather than only what pays this quarter. Learn to read your own cycles: when did effort last pay off, and when did patience? And when at the bottom, act like someone who has read the card: prepare, because the turn is coming.',
  },
  {
    num: 11,
    roman: 'XI',
    name: 'Justice',
    keywords: ['Truth', 'Fairness', 'Cause and effect', 'Clarity'],
    meaning:
      'Justice weighs all things with an even hand. She stands for accountability, honest judgement and the law of consequence — you reap precisely what you sow, in this life or the next.',
    shadow: 'Dishonesty, unfairness, avoidance of accountability',
    detail:
      'She holds sword and scales between twin pillars — the sword of discernment, point up, ready; the scales held level, not by effort but by honesty. In a birth chart Justice marks the person for whom fairness is a nervous system: they notice every imbalance in a room, every unpaid debt, every contract broken in spirit if not in letter. They are natural judges, mediators, auditors of the truth. Their lives tend to turn on moments of clear-eyed decision, and they are at their best when they remember that justice without mercy is only arithmetic.',
    shadowDetail:
      'Its shadow is the two corruptions of the scales: harsh judgement — self or others measured against impossible standards, fairness weaponised into coldness — and its opposite, the accountant of excuses, who can justify anything and therefore answers for nothing.',
    guidance:
      'Work with Justice by keeping your own ledger honestly: what you gave, what you took, what you owe. Before judging, gather the missing facts — the scales demand evidence, not vibes. And practise restorative over punitive justice wherever you have the power: the goal is a mended balance, not a broken opponent.',
  },
  {
    num: 12,
    roman: 'XII',
    name: 'The Hanged Man',
    keywords: ['Sacrifice', 'Letting go', 'New perspective', 'Surrender'],
    meaning:
      'The Hanged Man suspends the world as he knows it. By surrendering control and looking at life upside down, he gains the illumination that action alone could never provide.',
    shadow: 'Stalling, martyrdom, needless sacrifice',
    detail:
      'He hangs by one foot from a T-shaped tau cross, the other leg folded into the number four, a halo around a face that is not suffering — he has chosen the suspension, and the choice is the whole secret. In a birth chart the Hanged Man marks someone whose path runs through surrender: their biggest breakthroughs arrive only after they stop pushing. They learn early that willing something is not the only way of moving it. Periods of apparent stuckness in their lives are usually initiations — the old self dissolving before a truer one can stand.',
    shadowDetail:
      'Its shadow is sacrifice without purpose — martyrdom performed for an audience, endless stalling renamed as patience, or the victim who has grown fond of the cross. Its opposite failure is the refusal to ever hang: control held so long that life must eventually force the suspension.',
    guidance:
      'Work with the Hanged Man by choosing your suspensions deliberately: when something refuses to move, stop pushing and change your angle instead. Ask “what is this pause teaching?” before asking “how do I end it?”. And retire the word sacrifice whenever martyrdom is what is actually being offered — the card accepts only willing surrender.',
  },
  {
    num: 13,
    roman: 'XIII',
    name: 'Death',
    keywords: ['Endings', 'Transformation', 'Transition', 'Rebirth'],
    meaning:
      'Death is the great transformer. Nothing truly ends — everything is compost for what comes next. This card marks a profound metamorphosis: the shedding of an old skin you have outgrown.',
    shadow: 'Fear of change, stagnation, clinging to the past',
    detail:
      'A skeleton knight rides through every rank of society — king, child, maiden — because death levels all, while the sun sets and rises between two towers in the distance, promising that this ending is also a dawn. In a birth chart Death marks the person who lives many lives in one: careers, cities, identities shed and renewed with a completeness that unsettles everyone who stays the same. Their gift is the honest ending — they can close a door all the way. Around them, things that are done finally get to be over.',
    shadowDetail:
      'Its shadow is the refusal to let the dead thing die — relationships, projects and identities kept on life support long after their season, stagnation defended as loyalty. It can also invert into compulsive destruction: burning bridges not because they were crossed but because the fire feels like aliveness.',
    guidance:
      'Work with Death by holding a personal ritual of endings: finish, bury, and bless what is over before seeding what is next. When the card appears, ask “what is trying to end here?” rather than “what is going wrong?”. And grieve honestly — transformation that skips mourning returns as haunting.',
  },
  {
    num: 14,
    roman: 'XIV',
    name: 'Temperance',
    keywords: ['Balance', 'Moderation', 'Patience', 'Alchemy'],
    meaning:
      'Temperance pours water between cups without spilling a drop. She is the art of blending opposites into harmony — the middle path where healing, timing and measured action create lasting results.',
    shadow: 'Imbalance, excess, lack of long-term vision',
    detail:
      'One foot on land, one in the stream, wings folded calmly, the angel pours from cup to cup in an endless loop that never wastes a drop — moderation practised as an active art, not a passive lack. In a birth chart Temperance marks the alchemist of the family and the workplace: the one who mixes opposites until something new appears — the dreamer with a spreadsheet, the fighter with patience, fire and water in one person. Their lives improve steadily rather than dramatically; given time, they beat the brilliant.',
    shadowDetail:
      'Its shadow is the failure of measure in both directions: excess — appetite, work, speed — or the pale, joyless “balance” that is really fear of ever fully committing. Both spill the water; one from greed, one from trembling.',
    guidance:
      'Work with Temperance by diluting intensity on purpose: when life runs hot, add routine; when it runs cold, add ritual. Practise one daily moderation deliberately — it trains the pouring hand for the bigger mixes. And in conflict, refuse both war and surrender: keep pouring until a third thing appears.',
  },
  {
    num: 15,
    roman: 'XV',
    name: 'The Devil',
    keywords: ['Addiction', 'Materialism', 'Bondage', 'Shadow self'],
    meaning:
      'The Devil reveals the chains we forge ourselves. What binds you — habit, desire, fear — only has power because you have agreed to wear it. Naming your shadow is the first step to freedom.',
    shadow: 'Detachment, freedom reclaimed, escapism',
    detail:
      'The horned figure presides over two figures loosely chained at the neck — loose enough to lift off, and that is the entire accusation: the bondage is consensual, maintained by appetite and fear rather than iron. In a birth chart the Devil marks the person whose greatest battles are with their own magnetisms: money, pleasure, power, drama, the deal that is too good. These are also the people of immense vitality — the same current that binds them, redirected, becomes charisma and sheer creative voltage. The card does not ask you to kill the beast; it asks who is holding the chain.',
    shadowDetail:
      'Its shadow is bondage mistaken for identity: “I am just like this” said about the habit, the relationship, the grind. It is also the projection of the beast onto others — everyone else is corrupt, obsessed, addicted — while one’s own chains are renamed as virtue.',
    guidance:
      'Work with the Devil by naming one chain honestly and testing how loose it is: skip it once and watch the panic — that measurement is the reading. Replace suppression with redirection, since the current will not stop flowing. And remember the card’s final secret: the moment the bondage is truly seen, it is already half unbuckled.',
  },
  {
    num: 16,
    roman: 'XVI',
    name: 'The Tower',
    keywords: ['Sudden change', 'Upheaval', 'Revelation', 'Awakening'],
    meaning:
      'The Tower is struck by lightning and the false crown falls. Built on shaky foundations, it must crumble so something truer can rise. Sudden, shocking — but ultimately liberating.',
    shadow: 'Disaster avoided, clinging to false structures',
    detail:
      'A bolt from a clear black sky strikes the tower’s crown — the one placed there by ambition rather than truth — and the two figures fall not into annihilation but into open air. In a birth chart the Tower marks a life with lightning in it: sudden collapses of structures that were hollow — jobs, beliefs, identities — often arriving exactly when the person inside was pretending not to hear the cracks. These people learn to build differently afterwards: on bedrock, with fewer pretensions, and faster than most at evacuating what is already burning.',
    shadowDetail:
      'Its shadow is the tower maintained — staying in the cracking structure because the fall frightens more than the rot, or softer: the person who spends their whole life fireproofing illusions. Its rare opposite is manufactured drama: blowing things up because quiet growth feels like stagnation.',
    guidance:
      'Work with the Tower by auditing your structures before the sky does: which of your towers would you defend with a lie? When the lightning comes, do not rebuild the same floor plan — the blueprint was the problem. And keep this card’s dignity: it never destroys what is true; it only finishes what was false.',
  },
  {
    num: 17,
    roman: 'XVII',
    name: 'The Star',
    keywords: ['Hope', 'Renewal', 'Inspiration', 'Healing'],
    meaning:
      'After the storm, the Star. She pours water onto land and stream, promising renewal. This is the card of restored faith — a reminder that you are made of the same light as the stars you wish on.',
    shadow: 'Hopelessness, self-doubt, lost faith',
    detail:
      'A figure kneels naked and unashamed by a living pool, pouring water back into the water and onto the land — giving to the source and the soil at once — while one great star and seven smaller ones burn steadily above. In a birth chart the Star marks the person who heals simply by being believed in: their faith in others is contagious and oddly accurate. They tend to arrive in people’s lives right after the Tower — the friend who shows up with the rebuild. Their gift is orientation: they can always find the one star that proves the storm has an edge.',
    shadowDetail:
      'Its shadow is the eclipse of faith — hopelessness worn as realism, the refusal to wish because wishes once failed, self-doubt so total that even poured water feels wasted. Inverted, it becomes escapism: permanent optimism that refuses to look at the wreckage it is supposedly rising from.',
    guidance:
      'Work with the Star by healing in both directions like the pouring figure — restore something in yourself and something in the world, every week. Protect your hope as an instrument: calibrated, honest, but never surrendered. And when faith is gone, borrow someone else’s; the stars are communal property.',
  },
  {
    num: 18,
    roman: 'XVIII',
    name: 'The Moon',
    keywords: ['Illusion', 'Anxiety', 'Subconscious', 'Dreams'],
    meaning:
      'The Moon lights a path that is not what it seems. It rules dreams, instincts and the shadowy territory of the subconscious — asking you to feel your way forward when clarity is impossible.',
    shadow: 'Confusion, deception, fear dissolving',
    detail:
      'A crayfish climbs from the deep pool — the primitive self surfacing — while dog and wolf, tame and wild, both howl at the moon; the road ahead forks through fields and mountains, but nothing on it is exactly what it appears. In a birth chart the Moon marks the person with deep tides: powerful instincts and imagination, porous boundaries, a psyche that dreams in symbols and remembers them. Their lives include phases — waxing and waning that others misread as inconsistency. Their gift is the night vision: they can navigate what cannot yet be explained, and they sense the truth of people beneath the presentation.',
    shadowDetail:
      'Its shadow is the fog mistaken for the world: anxiety fed by undefined fears, deception accepted or practised, projection — the wolf seen in everyone because it has not been met in oneself. Its opposite failure is worse: pretending there is no night at all.',
    guidance:
      'Work with the Moon by honouring the irrational on schedule: dreams written down, instinct consulted before big moves, fear named precisely so it can be sized. Never sign contracts in the fog — wait for daylight on anything that can be waited on. And keep one practice, art or person through which the subconscious is allowed to speak in its own language.',
  },
  {
    num: 19,
    roman: 'XIX',
    name: 'The Sun',
    keywords: ['Joy', 'Success', 'Vitality', 'Radiance'],
    meaning:
      'The Sun is the most welcome card in the deck — pure warmth, vitality and triumph. It speaks of a life lived out loud, of success that is shared, and of the simple radiance of being.',
    shadow: 'Temporary cloudiness, egotism, delayed joy',
    detail:
      'A great-faced sun pours straight and wavy rays over a child on a white horse, red banner raised, sunflowers crowding a low wall — joy with no fine print, success that needs no apology. In a birth chart the Sun marks the person whose default setting is vitality: they warm rooms by entering them, succeed most when they are most themselves, and tend to be loved at a scale they find embarrassing. Their gift is legitimacy — the child rides bare, nothing hidden — and their lives remind everyone around them that happiness is not a prize to be defended but a climate to be shared.',
    shadowDetail:
      'Its shadow is the clouded sun: joy postponed until conditions are perfect, success that curdles into egotism — the radiance demanding orbit rather than offering warmth — or the grey habit of expecting the cloud, which teaches the sky to comply.',
    guidance:
      'Work with the Sun by treating joy as a duty to your chart: celebrate loudly and early, before the cautious part of you files its objections. Share your wins on purpose — this card’s luck multiplies in public. And when clouds cross, remember they are weather, not identity: the sun in this card never actually goes out.',
  },
  {
    num: 20,
    roman: 'XX',
    name: 'Judgement',
    keywords: ['Reflection', 'Reckoning', 'Rebirth', 'Inner calling'],
    meaning:
      'Judgement is the trumpet that wakes the soul. It asks you to review your life honestly, forgive what needs forgiving, and answer the call toward your higher purpose.',
    shadow: 'Self-criticism, ignoring the call, stagnation',
    detail:
      'From the clouds the last angel sounds the trumpet; the flag rises on the cross of the four directions, and below, grey figures climb from open graves, arms raised — not the dead but the asleep, finally answering. In a birth chart Judgement marks the person with a permanent inner court of appeal: they re-evaluate constantly, forgive slowly but completely, and are prone to the great summing-up — the decision, at some point, to become who they were actually meant to be. Their lives often contain a clear “before and after” moment when they answered a call they could no longer ignore.',
    shadowDetail:
      'Its shadow is the trumpet heard and refused — the calling filed away as impractical, the verdict turned inward until it becomes self-criticism so harsh it paralyses. Its softer failure is nostalgia: living permanently in the review, summoned but never rising.',
    guidance:
      'Work with Judgement by holding an honest annual audit of your life: what did I do, what did I avoid, whom do I still need to forgive? Treat the call as data — when something will not stop summoning you, it is usually because it is yours. And deliver your verdicts with mercy: the card’s purpose is resurrection, not punishment.',
  },
  {
    num: 21,
    roman: 'XXI',
    name: 'The World',
    keywords: ['Completion', 'Accomplishment', 'Wholeness', 'Journey'],
    meaning:
      'The World is the final card — the dance of completion. A cycle has closed successfully, and you stand whole, integrated, ready for the next turn of the spiral. Celebration is earned.',
    shadow: 'Incompletion, shortcuts, loose ends',
    detail:
      'A figure dances inside a living laurel wreath, wrapped in the purple of attainment, batons crossed — the squared circle of the completed self, with the four fixed creatures watching from the corners: all of life’s elements present and accounted for. In a birth chart the World marks the completer: the person who finishes what they start, integrates their contradictions earlier than most, and collects whole chapters — languages mastered, degrees finished, businesses sold, circles closed. Their gift is wholeness; they make the people around them feel that life’s pieces can, in fact, all fit.',
    shadowDetail:
      'Its shadow is the almost-finished: the thesis never submitted, the reconciliation never spoken, the last mile refused — endless loose ends that keep the wreath unwoven. Its opposite is false completion: declaring victory at 80% and spending the rest of life defending the declaration.',
    guidance:
      'Work with the World by honouring completions ritually: finished things must be marked, or the psyche learns that endings do not count. Resist the shortcut on the final stretch; this card is precisely about the last mile. And when a cycle closes, celebrate before beginning again — the dance at the centre of the wreath is the point of the entire journey.',
  },
]

export function getCard(num: number): MajorArcana {
  const card = MAJOR_ARCANA.find((c) => c.num === num)
  if (!card) throw new Error(`Unknown Major Arcana number: ${num}`)
  return card
}

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

export interface BirthCards {
  /** Date sum reduced to 21 or less — the primary birth card */
  primary: number
  /** Digit sum of the primary card */
  secondary: number
  /** Digit sum of the secondary card (present only for triples like 19 → 10 → 1) */
  tertiary: number | null
  /** The full reduction chain shown to the user, e.g. [19, 10, 1] */
  chain: number[]
}

/**
 * Tarot birth card calculation (Tarot School method):
 * sum every digit of the birth date (MMDDYYYY) and reduce until <= 21.
 * The primary card's digits are then summed for the secondary card,
 * and once more for the tertiary card when the chain continues.
 */
export function computeBirthCards(dateStr: string): BirthCards | null {
  const digits = dateStr.replace(/\D/g, '')
  if (digits.length < 8) return null
  let sum = digits.split('').reduce((acc, d) => acc + Number(d), 0)
  while (sum > 21) sum = digitSum(sum)
  const primary = sum
  const secondary = digitSum(primary)
  const tertiary = secondary > 9 ? digitSum(secondary) : null

  const chain = [primary, secondary]
  if (tertiary !== null) chain.push(tertiary)

  return { primary, secondary, tertiary, chain }
}
```

### `app/src/lib/numerology.ts` (23.8 KB)

```ts
import { getCard, type MajorArcana } from './tarot'

export interface LifePathResult {
  /** Single digit, or a master number (11 / 22 / 33) */
  number: number
  /** True when the number is a master number and was not reduced further */
  isMaster: boolean
  /** The birth day reduced to a single digit (master numbers preserved) */
  birthdayNumber: number
  birthdayIsMaster: boolean
}

export interface NumberProfile {
  number: number
  title: string
  meaning: string
  strengths: string[]
  challenges: string[]
  card: MajorArcana | null
  /** Deeper layer: how this number tends to live out over a lifetime */
  detail: string
  /** Practical guidance for this number */
  advice: string
  /** The expected energy this number brings into any chart position it appears in */
  energy: string
  /** Master numbers only: why this number appears and what its higher voltage demands */
  masterNote?: string
}

export const NUMBER_PROFILES: Record<
  number,
  Omit<NumberProfile, 'number' | 'card' | 'energy' | 'masterNote'>
> = {
  1: {
    title: 'The Leader',
    meaning:
      'Ones are pioneers. Independent, driven and original, you are here to learn self-reliance and to lead by example. Your path is about initiating — ideas, projects, movements — and trusting your own vision even when no one else sees it yet.',
    strengths: ['Independence', 'Initiative', 'Originality', 'Courage'],
    challenges: ['Stubbornness', 'Impatience', 'Loneliness'],
    detail:
      'The 1 is the number of the seed — everything in existence began as a one that refused to stay a zero. In practice, ones build lives that look self-invented: they are rarely satisfied inheriting someone else’s map, and they tend to become the first person in their family or circle to do a thing. Their core lesson is initiation without isolation — learning that leading means going first, not going alone. Under pressure they default to “I’ll do it myself”, which is both their superpower and their slowest trap.',
    advice:
      'Choose projects where being first matters more than being safe. Practise finishing before starting — the 1’s growth edge is completion, not ignition. And when the loneliness of the front arrives, remember it is the tuition of leadership, not proof of failure.',
  },
  2: {
    title: 'The Diplomat',
    meaning:
      'Twos are the weavers of connection. Sensitive, intuitive and cooperative, your path is about partnership, patience and the quiet power of harmony. You succeed not by forcing outcomes but by reading the undercurrents and bringing people together.',
    strengths: ['Diplomacy', 'Intuition', 'Cooperation', 'Sensitivity'],
    challenges: ['Over-dependence', 'Conflict avoidance', 'Self-doubt'],
    detail:
      'The 2 is the number of the mirror — it learns what it is by reflecting. Twos are the emotional antennas of any group: they register tension before it is spoken and often carry the unspoken mood of a room without realising it. Their path runs through partnership of every kind — romantic, professional, creative — because it is in the space between self and other that they come into focus. Their great work is learning that harmony maintained by self-erasure is not harmony; it is a postponed conflict with interest.',
    advice:
      'Name your needs early and plainly — the people worth keeping will adjust. Treat sensitivity as an instrument that needs calibration, not a flaw needing apology. And practise one disagreement a month, spoken out loud: the 2’s peace is only real after it survives a little friction.',
  },
  3: {
    title: 'The Creator',
    meaning:
      'Threes are born to express. Joyful, artistic and socially magnetic, your path runs through creativity, communication and inspiration. Your gift is turning feeling into form — words, art, laughter — and reminding others that life is meant to be enjoyed.',
    strengths: ['Creativity', 'Expression', 'Optimism', 'Charm'],
    challenges: ['Scattered energy', 'Superficiality', 'Emotional highs and lows'],
    detail:
      'The 3 is the number of the first complete story — beginning, middle, end — and it lives through narrative: the joke told perfectly, the room lifted, the feeling given a shape others can hold. Threes learn by speaking; even their thinking is audible. Their charm is not decoration but function — people forgive them, follow them and fund them because they make the air lighter. Their shadow pattern is dispersion: a dozen brilliant openings, few closings, and a deep private fear that underneath the sparkle there is no “there” there.',
    advice:
      'Give one creative project a deadline and a witness — the 3 finishes best in company. Write or speak daily; expression is your maintenance, not your hobby. And when the low after the high arrives, do not panic: your tide is real but so is your shore.',
  },
  4: {
    title: 'The Builder',
    meaning:
      'Fours are the architects of the material world. Practical, disciplined and fiercely loyal, your path is about creating structures that last — careers, families, institutions. You turn dreams into foundations, and your word is your bond.',
    strengths: ['Discipline', 'Reliability', 'Practicality', 'Loyalty'],
    challenges: ['Rigidity', 'Workaholism', 'Resistance to change'],
    detail:
      'The 4 is the square — the first shape that holds weight. Fours build the floors everyone else dances on: the systems, the schedules, the savings, the structures that make civilised life possible. They are at their best with a tangible problem and a fair timeframe, and at their worst when asked to improvise on demand or trust what cannot be measured. Their loyalty is legendary and their stubbornness is loyalty’s invoice. The mature 4 learns that a structure exists to serve life, and never the reverse.',
    advice:
      'Build sabbaticals and softness into your structures on purpose — schedule them like meetings. Practise one unplanned hour a week; flexibility is a muscle the 4 must train before life forces it. And remember: the most admired building you will ever raise is a life whose inhabitants — including you — are happy inside it.',
  },
  5: {
    title: 'The Freedom Seeker',
    meaning:
      'Fives are the travellers of the number line. Adventurous, adaptable and endlessly curious, your path is about freedom, experience and versatility. Routine is your enemy; growth lives at the edge of your comfort zone, and change is your true home.',
    strengths: ['Adaptability', 'Curiosity', 'Versatility', 'Persuasion'],
    challenges: ['Restlessness', 'Indulgence', 'Lack of follow-through'],
    detail:
      'The 5 is the number at the exact centre of 1 to 9 — the pivot, the hinge, the perpetual motion of the system. Fives collect experiences the way others collect possessions: jobs, cities, skills, stories. Their adaptability is genuine magic — drop them anywhere and they land talking — but it comes with a tax: the unfinished, the uncommitted, the thousand doors opened. Their deepest lesson is that freedom is not the absence of anchors; it is the art of choosing anchors you can also lift.',
    advice:
      'Commit to one long game — five years minimum — and let it anchor your wandering. Build finishing into your freedom: every new thing started retires an old thing. And when restlessness whispers that the grass is elsewhere, check first whether you have watered this grass at all.',
  },
  6: {
    title: 'The Nurturer',
    meaning:
      'Sixes carry the heart of the community. Responsible, compassionate and beauty-loving, your path is about service, family and healing. You are the person others lean on — and your lesson is to give without losing yourself.',
    strengths: ['Compassion', 'Responsibility', 'Healing', 'Aesthetic sense'],
    challenges: ['Perfectionism', 'Self-sacrifice', 'Taking on too much'],
    detail:
      'The 6 is the first of the “responsible” numbers — the parent of the numerology family. Sixes are the ones who remember birthdays, mediate feuds, fix the broken thing no one else noticed and apologise for weather they did not make. Their love is active and practical: meals, repairs, presence. The shadow is equally practical — self-erasure in the name of duty, perfectionism aimed at the self while mercy is given freely to everyone else, and the slow resentment of the person who never asked for help.',
    advice:
      'Put your own oxygen mask on first, literally and on calendars — self-care is maintenance of the service, not betrayal of it. Let one person help you every week; receiving is the 6’s unfinished education. And replace perfect with done-for-love: the people you serve would choose your presence over your polish every single time.',
  },
  7: {
    title: 'The Seeker',
    meaning:
      'Sevens walk the inner road. Analytical, spiritual and deeply private, your path is about knowledge, reflection and the search for truth. You need solitude the way others need company, and your insight comes from asking the questions most people skip.',
    strengths: ['Analytical mind', 'Spirituality', 'Depth', 'Perception'],
    challenges: ['Isolation', 'Skepticism', 'Overthinking'],
    detail:
      'The 7 is the number of the quest — every myth’s seeker, the one who leaves the village to find what cannot be bought there. Sevens are the specialists of the numbers: they would rather master one true thing than sample ten. Their minds run on evidence and their souls run on mystery, and the tension between the two is their engine. They process privately, decide slowly and are almost never wrong twice. Their trap is the ivory tower: analysis that delays life, solitude that forgets it was chosen.',
    advice:
      'Set decision deadlines — the 7 who decides at 80% certainty beats the one waiting for 100%. Share your thinking out loud with one trusted person; your insight completes itself in dialogue. And leave the tower regularly: truth you cannot live among people is not yet finished truth.',
  },
  8: {
    title: 'The Powerhouse',
    meaning:
      'Eights are built for the material world. Ambitious, efficient and commanding, your path is about mastery of power — money, authority, influence — and learning to wield it with integrity. Big vision plus big follow-through defines you.',
    strengths: ['Ambition', 'Organisation', 'Resilience', 'Executive ability'],
    challenges: ['Control issues', 'Materialism', 'Work-life imbalance'],
    detail:
      'The 8 is the number of infinity stood upright — power flowing between the material and the spiritual, wealth and wisdom trading places. Eights are the natural executives: they see systems whole, move resources without flinching and recover from blows that would retire others. Their relationship with money and authority is the curriculum — not because these are evil, but because the 8 amplifies whatever it touches, including themselves. The mature 8 learns that the point of power is what it can carry for others.',
    advice:
      'Audit your power yearly: what did it build, whom did it serve, what did it cost? Delegate one thing you love controlling — empire builders die of grip, not failure. And invest in the invisible ledgers — health, friendship, meaning — where the 8’s arithmetic cannot follow but the heart keeps perfect books.',
  },
  9: {
    title: 'The Humanitarian',
    meaning:
      'Nines are the old souls. Compassionate, wise and universal in outlook, your path is about completion, forgiveness and giving back. You feel the world’s pain as your own, and your calling is to turn that empathy into service.',
    strengths: ['Compassion', 'Wisdom', 'Artistic depth', 'Tolerance'],
    challenges: ['Martyrdom', 'Letting go', 'Disappointment in others'],
    detail:
      'The 9 is the last single digit — it contains the memory of all the others, which is why nines often feel older than their years. They are the artists of the heart and the advocates of the underdog, wired for the big picture and allergic to petty tribalism. Their lives run in completion cycles: they are the ones who end things well — the era, the family feud, the career chapter — and who must learn the hardest numerological lesson: releasing what is finished, including their own expectations of people.',
    advice:
      'Practise releasing one thing per season — an object, a grudge, a plan — as a spiritual exercise. Protect your empathy with boundaries: you cannot pour from a cup you have handed away. And let others be flawed at their own pace; the 9’s disappointment is usually just grief that the world is not finished yet.',
  },
  11: {
    title: 'The Illuminator (Master Number)',
    meaning:
      'Eleven is intuition raised to an art form. Highly sensitive and spiritually charged, you are here to inspire and to channel insight that seems to come from beyond you. Your path demands you ground your visions, or the voltage will burn you out.',
    strengths: ['Intuition', 'Inspiration', 'Charisma', 'Spiritual insight'],
    challenges: ['Nervous tension', 'Overwhelm', 'Living up to your own light'],
    detail:
      'The 11 is the 2 with the volume of the infinite turned up — a master number carrying 1’s initiative and 2’s sensitivity simultaneously, which is exactly as demanding as it sounds. Elevens are the conduits: they receive insight as if by antenna, light up rooms without effort and inspire by existing. The cost is physiological as much as spiritual — this number runs hot. Many 11s spend years living as a plain 2 (cooperative, quiet, safe) until the pressure of the unlived voltage forces the channel open. Their destiny is not to be special but to be truthful at a frequency most people can only visit.',
    advice:
      'Ground daily — body work, nature, routine — because the 11 without grounding is a struck bell with no frame. Treat sensitivity as the instrument it is: tuned, protected, rested. And stop waiting to feel ready for your own light; the dimming of an 11 helps no one, least of all you.',
  },
  22: {
    title: 'The Master Builder (Master Number)',
    meaning:
      'Twenty-two combines the vision of 11 with the practicality of 4 — the most powerful of all numbers. You are here to build things that outlast you: movements, institutions, legacies. Your challenge is believing your own blueprint is worth building.',
    strengths: ['Vision', 'Practical genius', 'Manifestation', 'Leadership'],
    challenges: ['Grandiosity', 'Pressure', 'Fear of your own scale'],
    detail:
      'The 22 is the architect of the impossible — the dreamer who can also pour concrete. Where 11 receives vision, 22 is expected to give it foundations, walls and a working door. Many 22s spend long stretches living as a 4 (safe, practical, small) because the full scale of the number frightens even them. Their lives tend to contain at least one enormous build — a company, a body of work, a community — whose true size they only admit afterwards. The number’s curse and gift are the same: it cannot sincerely think small.',
    advice:
      'Start the big thing before you feel big enough — the 22’s competence arrives through the building, not before it. Break the cathedral into weekly bricks; your genius is patience applied to scale. And beware the seduction of planning forever: your number is graded on what stands, not on what was sketched.',
  },
  33: {
    title: 'The Master Teacher (Master Number)',
    meaning:
      'Thirty-three is unconditional love made active. Rarer than rare, this path is about selfless service, healing and raising the consciousness of those around you — often by simply embodying compassion so fully that others remember their own.',
    strengths: ['Selfless love', 'Healing', 'Teaching by example', 'Devotion'],
    challenges: ['Self-neglect', 'Emotional overload', 'Setting boundaries'],
    detail:
      'The 33 is the 6 raised to the master octave — nurturing without limit, healing without invoice. Where other numbers teach through words or works, the 33 teaches through being: their presence lowers the temperature of a crisis and raises the honesty of a room. The danger is equally total: a number built on selfless service can quietly delete the self. The 33 who never learns boundaries becomes the martyr whose light is spent on everyone except its source.',
    advice:
      'Your boundaries are the walls of the temple — without them there is no temple, only weather. Serve from overflow, never from debt; rest is part of the service. And remember that your most powerful teaching is a life that visibly includes you in its own circle of care.',
  },
}

/** Tarot correspondence for a life path / birthday number (Rider–Waite majors) */
const LIFE_PATH_CARD: Record<number, number> = {
  1: 1, // The Magician
  2: 2, // The High Priestess
  3: 3, // The Empress
  4: 4, // The Emperor
  5: 5, // The Hierophant
  6: 6, // The Lovers
  7: 7, // The Chariot
  8: 8, // Strength
  9: 9, // The Hermit
  11: 11, // Justice
  22: 0, // The Fool
  33: 21, // The World
}

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

function reduceToSingle(n: number, keepMasters = true): { value: number; isMaster: boolean } {
  let value = n
  while (value > 9) {
    if (keepMasters && (value === 11 || value === 22 || value === 33)) {
      return { value, isMaster: true }
    }
    value = digitSum(value)
  }
  return { value, isMaster: false }
}

/**
 * Life Path number: sum every digit of the full birth date,
 * reduce to a single digit while preserving master numbers 11, 22, 33.
 */
export function computeLifePath(dateStr: string): LifePathResult | null {
  const digits = dateStr.replace(/\D/g, '')
  if (digits.length < 8) return null

  const total = digits.split('').reduce((acc, d) => acc + Number(d), 0)
  const lp = reduceToSingle(total)

  const day = Number(digits.replace(/^(\d{4})(\d{2})(\d{2}).*$/, '$3'))
  const bd = reduceToSingle(day || total)

  return {
    number: lp.value,
    isMaster: lp.isMaster,
    birthdayNumber: bd.value,
    birthdayIsMaster: bd.isMaster,
  }
}

export function getNumberProfile(n: number): NumberProfile {
  const base = NUMBER_PROFILES[n] ?? NUMBER_PROFILES[reduceToSingle(n, false).value]
  const cardNum = LIFE_PATH_CARD[n] ?? null
  return {
    number: n,
    ...base,
    card: cardNum !== null ? getCard(cardNum) : null,
    energy: NUMBER_ENERGIES[n] ?? NUMBER_ENERGIES[reduceToSingle(n, false).value] ?? '',
    masterNote: MASTER_NOTES[n],
  }
}

/** Friendly string for the reduction, e.g. "3 + 4 + 1 + 9 + 9 + 5 = 31 → 4" */
export function lifePathWorkings(dateStr: string): string {
  const digits = dateStr.replace(/\D/g, '')
  if (digits.length < 8) return ''
  const parts = digits.split('').join(' + ')
  const total = digits.split('').reduce((acc, d) => acc + Number(d), 0)
  const lp = reduceToSingle(total)
  return `${parts} = ${total} → ${lp.value}`
}

/**
 * The expected energy each number carries into ANY chart position it lands in —
 * life path, expression, soul urge, personality, birthday, attitude, maturity or
 * balance. This is the “what it brings” layer that applies everywhere the number
 * appears, on top of the position-specific meanings.
 */
export const NUMBER_ENERGIES: Record<number, string> = {
  1: 'The 1 brings the energy of beginnings. Wherever it lands, that area of life demands initiative, self-reliance and the courage to go first. It adds drive, originality and an allergy to coasting — and it always asks the same question: who is leading here?',
  2: 'The 2 carries the energy of union. Wherever it appears, life routes that area through partnership, patience and emotional intelligence. It senses undercurrents before they surface, softens conflict, and quietly asks: can two be stronger than one here?',
  3: 'The 3 radiates the energy of expression. Wherever it lands, that area of life wants to be spoken, painted, performed or celebrated. It brings charm, creativity and emotional weather — and it asks: why keep this beauty inside?',
  4: 'The 4 grounds everything it touches with the energy of structure. Wherever it appears, that area of life demands foundations, schedules and kept promises. It brings discipline and staying power — and asks: what are we building that will still stand in ten years?',
  5: 'The 5 brings the energy of movement. Wherever it lands, that area of life resists cages and rewards range — travel, variety, reinvention. It brings magnetism and appetite for experience — and asks: when did you last let this part of your life breathe?',
  6: 'The 6 carries the energy of care. Wherever it appears, that area of life turns toward responsibility, beauty and the wellbeing of others. It brings devotion and an eye for what is broken — and asks: who is looking after the caretaker?',
  7: 'The 7 holds the energy of depth. Wherever it lands, that area of life wants to be understood, not just experienced. It brings analysis, intuition and a taste for solitude — and asks: what is underneath this?',
  8: 'The 8 carries the energy of power and manifestation. Wherever it appears, that area of life operates at scale — money, authority, ambition, consequence. It brings executive force — and asks: what are you doing with the leverage you have?',
  9: 'The 9 brings the energy of completion and compassion. Wherever it lands, that area of life is about endings done well, forgiveness, and the bigger picture. It brings wisdom and an old-soul patience — and asks: what is ready to be released here?',
  11: 'The 11 amplifies the 2’s energy to master voltage: intuition, inspiration and spiritual insight wherever it lands. It brings charisma and a signal-like sensitivity to the unseen — and asks: are you grounding the antenna, or just absorbing static?',
  22: 'The 22 amplifies the 4’s energy to master voltage: the ability to turn grand vision into standing reality. Wherever it lands, that area of life thinks in legacy-sized units — and asks: is this big enough to be worth your one build?',
  33: 'The 33 amplifies the 6’s energy to master voltage: unconditional love in active service. Wherever it lands, that area of life heals simply by being near it — and asks: does your care include its source?',
}

/**
 * Why master numbers appear at all: when the digits of a date or name refuse to
 * reduce past 11, 22 or 33, the math itself flags a higher voltage that is kept
 * whole on purpose. These notes explain what each master number is and why it
 * shows up in a chart.
 */
export const MASTER_NOTES: Record<number, string> = {
  11: 'Master numbers appear when the arithmetic of your chart refuses to finish reducing — the digits land on 11, 22 or 33 and tradition says: stop, this one is different. The 11 is the 2’s sensitivity raised to an octave of inspiration. It shows up in charts that are wired to channel insight, not merely process it — which is why it brings nervous tension and overwhelm along with the charisma. It stays unreduced because its lessons cannot be learned at the gentler 2-frequency: living as an antenna requires grounding, rest and the nerve to stop dimming your own light.',
  22: 'The 22 is the rarest of the working numbers: the 11’s vision fused with the 4’s hands. It appears when a chart must learn to build at the scale of the impossible — movements, institutions, legacies. Many 22s spend years living as a safe, practical 4 because the full voltage frightens even them; the number keeps reappearing until they attempt the cathedral. It stays unreduced because its test is scale itself: this number is graded on what stands, not on what was sketched.',
  33: 'The 33 is the rarest master of all — the 6’s nurturing raised to pure, active devotion. It appears in charts oriented toward healing, teaching and selfless service, often without the person ever choosing it: rooms calm down around a 33. It stays unreduced because its lesson is the hardest in numerology: compassion without self-erasure. The 33’s entire curriculum is boundaries — learning that a light which never rests eventually helps no one.',
}
```

### `app/src/lib/nameNumerology.ts` (14.3 KB)

```ts
/** Pythagorean letter chart: A=1 … I=9, then the alphabet wraps and repeats */
export const LETTER_VALUES: Record<string, number> = {}
;('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('').forEach((ch, i) => {
  LETTER_VALUES[ch] = (i % 9) + 1
})

export const PYTHAGOREAN_ROWS: { number: number; letters: string }[] = [
  { number: 1, letters: 'A J S' },
  { number: 2, letters: 'B K T' },
  { number: 3, letters: 'C L U' },
  { number: 4, letters: 'D M V' },
  { number: 5, letters: 'E N W' },
  { number: 6, letters: 'F O X' },
  { number: 7, letters: 'G P Y' },
  { number: 8, letters: 'H Q Z' },
  { number: 9, letters: 'I R' },
]

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U'])

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

function reduce(n: number, keepMasters = true): number {
  let v = n
  while (v > 9) {
    if (keepMasters && (v === 11 || v === 22 || v === 33)) return v
    v = digitSum(v)
  }
  return v
}

export interface NamePartWorking {
  name: string
  letters: { ch: string; value: number }[]
  total: number
  reduced: number
}

export interface NameNumbers {
  /** Destiny / Expression number — the main name number */
  expression: number
  expressionIsMaster: boolean
  /** Soul Urge / Heart's Desire — vowels only */
  soulUrge: number
  soulUrgeIsMaster: boolean
  /** Personality number — consonants only */
  personality: number
  personalityIsMaster: boolean
  /** Per-name-part workings, e.g. "John = 1+6+8+5 = 20 → 2" */
  parts: NamePartWorking[]
  /** The name as entered, cleaned */
  cleanedName: string
}

function workingFor(name: string): NamePartWorking {
  const letters = name
    .split('')
    .filter((ch) => /[A-Z]/.test(ch))
    .map((ch) => ({ ch, value: LETTER_VALUES[ch] }))
  const total = letters.reduce((acc, l) => acc + l.value, 0)
  return { name, letters, total, reduced: reduce(total) }
}

function label(n: number, isMaster: boolean): string {
  return isMaster ? `${n} ✦` : String(n)
}

/** "JOHN = 1 + 6 + 8 + 5 = 20 → 2" */
export function formatPartWorking(p: NamePartWorking): string {
  const expr = p.letters.map((l) => l.value).join(' + ')
  return `${p.name} = ${expr} = ${p.total} → ${label(p.reduced, p.reduced > 9)}`
}

/**
 * Pythagorean name numerology, "sum each name by itself" method:
 * every part of the name (first, middle, last …) is summed and reduced
 * on its own, then the reduced parts are added together and reduced once more.
 * Master numbers 11 / 22 / 33 are preserved at every step.
 */
export function computeNameNumbers(fullName: string): NameNumbers | null {
  const cleanedName = fullName.trim().replace(/\s+/g, ' ')
  const parts = cleanedName
    .toUpperCase()
    .split(' ')
    .filter((p) => p.length > 0)

  if (parts.length === 0) return null

  const workings = parts.map(workingFor)
  const expressionRaw = workings.reduce((acc, p) => acc + p.reduced, 0)
  const expression = reduce(expressionRaw)

  const allLetters = cleanedName.toUpperCase().split('').filter((ch) => /[A-Z]/.test(ch))
  const vowelSum = allLetters.filter((ch) => VOWELS.has(ch)).reduce((acc, ch) => acc + LETTER_VALUES[ch], 0)
  const consonantSum = allLetters
    .filter((ch) => !VOWELS.has(ch))
    .reduce((acc, ch) => acc + LETTER_VALUES[ch], 0)

  const soulUrge = reduce(vowelSum)
  const personality = reduce(consonantSum)

  return {
    expression,
    expressionIsMaster: expression > 9,
    soulUrge,
    soulUrgeIsMaster: soulUrge > 9,
    personality,
    personalityIsMaster: personality > 9,
    parts: workings,
    cleanedName,
  }
}

/** "John (2) + Smith (6) = 8" */
export function expressionWorkings(parts: NamePartWorking[]): string {
  const sums = parts.map((p) => `${p.name} (${label(p.reduced, p.reduced > 9)})`)
  const total = parts.reduce((acc, p) => acc + p.reduced, 0)
  return `${sums.join(' + ')} = ${total}`
}

/** Deep-dive paragraphs for the Soul Urge numbers (what the vowels privately want) */
export const SOUL_URGE_DETAILS: Record<number, string> = {
  1: 'Beneath every plan sits a private wish to be the one who went first. Your soul is nourished by self-direction — the moment you must wait for permission, some part of you dims. This urge shows in what you daydream about: the venture, the title, the blank page. Fed well, it makes you brave for everyone around you; starved, it turns into a chronic irritation with anyone who leads you.',
  2: 'Your heart’s real appetite is for the felt sense of “us” — the partnership where nobody performs. You long to merge without dissolving, to be the quiet half of something that works. Conflict pains you more than it should, not from weakness but because dissonance is physically loud to your system. This urge is why you remember everyone’s preferences and why you must learn to be as loyal to yourself as you are to the pair.',
  3: 'Your soul wants to make things and say things — joy is not a luxury for you but a nutrient. When you go too long without creating, the energy does not disappear; it leaks out as chatter, impulse buys or restlessness. Your urge points at what heals you: the stage, the page, the kitchen, the joke that lands. Protect expression time like medication, because for you it is.',
  4: 'What your heart truly wants is solidity — the life where promises hold and the floor does not move. You crave the satisfaction of the finished thing: the degree framed, the house paid, the system running. Chaos around you is felt as a personal debt you must somehow settle. Your urge is the builder’s quiet pride; its shadow is the inability to rest inside a life you have already built.',
  5: 'Your soul signed up for range. It wants motion, new faces, unvisited streets — the feeling of options stretching in every direction. Confinement does not merely bore you; it shrinks you. This urge explains your appetite for travel and your low-grade panic at endless routine. Fed consciously — one adventure always on the calendar — it becomes wisdom about the world instead of escape from yourself.',
  6: 'Your heart’s deepest wish is to matter to the circle — to be the one whose absence is felt. You want to protect, to host, to repair, and you are quietly wounded when your care goes unnoticed. Beauty moves you because harmony is your native language. The growth edge of this urge is letting yourself receive the same devotion you so naturally pour out.',
  7: 'Your soul wants altitude: distance from the noise, time with the question, the library, the mountain, the unanswered thing. Small talk costs you real energy because your heart is always halfway into a deeper room. You long to be understood without having to explain — which is why you light up when someone finally does. This urge is the scholar’s and the mystic’s both.',
  8: 'Beneath the surface you want weight in the world — influence, accomplishment, the respect that arrives before you speak. Your soul is satisfied by impact: results you can count, institutions you shaped, problems you made smaller. Money matters to you less as comfort than as scoreboard and tool. The mature form of this urge is power that lifts others; the raw form is power collected to fill a private doubt.',
  9: 'Your heart’s largest wish is to be part of something that outlasts you — a cause, a family healed, a beauty released into the world. You are moved by the underdog, the farewell, the last chapter, because completion is your native theme. This urge makes you generous to a fault; its lesson is that you too are included in the humanity you keep saving.',
}

/** Deep-dive paragraphs for the Personality numbers (what the consonants project) */
export const PERSONALITY_DETAILS: Record<number, string> = {
  1: 'The armour you wear in public is competence. People meet you and assume you know where you are going — which is often news to you. This projection opens doors: you are handed leadership before asking. Its cost is that help rarely arrives, since everyone assumes you do not need it. The gap between how formidable you seem and how human you feel is your private geography.',
  2: 'What the world meets first in you is softness — and it relaxes. You disarm rooms without strategy, which is precisely why your strategy is rarely suspected. People tell you things within minutes; you are everyone’s first phone call and last apology. The unnoticed cost is that your own storms get minimised by everyone, including you, because you wear calm so convincingly.',
  3: 'Your public self is sparkle: humour, presence, momentum. You are invited because you make events events. Beneath it sits a serious person few schedule time for — the one with the long attention span and the real sadnesses. The 3 personality’s task is to let selected people past the performance, because being entertaining and being known are not the same thing.',
  4: 'You read, on first meeting, as the reliable one — and life quickly agrees. You are handed the keys, the budget, the problem no one else will own. This projection is earned, but it hardens: people stop asking how you are because the answer is presumed “managing”. Your work is to let the trustworthy exterior admit, occasionally, that it too needs carrying.',
  5: 'You arrive like a breeze with a passport — people expect stories, and you deliver. Your social face is motion: new plans, new places, new versions of the conversation. The stillness underneath is visible only to the few who catch you between adventures. The 5 personality must beware being loved as entertainment and neglected as a person.',
  6: 'You present as the safe harbour — the one with the steady voice and the practical help. People build nests near you. The shadow of this warm projection is obligation: because you seem so capable of carrying others, you are handed more weight than your share, early and often. Learning to let the harbour close for storms is your ongoing lesson.',
  7: 'First impressions of you are quiet depth: people sense there is more than was shown, and they are right. You are admired at a slight distance — intriguing rather than approachable. This keeps your privacy intact but can starve you of the easy belonging others collect casually. Your task is to offer one unguarded sentence first; the world rarely initiates with a 7.',
  8: 'You enter a room and the room adjusts — posture, volume, expectations. Authority projects from you before you have said a word, which means you are either promoted or resented quickly, sometimes both. Beneath the polish is a person who wonders if they are loved or merely impressive. Letting a few people see the unarmoured version is the 8’s real wealth.',
  9: 'You give off the atmosphere of someone who has seen things — people lean in and lower their voices. Strangers confide in you; friends forgive you almost anything. This old-soul projection brings trust and, occasionally, projection: others unload their unfinished grief into your calm. Your lesson is to sort what is yours from what was merely handed to you.',
}

/** Deep-dive paragraphs for the Destiny / Expression numbers (the name as a whole) */
export const DESTINY_DETAILS: Record<number, string> = {
  1: 'A destiny of 1 means your name itself carries the signature of initiation. Across a lifetime you will be pushed toward firsts — first attempts, first editions, first into the room. The work is to let originality mature into leadership without hardening into loneliness. Every time you refuse the leader’s chair because it feels presumptuous, the number nudges harder.',
  2: 'A destiny of 2 gives you a name built for partnership. Your talents ripen in collaboration: the co-authored project, the duo, the marriage of true competence and true tact. The work is harmony with a spine — learning to keep the peace without renting out your own position to keep it. Your name opens doors best when a hand you trust is on the other side of them.',
  3: 'A destiny of 3 means your name is a broadcast tower. Expression, charm and creative output are the channels through which your life finds its shape — when you go quiet for too long, things stall in inexplicable ways. The work is volume control: the same gift that fills a room can flood it. Learn to aim your joy instead of spraying it, and this number becomes pure magnetism.',
  4: 'A destiny of 4 writes a life of construction. Your name adds the builder’s signature to whatever you touch: systems hold, projects ship, promises are kept. The risk is a life measured only in completed structures — the 4 who never stops pouring concrete forgets why the building was raised. Schedule joy with the same seriousness you schedule work; it is load-bearing.',
  5: 'A destiny of 5 makes your name a passport. Change, variety and movement are not distractions from your path — they are the path. You will likely reinvent yourself more than once, and each version is legitimate. The work is depth: freedom is only real when you can also stay. Master the art of committing to a moving vehicle and the 5 becomes unstoppable.',
  6: 'A destiny of 6 places the caretaker’s oath inside your name. Home, family, community — someone has to hold these, and your name keeps nominating you. The shadow is self-erasure in a good cause: the 6 who serves everyone’s table but never sits at their own. The work is boundaries with love: care that costs you everything eventually helps no one.',
  7: 'A destiny of 7 marks your name with the researcher’s seal. Analysis, intuition and the sacred hunger to understand pull you toward the library, the laboratory, the monastery — literal or figurative. Others may find you hard to read; you find others hard to tolerate when they are shallow. The work is translation: your insights only count once someone else can hold them.',
  8: 'A destiny of 8 inscribes achievement directly into your name. Material success, executive power and the ability to make large things move are written here — so are the tests that come with them. The 8’s shadow is confusing worth with net worth, or power with domination. The work is ethics at scale: money and influence answer to whoever wields them; make sure that whoever is someone you respect.',
  9: 'A destiny of 9 crowns your name with the humanitarian’s brief. Your talents point outward — toward art that heals, work that serves, a life whose ledger ends in the black for others. The shadow is the saviour’s fatigue: giving so globally that no one checks on you, including you. The work is letting yourself be one of the people you are trying to save.',
}
```

### `app/src/lib/extendedNumerology.ts` (22.1 KB)

```ts
import { getCard, type MajorArcana } from './tarot'
import { LETTER_VALUES } from './nameNumerology'

/* ── Helpers ─────────────────────────────────────────────────────────── */

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

function reduceMasters(n: number): number {
  let v = n
  while (v > 9) {
    if (v === 11 || v === 22 || v === 33) return v
    v = digitSum(v)
  }
  return v
}

function reduceTo22(n: number): number {
  let v = n
  while (v > 22) v = digitSum(v)
  return v === 22 ? 0 : v // 22 in this system is The Fool (0)
}

function dateParts(date: string): { month: number; day: number; year: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  if (!m) return null
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) }
}

/* ── Karmic Debt ─────────────────────────────────────────────────────── */

export const KARMIC_DEBTS: Record<
  number,
  { pair: string; debtTitle: string; debt: string; energy: string; resolution: string }
> = {
  13: {
    pair: '13/4',
    debtTitle: 'The Debt of Rigidity',
    debt:
      'Somewhere in the cycle before this one, structure hardened into a prison: work left unfinished, stubbornness defended long past its usefulness, foundations poured to control life rather than serve it. The debt returns as a life where things feel heavier than they should — where every foundation must be earned twice, where laziness and shortcuts collapse visibly, and where the temptation is to rebuild the same wall that just fell.',
    energy:
      'How it shows up: a repeating pattern of collapse-and-rebuild around work, health or security. Projects stall at ninety percent; shortcuts boomerang; the body asks for order (sleep, routine, repair) and complains loudly when ignored. The 13/4 person often feels older than their years in practical matters, as if they were born already owing a day’s honest work — because, symbolically, they were.',
    resolution:
      'Paid through Death’s transformation: complete what you start — even the small things, because the debt is trained off in repetition. Let dead structures dissolve without salvaging the rubble, and build foundations that serve life rather than cage it. The Emperor (4) emerges only after the old walls come down; the debt is cleared when discipline becomes devotion instead of defence.',
  },
  14: {
    pair: '14/5',
    debtTitle: 'The Debt of Excess',
    debt:
      'In a previous cycle, freedom was abused: the appetite for experience outran the wisdom to steer it. Excess, addiction, or rare gifts misused for pleasure or manipulation left a residue. The debt returns as a life where the hunger for “more” arrives stronger than the brakes — where the very things that liberate others (travel, change, pleasure, charisma) can quietly become traps.',
    energy:
      'How it shows up: cycles of overindulgence followed by consequence — the 3 AM certainty that this was too much, the pattern that keeps returning in new costumes (spending, food, work, excitement, people). There is often real magnetism here, because the same current that binds also attracts; the 14/5 life swings between feast and recalibration until moderation stops feeling like a punishment.',
    resolution:
      'Paid through Temperance’s alchemy: moderation without joylessness. The opposite forces are not enemies — pour them together with patience and freedom becomes a tool instead of a trap. Learn to want one thing fully rather than everything restlessly; the debt clears each time desire is steered instead of obeyed.',
  },
  16: {
    pair: '16/7',
    debtTitle: 'The Debt of False Heights',
    debt:
      'In the cycle before this one, a tower of ego was built on insight hoarded rather than lived — spiritual pride, a self-image higher than the truth it stood on. The debt returns as a life where false structures fall, sometimes spectacularly: reputations, relationships, belief systems or identities constructed for appearance are periodically struck by lightning, especially whenever pride rebuilds faster than honesty.',
    energy:
      'How it shows up: sudden, almost theatrical collapses that arrive right after things looked most secure — the job lost the week of the celebration, the revelation that rewrites the identity. There is usually a strong spiritual or analytical pull (the 7) underneath, but with a wound around trusting it: the 16/7 person may swing between grandiose certainty and deep doubt. Intuition is loud here; ignoring it is what brings the thunder.',
    resolution:
      'Paid through the Tower’s fall and the Chariot’s discipline: let the false structure break all the way — do not rush to rebuild the self-image. Ground spiritual insight in daily, unglamorous practice, and rebuild on truth rather than appearance. The Chariot (7) appears when the rubble is surveyed honestly and driven through with will; the debt clears when the lesson is lived, not just understood.',
  },
  19: {
    pair: '19/1',
    debtTitle: 'The Debt of Misused Power',
    debt:
      'In a previous cycle, personal power was turned to domination — leadership that served the self at others’ expense, love withdrawn to control, gifts used as leverage. The debt returns as a life where the self-made path is the only one offered: help arrives late or with strings, and the lesson repeats until power is understood as responsibility rather than possession.',
    energy:
      'How it shows up: a lifelong pattern of having to do it alone — support that evaporates at the crucial moment, teams that dissolve, the strange loneliness of the capable. The 19/1 person is often genuinely strong and self-sufficient; the debt hides in the resentment that can grow underneath the competence, and in the temptation to rule whatever room will not support them.',
    resolution:
      'Paid through the Sun’s generosity: lead by radiating rather than commanding. Power wielded in service of something larger than the self is what finally settles the account — mentoring, protecting, sharing credit, forgiving the helpers who never arrived. The Magician (1) returns when strength is offered instead of hoarded; the debt clears when “I did it alone” becomes “look what we built.”',
  },
}

export const KARMIC_KEYS = [13, 14, 16, 19] as const

export interface KarmicInstance {
  number: 13 | 14 | 16 | 19
  /** Where it appeared, e.g. "Birth day", "Life Path", "Expression" */
  source: string
  workings: string
}

/** Every value in the reduction chain, so we can spot karmic numbers mid-way */
function chainOf(total: number): number[] {
  const chain: number[] = [total]
  let v = total
  while (v > 9) {
    if (v === 11 || v === 22 || v === 33) break
    v = digitSum(v)
    chain.push(v)
  }
  return chain
}

export interface KarmicScanResult {
  instances: KarmicInstance[]
  /** true when the scan ran (a name may be absent) */
  scannedExpression: boolean
}

/**
 * Scan the birth day, the life path reduction chain, and the expression
 * number chains for the karmic debt numbers 13, 14, 16, 19.
 * Date parts run only when a valid date is given; name chains only when a
 * name is given — so it works for date-only, name-only, or full readings.
 */
export function scanKarmicDebts(date: string, name?: string): KarmicScanResult | null {
  const parts = dateParts(date)
  const hasName = !!name && name.trim().length > 0
  if (!parts && !hasName) return null

  const instances: KarmicInstance[] = []
  const seen = new Set<string>()

  const push = (n: number, source: string, workings: string) => {
    const key = `${source}:${n}`
    if ((KARMIC_KEYS as readonly number[]).includes(n) && !seen.has(key)) {
      seen.add(key)
      instances.push({ number: n as KarmicInstance['number'], source, workings })
    }
  }

  // 1. Birth day itself — e.g. born on the 16th
  if (parts) {
    push(parts.day, 'Birth day', `Day ${parts.day} → ${KARMIC_DEBTS[parts.day]?.pair ?? parts.day}`)
  }

  // 2. Life path chain
  if (parts) {
    const digits = date.replace(/\D/g, '')
    const total = digits.split('').reduce((acc, d) => acc + Number(d), 0)
    const lpChain = chainOf(total)
    for (const n of lpChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Life Path', `Date sum ${total} reduces through ${lpChain.join(' → ')}`)
        break
      }
    }
  }

  // 3. Expression chains (raw letter total + per-name-reduced total)
  let scannedExpression = false
  if (hasName) {
    scannedExpression = true
    const cleanName = name!.trim()
    const letters = cleanName
      .toUpperCase()
      .split('')
      .filter((ch) => /[A-Z]/.test(ch))
    const rawTotal = letters.reduce((acc, ch) => acc + LETTER_VALUES[ch], 0)
    const rawChain = chainOf(rawTotal)
    for (const n of rawChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Expression (raw)', `Letters total ${rawTotal} reduces through ${rawChain.join(' → ')}`)
        break
      }
    }

    const partReducedTotal = name
      .trim()
      .toUpperCase()
      .split(/\s+/)
      .filter(Boolean)
      .reduce((acc, part) => {
        const t = part
          .split('')
          .filter((ch) => /[A-Z]/.test(ch))
          .reduce((a, ch) => a + LETTER_VALUES[ch], 0)
        return acc + reduceMasters(t)
      }, 0)
    const partChain = chainOf(partReducedTotal)
    for (const n of partChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Expression', `Name parts reduce to ${partReducedTotal}, then ${partChain.join(' → ')}`)
        break
      }
    }
  }

  return { instances, scannedExpression }
}

/* ── Attitude Number (month + day) ───────────────────────────────────── */

const ATTITUDE_LINES: Record<number, string> = {
  1: 'You meet new situations head-on — instinct says act first, refine later.',
  2: 'You instinctively read the room before moving — harmony first, always.',
  3: 'Your first response is warmth and expression — you disarm with charm.',
  4: 'You assess the structure of things first — safety through solidity.',
  5: 'New situations excite rather than scare you — instinct says explore.',
  6: 'You instinctively take care of the room — responsibility arrives before invitation.',
  7: 'You observe before engaging — instinct says understand, then act.',
  8: 'You instinctively size up the power dynamics — competence is your shield.',
  9: 'You respond with an old-soul patience — instinct says there is always a bigger picture.',
}

export interface AttitudeResult {
  number: number
  card: MajorArcana
  line: string
  workings: string
}

export function computeAttitude(date: string): AttitudeResult | null {
  const parts = dateParts(date)
  if (!parts) return null
  const total = parts.month + parts.day
  const n = reduceMasters(total)
  const base = n > 9 ? digitSum(n) : n
  return {
    number: n,
    card: getCard(n <= 21 ? n : base),
    line: ATTITUDE_LINES[base],
    workings: `${parts.month} + ${parts.day} = ${total} → ${n}`,
  }
}

/* ── Year Card (month + day + current year) ──────────────────────────── */

export interface YearCardResult {
  year: number
  number: number
  card: MajorArcana
  workings: string
}

export function computeYearCard(date: string, year: number): YearCardResult | null {
  const parts = dateParts(date)
  if (!parts) return null
  const total = parts.month + parts.day + year
  const n = reduceTo22(total)
  return {
    year,
    number: n,
    card: getCard(n),
    workings: `${parts.month} + ${parts.day} + ${year} = ${total} → ${n === 0 ? '22 → 0' : n}`,
  }
}

/* ── Maturity Number (Life Path + Expression) ────────────────────────── */

export interface MaturityResult {
  number: number
  isMaster: boolean
  workings: string
}

export function computeMaturity(lifePath: number, expression: number): MaturityResult {
  const total = lifePath + expression
  const n = reduceMasters(total)
  return { number: n, isMaster: n > 9, workings: `${lifePath} + ${expression} = ${total} → ${n}` }
}

/* ── Balance Number (first letters of each name) ─────────────────────── */

const BALANCE_LINES: Record<number, string> = {
  1: 'You restore yourself by acting — taking charge resets your equilibrium.',
  2: 'You restore yourself through connection — talk it out, lean on someone.',
  3: 'You restore yourself through expression — create, laugh, say it aloud.',
  4: 'You restore yourself through order — organise, plan, put things in place.',
  5: 'You restore yourself through change — movement, travel, a new scene.',
  6: 'You restore yourself through care — tending others (and yourself) heals you.',
  7: 'You restore yourself through solitude — quiet, study, inner silence.',
  8: 'You restore yourself through achievement — a concrete win steadies you.',
  9: 'You restore yourself through perspective — stepping back, giving, letting go.',
}

export interface BalanceResult {
  number: number
  isMaster: boolean
  workings: string
  letters: string[]
  line: string
}

export function computeBalance(name: string): BalanceResult | null {
  const parts = name
    .trim()
    .toUpperCase()
    .split(/\s+/)
    .filter((p) => /[A-Z]/.test(p))
  if (parts.length === 0) return null

  const firsts = parts.map((p) => p.match(/[A-Z]/)![0])
  const values = firsts.map((ch) => LETTER_VALUES[ch])
  const total = values.reduce((a, b) => a + b, 0)
  const n = reduceMasters(total)
  const base = n > 9 ? digitSum(n) : n
  const workings = `${firsts.map((ch, i) => `${ch}=${values[i]}`).join(' + ')} = ${total} → ${n}`
  return { number: n, isMaster: n > 9, workings, letters: firsts, line: BALANCE_LINES[base] }
}

/* ── Birth pair "Path" names (Tarot.com style) ───────────────────────── */

export const PAIR_PATHS: Record<string, string> = {
  '10-1': 'The Path of Power',
  '11-2': 'The Path of Knowledge',
  '12-3': 'The Path of Surrender',
  '13-4': 'The Path of Protection',
  '14-5': 'The Path of Tradition',
  '15-6': 'The Path of Freedom',
  '16-7': 'The Path of Change',
  '17-8': 'The Path of Vulnerability',
  '18-9': 'The Path of Hidden Truth',
  '19-10': 'The Path of Cycles',
  '20-2': 'The Path of Notoriety',
  '21-3': 'The Path of Connection',
}

export function pairPath(primary: number, secondary: number): string | null {
  return PAIR_PATHS[`${primary}-${secondary}`] ?? null
}

/**
 * What each birth card pair means as a pair — the shared current (essence) and
 * how the two cards cooperate in one lifetime (together). Keys match PAIR_PATHS.
 */
export const PAIR_DETAILS: Record<string, { essence: string; together: string }> = {
  '10-1': {
    essence: 'Mastery over change itself — the wheel and the hand that steers it.',
    together:
      'The Wheel of Fortune (10) supplies the turning — luck, cycles, doors that open on their own timing. The Magician (1) supplies the hand — skill, will, the nerve to act when the door opens. People on this path are granted fortune but are not permitted to coast on it: their lesson is that luck is a skill. They tend to live in visible cycles of rise and reset, and they thrive when they treat every turn of the wheel as an opening to shape rather than weather.',
  },
  '11-2': {
    essence: 'Truth held with grace — clear judgement married to deep knowing.',
    together:
      'Justice (11) brings clarity: the scales, the honest verdict, the law of consequence. The High Priestess (2) brings the unsaid: intuition, hidden knowledge, the truth that lives under the truth. Together they make the discerning pair — people who both sense what is really happening and have the nerve to name it. Their lives often involve advocacy, healing or counsel, and their growth edge is patience: knowing the truth is not the same as being ready to speak it.',
  },
  '12-3': {
    essence: 'Yielding that creates — the pause that feeds the flowering.',
    together:
      'The Hanged Man (12) teaches willing surrender: the sacred pause, the view from upside-down, progress that looks like stillness. The Empress (3) creates: beauty, nurture, abundance in visible form. Paired, they describe people whose creativity is renewed by surrender — they bloom after they stop forcing. Their lesson is trusting the pause: the world will call it delay, but for this pair the stillness is where the work is done.',
  },
  '13-4': {
    essence: 'Endings that protect — clearing the ground so something honest can stand.',
    together:
      'Death (13) clears: transformations, closed chapters, the endings no one wanted but everyone needed. The Emperor (4) fortifies: order, boundaries, structures that protect what is real. Together they are the builders of the second life — people who dismantle what is false and then raise something sturdier in its place. Often marked by at least one total reinvention, this pair turns loss into architecture; its lesson is learning to let the old thing finish before defending the new one.',
  },
  '14-5': {
    essence: 'Measured fire — freedom refined by balance, change guided by faith.',
    together:
      'Temperance (14) blends: patience, proportion, the alchemy of mixing opposites without spill. The Hierophant (5) transmits: tradition, teaching, received wisdom walked rather than recited. Paired, they make the bridge-builders between the old and the new — people who modernise without wrecking, who question without contempt. Their path runs through institutions and reform; their lesson is that true freedom is not escape from form but mastery within it.',
  },
  '15-6': {
    essence: 'Desire met by choice — the chain and the vow, in that order.',
    together:
      'The Devil (15) names the bondage: appetite, attachment, the deals we sign against ourselves. The Lovers (6) name the choosing: love as a decision, union as an act of will rather than gravity. People on this path are given extraordinary magnetism and an equally extraordinary curriculum in desire — they feel the pull toward excess, drama and possession more strongly than most, which is precisely why their gift is conscious choice. Their lesson: nothing they truly love should require their captivity.',
  },
  '16-7': {
    essence: 'Sudden change mastered by will — the lightning and the charioteer.',
    together:
      'The Tower (16) breaks: revelations, collapses, the lightning that hits what was built on falsehood. The Chariot (7) drives: discipline, direction, the will that turns chaos into momentum. This is the pair of dramatic reinvention — lives that periodically shake apart and then reassemble stronger, often with a spiritual or analytical calling at the centre. Their lesson is to stop rebuilding the tower: the Chariot’s victory is driving through the rubble, not re-erecting what the lightning came to take.',
  },
  '17-8': {
    essence: 'Hope powered by gentle strength — openness that survives because it is brave.',
    together:
      'The Star (17) restores: hope, healing, the courage to be vulnerable after the storm. Strength (8) sustains: quiet courage, the lion handled without a whip. Paired, they make the healers — people whose softness is not fragility but a disciplined choice, renewed daily. Their lives often involve guiding others through recovery, and their lesson is self-inclusion: the Star pours water onto the land and into the pool — this pair must remember to keep one cup for themselves. (And behind them both, hidden, stands Justice — see the note in your reading.)',
  },
  '18-9': {
    essence: 'Mystery illumined by solitude — the fog and the lantern.',
    together:
      'The Moon (18) dwells in the deep water: dreams, fears, the unconscious, truth that arrives sideways. The Hermit (9) carries the lantern: reflection, study, wisdom earned in deliberate solitude. Together they form the inner explorers — people called to map what others fear to look at, often through art, psychology, spirituality or research. Their lesson is re-entry: the cave holds treasure, but the pair’s light is meant to be carried back to others, not kept in the dark.',
  },
  '19-10': {
    essence: 'Joy riding the wheel — radiance that learns to surf the cycles.',
    together:
      'The Sun (19) radiates: vitality, success, the plain gift of being alive. The Wheel of Fortune (10) turns: luck, timing, seasons of rise and fall. This is the golden pair — people whose natural brightness attracts opportunity in waves. The lesson hides in the wheel: their happiness matures when it stops depending on the up-cycles. Those who learn to shine in the downturn become the rare souls who lift entire rooms by walking into them.',
  },
  '20-2': {
    essence: 'A calling heard in public — awakening voiced with quiet authority.',
    together:
      'Judgement (20) calls: the awakening, the true vocation, the past forgiven and reassembled into purpose. The High Priestess (2) holds the inner register: intuition, discretion, the knowing that does not need to argue. Paired, they describe people whose private knowing becomes a public summons — lives that turn on a moment of being called, and who then spend their years answering it for others. Their lesson is volume: the calling does not count as answered until someone else can hear it.',
  },
  '21-3': {
    essence: 'Completion feeding creation — the full circle starting another loop.',
    together:
      'The World (21) completes: fulfilment, graduation, the dance inside the finished wreath. The Empress (3) germinates: new life, new work, the garden that always wants planting. Together they are the connectors of cycles — people who finish things so well that the ending itself generates beginnings. Their lives tend to contain clearly marked chapters, each one larger than the last. The lesson is rest between the loops: a wreath fully closed deserves to be worn before the next seed is sown.',
  },
}
```

### `app/src/lib/cardArt.ts` (0.6 KB)

```ts
/**
 * Card artwork URLs keyed by Major Arcana number (00–21), globbed from
 * src/assets/cards/*.jpg at build time. Shared by TarotCardFace and the
 * Fool's Journey background scene.
 */
const CARD_ART = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/cards/*.jpg', { eager: true, import: 'default' }),
  ).map(([path, url]) => {
    const num = Number(/(\d{2})_.*\.jpg$/.exec(path)?.[1])
    return [num, url as string]
  }),
) as Record<number, string>

export function getCardArt(num: number): string | undefined {
  return CARD_ART[num]
}
```

### `app/src/lib/journeyMeeting.ts` (18.7 KB)

```ts
/**
 * The Fool's Journey, told as a series of meetings.
 *
 * Each Major Arcana (I – XX) is a being the Fool encounters on the road:
 * some greet him as friends, some teach him, some put him on trial, a few
 * tear him down — and the greatest destructions become rejuvenations. The
 * World (XXI) is deliberately left out: the Fool has not been shown how
 * that meeting ends yet.
 *
 * Each entry pairs the wide "THE FOOL MEETS THE X" artwork in
 * public/journey/ with the role that being plays in his life and a full
 * explanation of the encounter. The background scene shows the meeting of
 * the current hour; the library shows every meeting in order.
 */

export type MeetingRole =
  | 'Friend'
  | 'Guide'
  | 'Teacher'
  | 'Trial'
  | 'Foe'
  | 'Ordeal'
  | 'Destruction'
  | 'Rejuvenation'
  | 'Rebirth'

export interface JourneyMeeting {
  num: number
  /** What this being is to the Fool: friend, foe, destruction, rejuvenation… */
  role: MeetingRole
  /** The caption written on the artwork */
  title: string
  /** The environment he meets them in */
  place: string
  /** The full story of the meeting */
  text: string
  /** Public URL of the wide artwork */
  image: string
}

const img = (n: number) => `/journey/the-fool-meets-${String(n).padStart(2, '0')}.jpg`

export const JOURNEY_MEETINGS: Record<number, JourneyMeeting> = {
  1: {
    num: 1,
    role: 'Friend',
    title: 'The Fool Meets the Magician',
    place: 'A roadside clearing, standing on top of the world',
    text: 'The first being the Fool meets is pure will wearing a smile. The Magician stands with one arm to heaven and one to earth, and on his table lie all four tools of the tarot — wand, cup, sword and coin — the very gifts the Fool carries in his bindle without knowing it. This is a friend of the best kind: not someone who gives him anything new, but someone who shows him that he already has everything. Above the Magician’s head floats the sign of infinity. The lesson of this meeting is that the world is not merely walked through — it is spoken into being.',
    image: img(1),
  },
  2: {
    num: 2,
    role: 'Guide',
    title: 'The Fool Meets the High Priestess',
    place: 'The threshold of a moonlit temple, between a black pillar and a white one',
    text: 'At the gates of a temple that was never built by hands, the Fool falls silent. Between the pillars of Boaz and Jachin sits a veiled woman who does not rise, does not speak, and does not need to. Behind her hangs a veil sewn with pomegranates, and at her feet rests the crescent moon over a still, black sea. The High Priestess is a guide who answers no questions — she simply lets the Fool feel that behind everything he has seen so far there is a deeper book, written in a language he will spend his whole life learning to read. From this meeting he takes the habit of listening before he leaps.',
    image: img(2),
  },
  3: {
    num: 3,
    role: 'Friend',
    title: 'The Fool Meets the Empress',
    place: 'A summer garden of wheat, pomegranate trees and a waterfall',
    text: 'After the silence of the temple, the Fool is received in a garden so alive it seems to breathe. The Empress sits on cushions of red velvet, a crown of twelve stars in her hair, a shield painted with the sign of Venus beside her throne. She is abundance itself — the friend who feeds him, clothes him, and asks for nothing but that he keep growing. Wheat ripens and pomegranates split open around her: everything she touches wants to become more of itself. The Fool kneels and offers her a flower from his cap, and she shows him that the will he learned from the Magician was only half the craft — the other half is nurture. What is loved, grows.',
    image: img(3),
  },
  4: {
    num: 4,
    role: 'Trial',
    title: 'The Fool Meets the Emperor',
    place: 'A throne room of red stone on a barren mountain top',
    text: 'The road climbs out of the garden and onto bare rock, where a stern man in armor waits on a throne of ram’s heads. The Emperor is no enemy — but he is a trial. Where the Empress gave, he demands: show me your structure, your laws, your walls. In his hands are the ankh of life and the orb of the world, and behind him a red range of mountains under a harsh sky. The Fool, hat in hand, learns the hardest early lesson: love without structure collapses, and freedom without law becomes another kind of chain. The Emperor teaches him to build what the Empress grows.',
    image: img(4),
  },
  5: {
    num: 5,
    role: 'Teacher',
    title: 'The Fool Meets the Hierophant',
    place: 'A cathedral between two pillars, light falling through stained glass',
    text: 'In a great hall that smells of old paper and incense, a crowned teacher blesses two kneeling students while two golden keys lie crossed at his feet. The Hierophant is the bridge: not the lone wisdom of the High Priestess, but the wisdom of everyone who came before, written down and handed over. He opens the old book and lets the Fool read what other fools learned at this same crossroads. Some travelers resent the Hierophant and call him convention; the wiser Fool understands that tradition is a lantern he did not have to light himself. He learns that not everything must be discovered alone — some things are inherited so the journey can go further.',
    image: img(5),
  },
  6: {
    num: 6,
    role: 'Friend',
    title: 'The Fool Meets the Lovers',
    place: 'A garden beneath a radiant cloud, a serpent in one tree and flame in another',
    text: 'In a walled garden that feels like the first morning of the world, a winged angel spreads its arms over two figures standing beneath two trees — one hung with fruit and a serpent, one crowned with living flame. The Lovers are friends, but their gift is a choice, and choices are never free of cost. The angel does not point at either tree; it simply waits. The Fool understands that love is not something that happens to him — it is a decision about who he will become, made out loud, with consequences. The road behind the garden forks, and for the first time he must choose it for himself.',
    image: img(6),
  },
  7: {
    num: 7,
    role: 'Trial',
    title: 'The Fool Meets the Chariot',
    place: 'A battlefield plain outside walled cities',
    text: 'On a plain scarred by wheels, a charioteer in stone armor stands motionless in his chariot while two sphinxes — one black, one white — pull in opposite directions. The Chariot is the trial of the will: victory goes not to the strongest pull, but to the driver who holds both. There is no reins in his hands, only will. The Fool steps aside as the wheels thunder past and understands what he is being shown — his own nature also pulls two ways, toward darkness and toward light, and his whole life will be the steering. This meeting leaves him tougher: the road is no longer a stroll; it is a conquest of himself.',
    image: img(7),
  },
  8: {
    num: 8,
    role: 'Friend',
    title: 'The Fool Meets Strength',
    place: 'A sunny meadow at the edge of a deep forest',
    text: 'In a meadow washed with gold, a young woman in a white robe closes the jaws of a great lion — gently, patiently, without a single drop of blood, while the sign of infinity floats above her head. The Fool had reached for his stick; she smiles and shows him the stick was never needed. Strength is a friend who teaches by demonstration: true power does not strike, it steadies. The lion is not killed or even subdued — it is befriended. Behind the Fool’s legs his small white dog watches the great cat and stops trembling. He leaves the meadow with a new definition of courage: not the absence of the beast, but the friendship with it.',
    image: img(8),
  },
  9: {
    num: 9,
    role: 'Guide',
    title: 'The Fool Meets the Hermit',
    place: 'A snowy peak at night, one small light in the dark',
    text: 'The road narrows to a path of snow, and ahead the Fool sees a single light moving slowly up the mountain. The Hermit is a hooded figure climbing alone, his only treasure a lantern with a six-pointed star burning inside. He does not come down to meet the Fool, and he does not wait — the light simply stays visible, and that is the whole invitation. This is the guide of the solitary search: some answers are not in gardens, temples or battlefields, but in the long quiet of one’s own company. The Fool follows at a distance and learns the difference between loneliness and solitude: one is an emptiness, the other a lamp.',
    image: img(9),
  },
  10: {
    num: 10,
    role: 'Trial',
    title: 'The Fool Meets the Wheel of Fortune',
    place: 'The open sky, where a great golden wheel turns forever',
    text: 'Without warning the ground simply vanishes, and the Fool is lifted into the air by a wheel too large to see the rim of. On it ride a sphinx, a wolf-serpent that rises and falls, and zodiac sigils that blaze as they pass. Fixed in the corner of the sky, a winged figure watches, holding the wheel’s still center. The Wheel is the trial no will can steer: fortunes rise, fortunes fall, and the only choice left is where to stand on the rim — clinging to the outside, spinning helpless, or moving toward the center where nothing turns. The Fool is set back on the road breathless, with the first taste of fate in his mouth: not everything that happens is his to command.',
    image: img(10),
  },
  11: {
    num: 11,
    role: 'Trial',
    title: 'The Fool Meets Justice',
    place: 'A hall of grey columns, a sword raised, scales balanced',
    text: 'In a hall with no roof and no shadows to hide in, a crowned figure in red robes waits with a sword in one hand and a pair of scales in the other. Justice does not accuse and does not forgive — she only weighs. On the floor before her lie every deed the Fool has done since he first stepped onto the road: the flower given to the Empress, the temper kept with the lion, the choices dodged at the forked path. Nothing is added and nothing is forgotten; the scales move with terrible calm. This is the trial of accountability: every cause carries its effect, and the sword cuts equally for the wise and the careless. The Fool leaves straighter-backed, beginning to understand that his life is a ledger he writes himself.',
    image: img(11),
  },
  12: {
    num: 12,
    role: 'Ordeal',
    title: 'The Fool Meets the Hanged Man',
    place: 'A quiet riverbank, a living gallows of rough wood',
    text: 'By a still river the Fool finds a young man hanging upside down from a T-shaped frame grown from a single tree — and strangest of all, he is smiling, a golden halo shining around his head. The Hanged Man’s ordeal looks like defeat and is nothing of the kind: hung by one foot, his world inverted, he has stopped fighting the rope and started seeing. From down here, the Fool realizes, the river runs upward into the mountains. This meeting is an ordeal of surrender — the hardest thing the active Fool has been asked to do, which is nothing at all. He learns that some knots are loosened not by pulling but by letting go, and that a new angle on everything is worth a little discomfort.',
    image: img(12),
  },
  13: {
    num: 13,
    role: 'Destruction',
    title: 'The Fool Meets Death',
    place: 'A grey plain at dawn, a river running between two towers',
    text: 'On a field where even the grass has given up, a skeletal knight in black armor rides a pale horse, carrying a black flag emblazoned with a single white rose. Kings and bishops lie fallen on the ground — no crown, no prayer could bargain here. The Fool’s blood turns to ice; he braces for the end of everything. But Death does not raise the scythe at him. The knight simply rides past toward a river that flows, the Fool now sees, straight into a rising sun. This is destruction of a very specific kind: not punishment, but harvest. What is dead in him — old skins, finished chapters, clenched hands — must be cut down so something alive can take its place. He learns the oldest secret of the road: every ending is compost.',
    image: img(13),
  },
  14: {
    num: 14,
    role: 'Rejuvenation',
    title: 'The Fool Meets Temperance',
    place: 'A riverside path at dusk, water poured without spilling a drop',
    text: 'After the field of Death the Fool is hollow, and at the river he finds an angel waiting — winged, robed in pale blue, patiently pouring water from one golden cup into another in an endless stream that never spills. One foot rests on land, one in the water, and a winding path climbs from the bank to distant mountains. Temperance is the first rejuvenation: not a loud miracle but a blending, drop by drop, of everything the Fool has been through until it becomes one steady nature. He cups his hands and catches the falling water, and his tiredness loosens. The angel teaches him the alchemy of the middle way — fire and water, road and rest, giving and keeping — mixed in the right measure, which is never too much of either.',
    image: img(14),
  },
  15: {
    num: 15,
    role: 'Foe',
    title: 'The Fool Meets the Devil',
    place: 'A cavern of black rock lit from below by hellfire',
    text: 'The road dips into a cavern where the air itself is heavy, and there the Fool finally meets a true foe — a horned, bat-winged figure looming over a pedestal, an inverted pentagram burning on his forehead. At his feet a chained man and woman stand with loose collars they never think to lift. And then the cold closes around the Fool’s own ankle: he too is shackled, the chain long and worn smooth. The Devil is the enemy within made visible — every appetite, fear and habit that poses as comfort while it holds him still. His white dog snarls and bites at the links. This foe is not fought with the sword; he is dissolved by the lantern-light of seeing. The moment the Fool truly looks at his chain, it is already loose enough to lift.',
    image: img(15),
  },
  16: {
    num: 16,
    role: 'Destruction',
    title: 'The Fool Meets the Tower',
    place: 'A mountain peak at night, split by lightning',
    text: 'High on a jagged peak stands a tower the Fool helped build — a false height of pride and shaky foundations — and the sky opens over it in a fork of white fire. Lightning strikes the crown and blows it apart; flames burst from every window, and twenty-two sparks rain down like burning letters. From the heights two figures fall headfirst — one of them is the Fool himself, tumbling past his own tower with his bindle flying and his hat torn away, his dog leaping into the dark after him. This is the most violent meeting of the journey: the Tower destroys what was never true, and it does not ask permission. And yet, even mid-fall, the Fool understands what the lightning was for — the ground he is about to hit is real ground. Some heights must fall before anything honest can be built.',
    image: img(16),
  },
  17: {
    num: 17,
    role: 'Rejuvenation',
    title: 'The Fool Meets the Star',
    place: 'A still pool under a blaze of stars, after the storm',
    text: 'The Fool wakes beside a dark pool, bandaged and bruised from the fall, and the sky above him is no longer fire but stars — one huge golden star and seven smaller ones burning with impossible calm. At the water’s edge a naked figure kneels, pouring water from two jugs: one into the pool, one onto the thirsty land, one foot in each world. A red ibis watches from the tree. The Star is the rejuvenation that comes after the Tower’s violence: hope, arriving quietly, on schedule, without being asked. The Fool’s dog rests its head on his knee and for the first time in the whole journey he simply stays still and lets himself be healed. He learns that hope is not naive — it is what the road itself is made of, refilled one jug at a time.',
    image: img(17),
  },
  18: {
    num: 18,
    role: 'Trial',
    title: 'The Fool Meets the Moon',
    place: 'A pale road between two towers, where nothing is quite what it seems',
    text: 'The healed Fool walks on, but the light changes: a huge moon rises with a frowning face, and the road ahead shimmers. Between two watchtowers a wolf and a dog howl at the same moon, a crayfish crawls from a dark pool onto the path, and the road itself seems to fork and unfork in the mist. The Moon is the trial of illusion — nothing here is false, exactly, but nothing is what it appears to be either. Fear stirs in the Fool like the stirring of the pool; every shape in the dark looks like an enemy, some of them are. He shields his eyes and learns the Moon’s lesson the only way it can be learned: by walking on through the uncertainty without demanding that the path first prove itself dry. Courage, again — but this time without the lion to befriend.',
    image: img(18),
  },
  19: {
    num: 19,
    role: 'Friend',
    title: 'The Fool Meets the Sun',
    place: 'A walled garden under an enormous smiling sun',
    text: 'The mist burns off all at once, and the Fool steps into a garden drenched in gold. Over the wall lean giant sunflowers, and in the middle of it all a laughing naked child rides a white horse, waving a red banner as if the whole morning belongs to him — because it does. The Sun is the purest friend of the journey: no trial, no veil, no chain, no fall. The Fool tosses his cap in the air and dances, his dog leaping circles around the horse, and for one long moment he is simply glad to exist. After the Moon, this meeting teaches him what the light was for: not to reveal hidden dangers, but to enjoy what was never dangerous at all. Joy, the Sun says, is not the reward at the end of the road. Joy is the proof you understood it.',
    image: img(19),
  },
  20: {
    num: 20,
    role: 'Rebirth',
    title: 'The Fool Meets Judgement',
    place: 'A grey field of open graves beneath a blazing cloud',
    text: 'The last being waits in a grey valley where the ground itself is stirring. From a cloud of white fire a great archangel sounds a trumpet hung with a red-cross flag, and at the call, naked figures rise smiling from coffins scattered across the earth, arms spread to the sky — every grave the Fool ever dug for himself, every version of him he outgrew and buried along the road. And then the ground opens under his own feet, and the Fool rises too, shaking off the soil, his dog beside him, grinning like a man given his life back. Judgement is not a verdict — it is a summons. Nothing is weighed here; everything is forgiven and called upward. The Fool learns the final lesson of this road: he was never the man who fell from the Tower or the man who shook off the chain. He is the one who keeps answering the trumpet.',
    image: img(20),
  },
}

/** Which card the Fool is meeting at a given hour of day (1–20, or 0 = the open road) */
export function journeyCardAt(hour: number): number {
  if (hour < 0 || hour > 23) return 0
  return hour <= 19 ? hour + 1 : 0
}

export function getJourneyMeeting(num: number): JourneyMeeting | undefined {
  return JOURNEY_MEETINGS[num]
}
```

### `app/src/lib/utils.ts` (0.2 KB)

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `app/src/hooks/use-mobile.ts` (0.6 KB)

```ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
```

### `gen_journey.py` (10.0 KB)

```python
# -*- coding: utf-8 -*-
"""Generate 'The Fool meets the X' journey artwork for Major Arcana 02-20."""
import subprocess, sys, time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

TOOL = r"C:/Users/pudlo/AppData/Roaming/kimi-desktop/daimon-share/daimon/runtime/kimi-code/home/plugins/managed/image_generation/scripts/image_generation_tool.py"
OUT = Path(r"C:/Users/pudlo/OneDrive/Documents/Kimi/Workspaces/Site de Tarot Birth Card and Numerology/app/public/journey")
OUT.mkdir(parents=True, exist_ok=True)
REF = "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Ff247a885df22cf35e8325945213ca62b9184abddefcb0ffe3c86572465f4858e?filename=1789904289825-4-image.png&sig=7XfXn2HgT3E1rEqMHS9spZ3rBKVmQPTypCr2a20D3OU=&t=o"

STYLE = (
    "Vintage Rider-Waite-Smith tarot card illustration, 1909 occult woodblock print style, "
    "bold black outlines, flat vivid hand-colored inks, cream parchment texture. "
    "A youthful traveler, the Fool: colorful floral-patterned tunic, yellow boots, red feathered cap, "
    "carrying a red bindle sack on a stick over his shoulder, a small white dog at his heels. "
    "Wide cinematic landscape composition, richly detailed environment filling the whole frame. "
    "Along the bottom edge, a thick black caption band with bold white capital letters."
)

CARDS = {
    2: ("THE FOOL MEETS THE HIGH PRIESTESS",
        "The Fool stands hushed between a black pillar and a white pillar at the entrance of a moonlit temple, "
        "before a serene veiled High Priestess seated on a throne, a crescent moon at her feet, pomegranate veil behind her, "
        "a vast still sea of the unconscious stretching beyond. Deep blue night, mystery, sacred silence."),
    3: ("THE FOOL MEETS THE EMPRESS",
        "A lush summer garden of ripe wheat and pomegranate trees with a waterfall, the radiant Empress seated on a throne of red cushions, "
        "twelve-star crown, heart-shaped shield with Venus symbol, the Fool kneeling before her offering a flower, his dog rolling in the grass. "
        "Warm greens and golds, abundance, nurturing welcome."),
    4: ("THE FOOL MEETS THE EMPEROR",
        "A barren mountain-top throne room of red stone under a harsh orange sky, the stern armored Emperor on a ram-headed throne "
        "holding an ankh scepter and golden orb, the small Fool standing before him hat in hand, his dog sitting very still. "
        "Severity, order, the trial of authority."),
    5: ("THE FOOL MEETS THE HIEROPHANT",
        "A grand cathedral with two stone pillars, the Hierophant in a triple crown and red-and-gold robe blessing two kneeling acolytes, "
        "crossed golden keys at his feet, an open book on the lectern, colored light through stained glass, the Fool at the back of the congregation "
        "listening, his dog lying at his feet. Tradition, teaching."),
    6: ("THE FOOL MEETS THE LOVERS",
        "The Garden of Eden beneath a radiant golden sun-cloud, the winged angel Raphael blessing with open arms above, "
        "a naked man and woman standing beneath the fruiting Tree of Knowledge with a serpent and the flaming Tree of Life, "
        "green mountains behind, the Fool watching from a flowery hill with his dog, a forked path before him. Love and choice."),
    7: ("THE FOOL MEETS THE CHARIOT",
        "A battlefield plain outside city walls, the armored Charioteer standing tall in a stone chariot drawn by a black sphinx and a white sphinx "
        "pulling opposite ways under a starry canopy, the Fool stepping aside from the charging wheels, his bindle swinging, his dog barking. "
        "Conquest, willpower, the foe of doubt."),
    8: ("THE FOOL MEETS STRENGTH",
        "A sunny meadow at the edge of a forest, a calm young woman in a white robe with an infinity symbol above her head gently closing the jaws of a great lion, "
        "the Fool watching in open-mouthed awe with his dog hiding behind his legs. Gentle courage, patience, a friend."),
    9: ("THE FOOL MEETS THE HERMIT",
        "A snowy mountain peak at night, the hooded Hermit in a grey cloak holding a blazing six-pointed star lantern on a tall staff, "
        "the Fool and his white dog climbing the dark slope toward that single small light. Solitude, guidance, the inner search."),
    10: ("THE FOOL MEETS THE WHEEL OF FORTUNE",
        "A great golden wheel turning in the sky decorated with zodiac sigils and Hebrew letters, a sphinx seated atop, a descending wolf-serpent, "
        "a fixed winged figure in the corner, the Fool lifted mid-air by the turning wheel, arms spread, his dog leaping below. Fate, cycles."),
    11: ("THE FOOL MEETS JUSTICE",
        "A solemn hall of grey columns, the crowned Justice seated in a red robe between two pillars, a double-edged sword raised in one hand, "
        "perfectly balanced scales in the other, the deeds of the Fool's life laid out on the floor before her while he stands accountable, dog sitting straight. "
        "Truth, cause and effect."),
    12: ("THE FOOL MEETS THE HANGED MAN",
        "A tranquil riverside scene in muted blue and green, a serene young man suspended upside down by one foot from a living T-shaped gallows of rough wood, "
        "the other leg crossed, a golden halo around his head, the Fool staring up puzzled with his head tilted, his dog howling at the strange sight. "
        "Surrender, a new perspective."),
    13: ("THE FOOL MEETS DEATH",
        "A bleak grey plain at dawn, a skeletal knight in black armor riding a pale white horse, carrying a black flag with a white rose, "
        "fallen kings and bishops lying on the ground, a river flowing between two distant towers toward a rising sun — "
        "the Fool steps back in terror, hat fallen, his dog bristling, yet golden light breaks on the horizon. Ending that makes room for beginning."),
    14: ("THE FOOL MEETS TEMPERANCE",
        "A quiet riverside path at dusk, a gentle winged angel in a light blue robe pouring water in an endless stream between two golden cups without spilling a drop, "
        "one foot on land and one in the water, a winding path leading to distant mountains, the Fool cupping his hands to catch the falling drops, his dog drinking from the river. "
        "Healing, balance, rejuvenation."),
    15: ("THE FOOL MEETS THE DEVIL",
        "A dark cavern of jagged black rock lit by hellfire, the horned bat-winged Devil with a goat head and an inverted pentagram on his forehead looming huge, "
        "a chained naked man and woman at his pedestal — and the Fool himself shackled at the ankle, straining against a loose heavy chain, his white dog growling and biting the links. "
        "Bondage, temptation, the foe within."),
    16: ("THE FOOL MEETS THE TOWER",
        "A tall grey tower on a jagged mountain peak at night struck by a great forked lightning bolt, flames bursting from its windows, a crown blown off the top, "
        "twenty-two yods of flame raining from the black sky, two figures falling headfirst from the heights — one of them is the Fool tumbling with his bindle and hat, "
        "his white dog leaping after him. Sudden destruction, revelation."),
    17: ("THE FOOL MEETS THE STAR",
        "A still starry night beside a dark pool, a naked figure kneeling on the grass pouring water from two jugs, one into the pool and one onto the land, "
        "one huge golden eight-pointed star and seven smaller stars blazing above, a red ibis perched on a tree — "
        "the Fool, bandaged and bruised from his fall, sits by the pool healing, his dog resting its head on his knee. Hope, quiet renewal."),
    18: ("THE FOOL MEETS THE MOON",
        "A long pale road winding between two towers into distant blue mountains, a wolf and a dog howling at an enormous frowning moon, "
        "a crayfish crawling from a dark pool onto the path, everything shimmering with uncertain light — "
        "the Fool walks warily with one hand shielding his eyes, his dog pressed close to his leg, illusions stirring in the mist. Fear, dreams, illusion."),
    19: ("THE FOOL MEETS THE SUN",
        "A bright walled garden under an enormous smiling golden sun with swirling rays, giant sunflowers nodding over the wall, "
        "a joyful naked child riding a white horse waving a long red banner — the Fool dancing alongside laughing, hat tossed in the air, his dog leaping in circles. "
        "Pure joy, vitality, a true friend."),
    20: ("THE FOOL MEETS JUDGEMENT",
        "A grey mountain landscape, a great archangel in flowing red-and-white robes sounding a trumpet from a blazing cloud, a white flag with a red cross, "
        "naked figures rising joyfully with arms spread from open coffins scattered across the earth — the Fool rises smiling from his own grave, "
        "his dog beside him shaking off the soil, everyone answering the call. Rebirth, absolution, the final trumpet."),
}

def gen(num: int):
    title, scene = CARDS[num]
    desc = f"{STYLE} The scene: {scene} Caption text: \"{title}\""
    out = OUT / f"the-fool-meets-{num:02d}.jpg"
    if out.exists() and out.stat().st_size > 30000:
        return num, "cached"
    log = Path(f"C:/Users/pudlo/AppData/Local/Temp/journey-{num:02d}.log")
    for attempt in (1, 2):
        with open(log, "w") as lf:
            r = subprocess.run(
                [sys.executable, TOOL, "generate", "--description", desc,
                 "--size", "2048x1152", "--background", "opaque",
                 "--reference-image", REF, "--output", str(out)],
                stdout=lf, stderr=subprocess.STDOUT, timeout=900)
        if out.exists() and out.stat().st_size > 30000:
            return num, "ok"
        time.sleep(5)
    return num, "FAILED"

if __name__ == "__main__":
    nums = [int(x) for x in sys.argv[1:]] or sorted(CARDS)
    results = {}
    with ThreadPoolExecutor(max_workers=5) as ex:
        futs = {ex.submit(gen, n): n for n in nums}
        for f in as_completed(futs):
            n, status = f.result()
            results[n] = status
            print(f"[{n:02d}] {status}", flush=True)
    print("DONE", sorted(results.items()), flush=True)
```
