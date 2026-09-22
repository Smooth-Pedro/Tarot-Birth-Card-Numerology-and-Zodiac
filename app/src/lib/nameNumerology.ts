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
