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
    <nav className="absolute top-4 right-5 z-20 flex flex-wrap justify-end gap-x-4 gap-y-1 max-w-[70vw]">
      <NavLink to="/" end className={({ isActive }) => cls(isActive)}>
        Reading
      </NavLink>
      <NavLink to="/astrology" className={({ isActive }) => cls(isActive)}>
        The Sky
      </NavLink>
      <NavLink to="/synastry" className={({ isActive }) => cls(isActive)}>
        Synastry
      </NavLink>
      <NavLink to="/library" className={({ isActive }) => cls(isActive)}>
        Cards
      </NavLink>
      <NavLink to="/numerology-library" className={({ isActive }) => cls(isActive)}>
        Numbers
      </NavLink>
      <NavLink to="/astrology-library" className={({ isActive }) => cls(isActive)}>
        Cosmos
      </NavLink>
      <NavLink to="/pairs" className={({ isActive }) => cls(isActive)}>
        Pairs
      </NavLink>
    </nav>
  )
}
