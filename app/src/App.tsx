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
