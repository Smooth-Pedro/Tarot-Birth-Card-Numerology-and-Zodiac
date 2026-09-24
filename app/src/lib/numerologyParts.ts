/**
 * The deep numerology library: every position of a numerology chart,
 * explained separately and in depth — the counterpart of the sign and
 * house entries on the astrology side.
 */

export interface NumerologyPart {
  key: string
  name: string
  glyph: string
  /** How it is calculated, in one line */
  formula: string
  /** What this position answers about a person */
  question: string
  description: string
  detail: string
  guidance: string
}

export const NUMEROLOGY_PARTS: NumerologyPart[] = [
  {
    key: 'life-path',
    name: 'Life Path',
    glyph: '☉',
    formula: 'Every digit of the full birth date, reduced to one number (masters 11/22/33 kept whole).',
    question: 'What road am I walking?',
    description:
      'The Life Path is the spine of the numerology chart — the curriculum you enrolled in by being born on this date. It describes the road itself: its scenery, its obstacles, its rewards, and the kind of person the walking of it slowly makes you. Everything else in the chart is a voice; the Life Path is the song they all sing in.',
    detail:
      'Read the Life Path the way you would read a river: not as a single event but as a direction. A 5 does not need to become a traveler to honor its chart; it needs a life with motion in it. An 8 does not need wealth; it needs scale and consequence. The number describes the texture of the lessons that keep arriving until they are learned — which is why people so often recognise their Life Path with a sigh: it has been describing their recurring homework for decades. Master numbers (11, 22, 33) are the same lessons at higher voltage: the 11 lives the 2’s partnership curriculum as a spiritual antenna, the 22 lives the 4’s structure as a legacy build, the 33 lives the 6’s care as active devotion. The math keeps them unreduced because the gentler frequency would let the chart off too easy.',
    guidance:
      'Work with your Life Path by asking, at every major crossroads, which option is the same lesson again and which is the next level of it. The road repeats its tests in new costumes until they are passed — naming the pattern is already half the passing.',
  },
  {
    key: 'expression',
    name: 'Expression (Destiny)',
    glyph: '✦',
    formula: 'The full birth name, every letter converted through the Pythagorean chart and summed.',
    question: 'What am I here to do with what I have?',
    description:
      'The Expression number is the instrument you were handed — the sum of every talent, tendency and tool encoded in your full birth name. Where the Life Path is the road, the Expression is the vehicle: it describes what you are naturally equipped to do, and what you become when you operate at full capacity.',
    detail:
      'Because it is built from the name, the Expression is the most personal number in the chart — no two names with different letters give the same sum, even for identical twins born seconds apart. It shows where your effort compounds: a 3 Expression is fed by audiences and penalized by solitude; a 7 Expression is fed by depth and penalized by noise. The gap people feel between “who I am” (Life Path) and “how I operate” (Expression) is real and useful: growth lives in the gap. When the two agree, life feels like a tailwind; when they differ, life feels like translation work — and translation, done long enough, becomes its own mastery.',
    guidance:
      'Compare your Expression with your Life Path. If they differ, stop trying to make one imitate the other — let the Expression be the how and the Life Path be the why. Build your working life around the Expression and your meaning around the Life Path.',
  },
  {
    key: 'soul-urge',
    name: 'Soul Urge',
    glyph: '☽',
    formula: 'Only the vowels of the full birth name, converted and summed.',
    question: 'What does my soul actually want?',
    description:
      'The Soul Urge is the quiet engine — what you want when no one is watching and nothing needs proving. Built from the vowels (the open, sounding letters), it is the least performative number in the chart: it describes the private motivations that drive your public choices, often without your own awareness.',
    detail:
      'This is the number partners and close friends usually read more accurately than the person who owns it, because it shows most clearly under stress and in private. A person with a 2 Soul Urge may build an entire 8-looking career and still feel hollow until someone is truly on their side; a 9 Soul Urge can collect every achievement and remain hungry for meaning. The Soul Urge explains the cravings that seem irrational from the outside — the strange nostalgia for things never experienced, the loyalty to people who offer a specific kind of understanding. It is the deepest “why” behind the chart’s every “what”.',
    guidance:
      'Honour the Soul Urge in small, scheduled ways — it rarely demands a revolution, only a regular allowance. When a goal keeps failing to satisfy after achievement, check whether it fed the Soul Urge or only the résumé.',
  },
  {
    key: 'personality',
    name: 'Personality',
    glyph: '☿',
    formula: 'Only the consonants of the full birth name, converted and summed.',
    question: 'What do people meet when they meet me?',
    description:
      'The Personality number is the porch of the house — the first impression, the social handshake, the version of you that fills a room before you say anything. Built from the consonants (the closed, shaping letters), it describes how your energy is received and how you instinctively protect the softer numbers inside.',
    detail:
      'First impressions are not shallow; they are compressed. The Personality number is what gets compressed — the accent of the self. It often differs noticeably from the Soul Urge, and the distance between them is the classic “people don’t really know me” complaint: the porch is built to protect the hearth. Read together, the two describe a whole social mechanism: the Personality manages entry, the Soul Urge decides who gets to stay. People whose Personality and Soul Urge match the same number experience life as unusually legible — for better (they are easy to trust) and worse (there is no private room to retreat to).',
    guidance:
      'Let the Personality do its job without shame — filtering is healthy. But audit occasionally what it is filtering out: if the porch is keeping away the very people the Soul Urge wants in, widen the door deliberately.',
  },
  {
    key: 'birthday',
    name: 'Birthday Number',
    glyph: '✧',
    formula: 'The day of the month you were born on, reduced (masters kept).',
    question: 'What did I bring with me?',
    description:
      'The Birthday number is the gift at the door — the talent so native it feels like nothing, because you never had to learn it. Unlike every other position, it comes from a single component of the date, so it reads like a note pinned to the chart: “starts with this”.',
    detail:
      'The Birthday number matures early and stays visible: it is the skill others assume took effort, the reflex that gets borrowed in group projects, the thing you were good at before you knew what good was. Born on the 22nd, the gift is architecture — seeing how pieces could stand together. Born on the 7th, it is the instinct to look underneath. Because it is a gift rather than a task, the Birthday number does not demand development the way the Life Path does — but it rewards development more reliably than anything else in the chart, being pure leverage. Left unworked, gifts shrink into party tricks; taken seriously, they become the career.',
    guidance:
      'Identify the skill people thank you for that you consider “no big deal” — that is usually the Birthday number talking. Invest training disproportionately there: it is the one account in the chart that compounds fastest.',
  },
  {
    key: 'attitude',
    name: 'Attitude Number',
    glyph: '⚡',
    formula: 'Month + day of birth, reduced.',
    question: 'How do I meet the world?',
    description:
      'The Attitude number is the first five minutes — how you answer the phone, enter a party, receive bad news. It is the thinnest, fastest layer of the chart, built from the two most immediate components of the date, and it colors everything before the deeper numbers have their say.',
    detail:
      'First impressions of you are mostly the Attitude number wearing your face. It is neither as deep as the Life Path nor as private as the Soul Urge: it is the interface, the default settings. This is why people sometimes feel their Attitude “isn’t really them” — it is them at speed, before reflection arrives. In practice it predicts the opening move: the 1 attitude leads with a plan, the 2 with a question, the 9 with the bigger picture. It also explains why the same person can read so differently across contexts — different rooms switch on different layers, and the Attitude is the quickest switch.',
    guidance:
      'Use the Attitude consciously in situations where the first five minutes decide everything — interviews, dates, negotiations. It is a tool, not a cage: the point of knowing your default is being able to override it when the moment calls for a different opening.',
  },
  {
    key: 'maturity',
    name: 'Maturity Number',
    glyph: '♃',
    formula: 'Life Path + Expression, reduced (masters kept).',
    question: 'Who am I growing into?',
    description:
      'The Maturity number is the chart’s second half — the person you are becoming, which usually arrives in force around the mid-thirties and deepens from there. It blends the road (Life Path) with the vehicle (Expression) into the destination they were building toward together.',
    detail:
      'Young charts are loud with potential and quiet with direction; the Maturity number is what the noise cooks down to. People often report a quiet shift in their thirties or forties — sudden intolerance for old patterns, new gravity toward themes that never interested them before — and the theme is almost always their Maturity number arriving on schedule. It is the most hopeful entry in the chart: proof, in arithmetic, that the person you are failing to be at twenty-five may simply not be the person you are for. The first half of life practices the numbers; the second half integrates them.',
    guidance:
      'When the Maturity number’s themes start calling — often through restlessness with achievements that used to satisfy — follow them even without a plan. The number is not a new assignment; it is the reward level of the assignments you have been completing all along.',
  },
  {
    key: 'balance',
    name: 'Balance Number',
    glyph: '⚖',
    formula: 'The initials of the full birth name, converted and summed.',
    question: 'Where do I find my footing in a storm?',
    description:
      'The Balance number is the emergency exit of the chart — the resource you instinctively reach for when life stops being manageable. Built from the initials (the letters that start everything), it describes the specific kind of action that restores equilibrium when emotion is running the show.',
    detail:
      'Under real pressure, people do not become their Life Path; they become their Balance number. It is the narrow, reliable door that stays open when the rest of the chart is smoke: some people restore themselves by delegating (8), some by examining feelings (2), some by going to ground and healing (6). Knowing yours in advance is like knowing where the fire extinguisher is — the knowledge matters precisely on the day you cannot think. It also explains the otherwise puzzling advice that works for friends but never for you: their Balance number is not yours.',
    guidance:
      'Identify your Balance strategy before you need it, and write it somewhere you will find it angry. In crisis, skip the elaborate self-help and go straight to this number’s specific medicine — it is the one door guaranteed to open under load.',
  },
  {
    key: 'karmic-debt',
    name: 'Karmic Debt Numbers',
    glyph: '☄',
    formula: 'Not calculated on purpose — 13, 14, 16 and 19 appear inside any reduction and flag themselves.',
    question: 'What did I come back to finish?',
    description:
      'The karmic debt numbers are the chart’s overdue assignments — 13 (R Death), 14 (R Temperance), 16 (R The Tower) and 19 (R The Sun). When one of them surfaces in a Life Path, Expression or any major position, tradition reads it as unfinished business carried forward: a lesson that was avoided, postponed or misused, now back on the syllabus with interest.',
    detail:
      'A karmic debt does not doom anyone; it specifies the curriculum. The 13 asks for work done without shortcuts — the debt of laziness or misuse of others’ labor, repaid by thoroughness. The 14 asks for discipline over appetite — the debt of excess, repaid by measured freedom. The 16 asks for honest foundations — the debt of pride or hollow structures, repaid by rebuilding what collapses, truthfully this time. The 19 asks for the self used in service — the debt of selfishness, repaid by letting one’s gifts carry others. The common signature is a life that keeps presenting the same test in escalating costumes until it is passed, and an unusual lightness afterward — debts, unlike fate, can be settled.',
    guidance:
      'If a debt number lives in your chart, stop asking “why does this keep happening to me” and start asking “what is this asking me to do properly.” The interest stops accruing the moment the lesson is actually learned — that is the entire mechanism of the debt.',
  },
]
