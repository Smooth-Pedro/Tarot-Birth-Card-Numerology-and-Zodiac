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
