// Worker entrypoint: AI reading API + static site.
// - POST /api/daily-reading → Gemini-powered tarot reading (key stays server-side)
// - everything else → the static site files (env.ASSETS)
import { onRequestPost, onRequest } from './tarot-numerology-site/functions/api/daily-reading.js'

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    if (url.pathname === '/api/daily-reading') {
      if (request.method === 'POST') {
        return onRequestPost({ request, env, waitUntil: ctx.waitUntil.bind(ctx) })
      }
      return onRequest({ request, env })
    }
    return env.ASSETS.fetch(request)
  },
}
