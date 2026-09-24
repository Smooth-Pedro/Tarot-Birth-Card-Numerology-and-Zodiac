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
      // the published package.json points "module" at a file npm doesn't ship —
      // resolve straight to the bundled dist build instead
      "circular-natal-horoscope-js": path.resolve(
        __dirname,
        "./node_modules/circular-natal-horoscope-js/dist/index.js",
      ),
    },
  },
});