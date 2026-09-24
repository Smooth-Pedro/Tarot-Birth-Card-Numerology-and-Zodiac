/**
 * Astrological reference data + tarot correspondences (Golden Dawn / Book T).
 * Everything the natal chart, the tarot wheel and the synastry engine need to
 * translate sky positions into the language of the Major & Minor Arcana.
 */

export type Element = 'Fire' | 'Earth' | 'Air' | 'Water'
export type Modality = 'Cardinal' | 'Fixed' | 'Mutable'
export type Suit = 'Wands' | 'Cups' | 'Swords' | 'Pentacles'

export const ELEMENT_GLYPH: Record<Element, string> = {
  Fire: '🔥',
  Earth: '🜃',
  Air: '🜁',
  Water: '🜄',
}

export interface SignInfo {
  key: string
  name: string
  glyph: string
  element: Element
  modality: Modality
  /** Ruling planet key (see PLANETS) */
  ruler: string
  /** Traditional cusp dates for display */
  dates: string
  /** The Major Arcana that embodies this sign (Golden Dawn) */
  card: number
  keywords: string[]
  essence: string
  shadow: string
  inLove: string
  atWork: string
}

export const SIGNS: SignInfo[] = [
  {
    key: 'aries',
    name: 'Aries',
    glyph: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    ruler: 'mars',
    dates: 'Mar 21 – Apr 19',
    card: 4,
    keywords: ['Courage', 'Initiative', 'Candor', 'Competition'],
    essence:
      'Aries is the first spark — the sign that exists to begin. Ruled by Mars and embodied in the Emperor, it carries the raw will to exist, to lead, to charge at the closed door. Aries energy is honest to the point of bluntness, allergic to hesitation, and forever young: it renews itself by starting over. Life is approached as a contest of courage, and the Aries question is always “why wait?”',
    shadow:
      'The Aries shadow is the ram charging its own reflection — impatience weaponised, anger treated as honesty, and starts without finishes. When the fire burns unaimed it becomes conflict for its own sake, and the Emperor’s throne becomes a tantrum.',
    inLove:
      'In love Aries pursues directly and expects pursuit back. Passion arrives first and patience follows only with practice; the partner who matches candor with calm gives Aries the one thing it cannot win by force: staying power.',
    atWork:
      'At work Aries is the natural opener — new markets, new projects, the first draft. Give this energy a frontier and it thrives; give it maintenance and it rusts. It leads best when it also learns the art of the follow-through.',
  },
  {
    key: 'taurus',
    name: 'Taurus',
    glyph: '♉',
    element: 'Earth',
    modality: 'Fixed',
    ruler: 'venus',
    dates: 'Apr 20 – May 20',
    card: 5,
    keywords: ['Steadiness', 'Sensuality', 'Loyalty', 'Endurance'],
    essence:
      'Taurus is the garden that feeds everyone — the fixed earth sign where Aries’ spark becomes something that grows. Ruled by Venus and embodied in the Hierophant, Taurus values what lasts: craft, loyalty, comfort earned slowly. It moves at the speed of trust and builds lives of genuine substance, one brick of patience at a time.',
    shadow:
      'The Taurus shadow is the wall mistaken for the garden — stubbornness as identity, comfort hardening into inertia, possession dressed as love. When the Hierophant’s tradition becomes dogma, growth stops and the garden becomes a museum.',
    inLove:
      'In love Taurus is devoted, physical and constant. It does not love in fireworks but in full pantries and kept promises. The risk is possessiveness; the gift is a love that weathers decades without thinning.',
    atWork:
      'At work Taurus is the keeper of quality — the one who will not ship what is not finished. It prospers in roles with tangible results and a steady pace, and it becomes indispensable precisely because it cannot be rushed.',
  },
  {
    key: 'gemini',
    name: 'Gemini',
    glyph: '♊',
    element: 'Air',
    modality: 'Mutable',
    ruler: 'mercury',
    dates: 'May 21 – Jun 20',
    card: 6,
    keywords: ['Curiosity', 'Wit', 'Adaptability', 'Connection'],
    essence:
      'Gemini is the twin current of the mind — the mutable air sign that lives by exchange. Ruled by Mercury and embodied in the Lovers, it collects people, ideas and languages the way others collect things. Its genius is translation: it stands between worlds and connects them. Boredom is its only real enemy; conversation is its true home.',
    shadow:
      'The Gemini shadow is the twin who gossips about the other — scattered attention, charm without follow-through, intimacy traded for stimulation. When the Lovers’ choice is avoided forever, the result is a hundred almosts and no one real.',
    inLove:
      'In love Gemini needs a mind it cannot finish reading. It flirts the way it breathes, and it stays only where curiosity stays alive. The partner who offers both freedom and one true conversation holds this sign longer than any cage.',
    atWork:
      'At work Gemini is the switchboard — writing, trading, connecting, explaining. It shines in roles that reward range and speed and suffocates in repetition. Two projects at once is not multitasking for Gemini; it is the natural habitat.',
  },
  {
    key: 'cancer',
    name: 'Cancer',
    glyph: '♋',
    element: 'Water',
    modality: 'Cardinal',
    ruler: 'moon',
    dates: 'Jun 21 – Jul 22',
    card: 7,
    keywords: ['Nurturing', 'Memory', 'Protection', 'Intuition'],
    essence:
      'Cancer is the tide that remembers — the cardinal water sign ruled by the Moon and embodied in the Chariot. It is the zodiac’s home: the keeper of roots, recipes, grudges and safe harbors. Cancer energy leads by caring, and its famous shell is not weakness but the price of a heart that feels everything at full volume. Its intuition reads rooms before a word is spoken.',
    shadow:
      'The Cancer shadow is the tide that floods its own house — moodiness defended as depth, clinging renamed as loyalty, the past held so tightly it strangles the present. When the Chariot’s horses are emotion alone, the vehicle circles.',
    inLove:
      'In love Cancer builds shelter. It loves through food, memory and the slow trust of revealed softness. It needs a partner who treats its vulnerability as treasure, not leverage — and who understands that the shell opens only from within.',
    atWork:
      'At work Cancer excels where people or heritage are at stake — care, education, hospitality, anything with roots. Its memory for detail is unmatched, and its teams become families, for better and occasionally for worse.',
  },
  {
    key: 'leo',
    name: 'Leo',
    glyph: '♌',
    element: 'Fire',
    modality: 'Fixed',
    ruler: 'sun',
    dates: 'Jul 23 – Aug 22',
    card: 8,
    keywords: ['Radiance', 'Generosity', 'Drama', 'Loyalty'],
    essence:
      'Leo is the hearth the tribe gathers around — the fixed fire sign ruled by the Sun and embodied in Strength. It exists to warm, to encourage, to shine so that others feel licensed to shine too. Leo’s confidence is not vanity but fuel, and its generosity is legendary: it gives like the sun, without keeping receipts. The quietest Leo in the room is still, somehow, the center of it.',
    shadow:
      'The Leo shadow is warmth that demands worship — pride thinly skinned, generosity with invisible invoices, drama manufactured when the audience looks away. When Strength’s lion is not befriended, it must be fed constantly.',
    inLove:
      'In love Leo is grand, loyal and theatrical. It needs to be visibly chosen and freely admired — and in return it gives a devotion with parade drums. The partner who applauds the show and also sees the person behind it owns this heart outright.',
    atWork:
      'At work Leo leads from the front and lifts from the front. It thrives on visible responsibility and creative authorship; ignore its contributions and it dims, recognise them and it becomes your most tireless standard-bearer.',
  },
  {
    key: 'virgo',
    name: 'Virgo',
    glyph: '♍',
    element: 'Earth',
    modality: 'Mutable',
    ruler: 'mercury',
    dates: 'Aug 23 – Sep 22',
    card: 9,
    keywords: ['Precision', 'Service', 'Analysis', 'Humility'],
    essence:
      'Virgo is the craftsperson of the zodiac — the mutable earth sign ruled by Mercury and embodied in the Hermit. It takes the world’s chaos and returns it organised, healed, improved. Virgo sees the flaw no one else can see, which is both its genius and its burden: it came to be of use, and its love language is the finished detail. Solitude is not loneliness to Virgo; it is where the work gets good.',
    shadow:
      'The Virgo shadow is the magnifying glass turned inward — criticism as a nervous system, service that erases the self, purity standards no one can meet. When the Hermit’s lamp is aimed only at flaws, the world shrinks to a fault list.',
    inLove:
      'In love Virgo is devoted in deeds more than declarations. It notices everything about the beloved and improves what it can reach. It needs a partner who receives its care without exploiting it, and who gently returns the same precision of attention.',
    atWork:
      'At work Virgo is the quality engine — editing, healing, auditing, engineering. It is at its best with a real problem and a fair standard; at its worst when perfectionism makes the deadline the enemy of the excellent.',
  },
  {
    key: 'libra',
    name: 'Libra',
    glyph: '♎',
    element: 'Air',
    modality: 'Cardinal',
    ruler: 'venus',
    dates: 'Sep 23 – Oct 22',
    card: 11,
    keywords: ['Harmony', 'Fairness', 'Charm', 'Diplomacy'],
    essence:
      'Libra is the scales at the center of the zodiac — the cardinal air sign ruled by Venus and embodied in Justice. It lives for balance: in rooms, in arguments, in beauty. Libra’s gift is seeing every side at once, and its art is making the opposite sides want to sit down. This is the sign of the true diplomat, whose charm is a form of intelligence and whose fairness is a form of love.',
    shadow:
      'The Libra shadow is the scales that never land — indecision as a lifestyle, peace kept by self-erasure, charm deployed to avoid every honest edge. When Justice refuses to ever use the sword, the verdict is procrastination.',
    inLove:
      'In love Libra is romance itself — the gesture, the balance, the constant recalibration toward “us”. It hates crude conflict and blooms with a partner who argues fairly and admires openly. Alone, it must learn that its own scale counts too.',
    atWork:
      'At work Libra excels wherever judgement meets people: negotiation, design, law, partnership. It makes teams civil and products elegant; its growth edge is delivering the verdict, not just weighing it.',
  },
  {
    key: 'scorpio',
    name: 'Scorpio',
    glyph: '♏',
    element: 'Water',
    modality: 'Fixed',
    ruler: 'pluto',
    dates: 'Oct 23 – Nov 21',
    card: 13,
    keywords: ['Intensity', 'Secrets', 'Transformation', 'Loyalty'],
    essence:
      'Scorpio is the depths where the real things live — the fixed water sign embodied in Death. It feels at full pressure and thinks in secrets, and it came to transform, not to decorate. Scorpio energy penetrates: it cannot do small talk because it is listening to what is underneath. Loyalty here is absolute, endings here are total, and nothing about this sign is casual.',
    shadow:
      'The Scorpio shadow is the sting that poisons its own water — jealousy treated as love, control as protection, suspicion as intelligence. When Death’s transformation is refused, the same intensity turns septic.',
    inLove:
      'In love Scorpio merges or leaves — there is no middle temperature. It offers absolute loyalty and asks for total honesty, and it survives betrayal by becoming someone new. The partner who tells the truth gently holds a power few ever get.',
    atWork:
      'At work Scorpio is the investigator and the crisis manager — research, finance, surgery, strategy, anything where secrets and stakes are real. It never forgets a detail, and it finishes what others are afraid to start.',
  },
  {
    key: 'sagittarius',
    name: 'Sagittarius',
    glyph: '♐',
    element: 'Fire',
    modality: 'Mutable',
    ruler: 'jupiter',
    dates: 'Nov 22 – Dec 21',
    card: 14,
    keywords: ['Vision', 'Honesty', 'Adventure', 'Faith'],
    essence:
      'Sagittarius is the arrow already in flight — the mutable fire sign ruled by Jupiter and embodied in Temperance. It came for the horizon: truth, meaning, the bigger picture. Sagittarius is the zodiac’s philosopher-optimist, honest to a fault and restless by design. Its faith is not naivety but method: believe, aim, shoot, adjust, and trust the road to teach what the map could not.',
    shadow:
      'The Sagittarius shadow is the arrow with no target — bluntness renamed as honesty, appetite mistaken for purpose, philosophy used to avoid the tedious particular. When Temperance’s mixing is refused, the fire just burns wide.',
    inLove:
      'In love Sagittarius needs a fellow traveler. It commits best to someone who keeps the horizon interesting and the cage door open — a partner who is both home and road. Possession kills this love faster than any rival.',
    atWork:
      'At work Sagittarius thrives where vision matters: teaching, publishing, exploration, strategy. It needs room to roam and a reason bigger than the paycheck; corner it with routine and it will simply aim elsewhere.',
  },
  {
    key: 'capricorn',
    name: 'Capricorn',
    glyph: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    ruler: 'saturn',
    dates: 'Dec 22 – Jan 19',
    card: 15,
    keywords: ['Ambition', 'Discipline', 'Patience', 'Authority'],
    essence:
      'Capricorn is the mountain that decides to climb itself — the cardinal earth sign ruled by Saturn and embodied in the Devil. It is the zodiac’s master of time: it builds slowly, plans far, and outlasts. Capricorn energy respects earned authority and earned rest, and its ambition is not greed but geometry — a life that stands. Beneath the reserve runs a dry, surprising humor and a devotion to its people that only the inner circle ever sees.',
    shadow:
      'The Capricorn shadow is the mountain that owns its climber — work as identity, status as anesthesia, feeling postponed to a retirement that never arrives. When the Devil’s chains are renamed as “just responsibility”, the summit is a cage with a view.',
    inLove:
      'In love Capricorn is slow to open and impossible to shake once committed. It shows devotion through provision and loyalty more than poetry, and it needs a partner who can see the tenderness under the agenda — and who insists on play.',
    atWork:
      'At work Capricorn is the executive archetype — strategy, structure, long games. It rises by reliability and peaks by judgment. Its lesson is leadership that breathes: an empire staffed by the exhausted serves no one, least of all its builder.',
  },
  {
    key: 'aquarius',
    name: 'Aquarius',
    glyph: '♒',
    element: 'Air',
    modality: 'Fixed',
    ruler: 'uranus',
    dates: 'Jan 20 – Feb 18',
    card: 17,
    keywords: ['Originality', 'Idealism', 'Detachment', 'Invention'],
    essence:
      'Aquarius is the spark from the future — the fixed air sign embodied in the Star. It thinks in systems and dreams in revolutions; the group mind is its native language and the ideal its compass. Aquarius cares about humanity with a sincerity that can look, oddly, like distance: it loves the species loudly and the individual carefully. Its gift is the honest glimpse of what could be, poured like the Star’s water onto dry land.',
    shadow:
      'The Aquarius shadow is the tower with no stairs — contrarianism as identity, detachment defended as superiority, ideals held so purely that no real person can enter them. When the Star stops pouring and only observes, hope curdles into irony.',
    inLove:
      'In love Aquarius needs friendship first and cages never. It bonds through shared causes and strange jokes, and it stays where its originality is celebrated rather than managed. The partner who is both comrade and mystery keeps this heart interested for decades.',
    atWork:
      'At work Aquarius is the systems visionary — technology, reform, research, anything ahead of the curve. It excels when given an impossible brief and left alone with it; it fails when forced to respect a hierarchy it has already diagnosed as obsolete.',
  },
  {
    key: 'pisces',
    name: 'Pisces',
    glyph: '♓',
    element: 'Water',
    modality: 'Mutable',
    ruler: 'neptune',
    dates: 'Feb 19 – Mar 20',
    card: 18,
    keywords: ['Empathy', 'Imagination', 'Spirituality', 'Fluidity'],
    essence:
      'Pisces is the ocean the zodiac dissolves into — the mutable water sign embodied in the Moon. It feels the collective mood the way a body of water feels weather, and it creates from that permeability: art, music, mercy, dream. Pisces has no walls by default, which is its holiness and its hazard. Its path is learning to be the ocean with a shoreline — infinite inside, bounded where it counts.',
    shadow:
      'The Pisces shadow is the ocean with no floor — escapism as spiritual practice, victimhood as gravity, boundaries dissolved until there is no self left to save. When the Moon’s fog is never questioned, compassion becomes a slow leak.',
    inLove:
      'In love Pisces loves absolutely and must learn to choose where it pours. It bonds soul-first, forgives too easily, and needs a partner who anchors without hardening — someone who keeps the shore real so the ocean can stay beautiful.',
    atWork:
      'At work Pisces thrives where meaning and imagination lead: art, care, healing, anything that transmutes feeling into form. It needs structure borrowed from the outside — a good manager, a firm calendar — because left alone it will drift toward what moves it most.',
  },
]

export function getSign(key: string): SignInfo {
  const s = SIGNS.find((x) => x.key === key)
  if (!s) throw new Error(`Unknown sign: ${key}`)
  return s
}

export function signAt(absDegree: number): SignInfo {
  const idx = Math.floor((((absDegree % 360) + 360) % 360) / 30) % 12
  return SIGNS[idx]
}

/* ── The 12 houses ─────────────────────────────────────────────── */

export interface HouseInfo {
  number: number
  name: string
  theme: string
  keywords: string[]
  description: string
  /** What it means to have a planet (or many) here */
  occupied: string
}

export const HOUSES: HouseInfo[] = [
  {
    number: 1,
    name: 'The House of Self',
    theme: 'Identity, body, first impressions',
    keywords: ['Identity', 'Appearance', 'Approach to life'],
    description:
      'The first house is the face you wear and the door you enter through. Its sign — the Ascendant — is the costume of your entire chart: how you move, how you look, how you instinctively begin. Planets here speak first and loudest; they describe what people meet before they meet you.',
    occupied:
      'Planets in the first house color everything you do — they become part of your identity, impossible to hide and exhausting to fake. The birth card of this house’s sign walks beside you like a second shadow.',
  },
  {
    number: 2,
    name: 'The House of Value',
    theme: 'Money, possessions, self-worth',
    keywords: ['Resources', 'Income', 'Self-esteem'],
    description:
      'The second house is what you own and what owns you: income, belongings, and the quieter ledger of self-worth. It shows how you earn, how you spend, and what you believe you deserve. Security built here is the foundation every other house stands on.',
    occupied:
      'Planets here turn their energy toward acquisition and self-valuation — they describe how you make your living and where your sense of enough lives.',
  },
  {
    number: 3,
    name: 'The House of the Mind',
    theme: 'Communication, siblings, short journeys',
    keywords: ['Speech', 'Learning', 'Local life'],
    description:
      'The third house is the neighborhood of the chart: siblings, schoolmates, errands, messages, the daily traffic of the mind. It rules how you think out loud, how you learn, and how you move through your immediate world.',
    occupied:
      'Planets here make their energy conversational and mobile — they live in your voice, your habits, your everyday comings and goings.',
  },
  {
    number: 4,
    name: 'The House of Home',
    theme: 'Roots, family, the private self',
    keywords: ['Family', 'Ancestry', 'Foundations'],
    description:
      'The fourth house is midnight of the chart — the nadir, the deepest point. It holds family, ancestry, the home you came from and the home you build. Here lives everything you are when no one is watching: your roots, your rest, your unfinished business with the past.',
    occupied:
      'Planets here root their energy in private life — they shape the home, the relationship with parents and lineage, and the foundation under everything public.',
  },
  {
    number: 5,
    name: 'The House of Joy',
    theme: 'Creativity, romance, children, play',
    keywords: ['Pleasure', 'Art', 'Romance', 'Risk'],
    description:
      'The fifth house is the playground and the stage: what you create for love of it, who you love for the thrill of it, the children of your body and of your imagination. It governs play, art, romance and the risks taken purely for delight. A chart with no planets here still needs this house honored — joy is not optional.',
    occupied:
      'Planets here turn creative and romantic — they express themselves through art, pleasure, courtship and the raising of what you have made.',
  },
  {
    number: 6,
    name: 'The House of Craft',
    theme: 'Work, health, daily service',
    keywords: ['Routine', 'Skill', 'Wellbeing'],
    description:
      'The sixth house is the workshop: daily work, habits, health, the craft of maintaining a life. It shows how you serve, how you keep yourself running, and which routines heal or grind you. Small and unglamorous, this house decides more of a life’s quality than any other.',
    occupied:
      'Planets here dedicate themselves to the everyday — they shape your work style, your health patterns and your relationship with service.',
  },
  {
    number: 7,
    name: 'The House of Others',
    theme: 'Partnership, marriage, open enemies',
    keywords: ['Marriage', 'Contracts', 'The Other'],
    description:
      'The seventh house is the mirror: the partners you choose — in love, business and conflict. Opposite the first house of self, it holds what you project onto others and what you seek to complete you. Its sign describes the spouse, the business partner, and the qualities you disown until they arrive wearing someone else’s face.',
    occupied:
      'Planets here live through relationship — they define what you seek in others, how you contract, and what your partnerships keep teaching you.',
  },
  {
    number: 8,
    name: 'The House of Depth',
    theme: 'Shared resources, death, sexuality, transformation',
    keywords: ['Intimacy', 'Inheritance', 'Crisis', 'Power'],
    description:
      'The eighth house is the cellar and the vault: other people’s money, inheritance, death, sex, and every transformation that requires a death first. It rules what merges — debts, estates, bodies, souls — and what rises from the underworld changed. No planet visits this house casually.',
    occupied:
      'Planets here go underground and come back transformed — they bring intensity, crisis and power to everything they touch, and they must learn to let the dead things die.',
  },
  {
    number: 9,
    name: 'The House of the Horizon',
    theme: 'Philosophy, travel, higher learning, faith',
    keywords: ['Belief', 'Long journeys', 'Teaching'],
    description:
      'The ninth house is the chart’s window on the far distance: foreign lands, universities, religions, publishing, the great frameworks of meaning. It asks what you believe and how far you will travel to test it. Opposite the third house of the neighborhood, it is the rest of the map.',
    occupied:
      'Planets here think big — they push toward travel, study, teaching and faith, and they suffer in rooms with low ceilings.',
  },
  {
    number: 10,
    name: 'The House of Standing',
    theme: 'Career, reputation, public life',
    keywords: ['Vocation', 'Achievement', 'Authority'],
    description:
      'The tenth house is noon of the chart — the Midheaven, the highest point. It holds career, reputation, public achievement and the authority you earn or resist. This is the life you build on purpose, the name you leave, the summit the whole chart climbs toward.',
    occupied:
      'Planets here drive ambition — they define your public path, your relationship with achievement, and what you will be known for.',
  },
  {
    number: 11,
    name: 'The House of the Circle',
    theme: 'Friends, groups, hopes, the future',
    keywords: ['Community', 'Allies', 'Dreams'],
    description:
      'The eleventh house is the tribe: friends, networks, movements, and the future you are building with others. It shows where you belong and what you hope for — the audience, the alliance, the common cause. If the fifth house is what you create, the eleventh is what the world creates back.',
    occupied:
      'Planets here organize themselves through groups and ideals — they describe your friendships, your causes and the future you are pulling toward.',
  },
  {
    number: 12,
    name: 'The House of the Unseen',
    theme: 'The subconscious, solitude, hidden matters, transcendence',
    keywords: ['Dreams', 'Secrets', 'Surrender'],
    description:
      'The twelfth house is the ocean floor of the chart: the unconscious, hidden enemies and hidden helpers, solitude, institutions, and everything that dissolves the self. It is the house of retreat and of grace — where ego surrenders and something larger speaks. Planets here work in secret, or work on the soul.',
    occupied:
      'Planets here operate below the waterline — they bring hidden strengths, private sorrows and spiritual depth, and they ask for retreat the way other houses ask for effort.',
  },
]

export function getHouse(n: number): HouseInfo {
  const h = HOUSES.find((x) => x.number === n)
  if (!h) throw new Error(`Unknown house: ${n}`)
  return h
}

/* ── Planets & points ──────────────────────────────────────────── */

export interface PlanetInfo {
  key: string
  name: string
  glyph: string
  keywords: string[]
  meaning: string
  /** The Major Arcana that carries this planet (Golden Dawn + modern outers) */
  card: number
  /** How it behaves in synastry scoring */
  weight: number
}

export const PLANETS: PlanetInfo[] = [
  {
    key: 'sun',
    name: 'Sun',
    glyph: '☉',
    keywords: ['Identity', 'Vitality', 'The will to be'],
    meaning:
      'The Sun is the core of the chart — ego, essence, the life force you radiate. In tarot it is the Sun card itself: legitimacy, warmth, the simple courage to exist out loud.',
    card: 19,
    weight: 3,
  },
  {
    key: 'moon',
    name: 'Moon',
    glyph: '☽',
    keywords: ['Emotion', 'Instinct', 'The private self'],
    meaning:
      'The Moon is the tide beneath the Sun — feelings, needs, the child you still are at 3 a.m. In tarot it is the High Priestess: intuition, memory, the knowledge that arrives without words.',
    card: 2,
    weight: 3,
  },
  {
    key: 'mercury',
    name: 'Mercury',
    glyph: '☿',
    keywords: ['Mind', 'Speech', 'Exchange'],
    meaning:
      'Mercury is the messenger — thought, language, trade, the nervous system of the chart. In tarot it is the Magician: wit, translation, the hand that turns idea into act.',
    card: 1,
    weight: 1.5,
  },
  {
    key: 'venus',
    name: 'Venus',
    glyph: '♀',
    keywords: ['Love', 'Beauty', 'Attraction'],
    meaning:
      'Venus is what you love and how you love it — attraction, taste, values, the art of receiving. In tarot it is the Empress: fertility, pleasure, the magnetism of genuine worth.',
    card: 3,
    weight: 2.5,
  },
  {
    key: 'mars',
    name: 'Mars',
    glyph: '♂',
    keywords: ['Drive', 'Anger', 'Desire'],
    meaning:
      'Mars is the blade and the engine — desire, aggression, the will to pursue. In tarot it is the Tower: force that clears, breaks and ignites.',
    card: 16,
    weight: 2.5,
  },
  {
    key: 'jupiter',
    name: 'Jupiter',
    glyph: '♃',
    keywords: ['Expansion', 'Luck', 'Faith'],
    meaning:
      'Jupiter is the great benefic — growth, meaning, generosity, the door that opens. In tarot it is the Wheel of Fortune: the turn that favors the prepared.',
    card: 10,
    weight: 1.5,
  },
  {
    key: 'saturn',
    name: 'Saturn',
    glyph: '♄',
    keywords: ['Structure', 'Time', 'Consequence'],
    meaning:
      'Saturn is the lord of time — discipline, limits, the teacher that grades slowly but fairly. In tarot it is the World: mastery earned at the end of the full circle.',
    card: 21,
    weight: 1.5,
  },
  {
    key: 'uranus',
    name: 'Uranus',
    glyph: '♅',
    keywords: ['Disruption', 'Freedom', 'Invention'],
    meaning:
      'Uranus is the lightning of the modern sky — rupture, originality, the future breaking in. In tarot it is the Fool: the leap no logic would approve and no progress avoids.',
    card: 0,
    weight: 1,
  },
  {
    key: 'neptune',
    name: 'Neptune',
    glyph: '♆',
    keywords: ['Dreams', 'Dissolution', 'Mysticism'],
    meaning:
      'Neptune is the ocean of the collective — dreams, art, deception, devotion, everything that blurs the border. In tarot it is the Hanged Man: surrender that sees upside down and finds truth.',
    card: 12,
    weight: 1,
  },
  {
    key: 'pluto',
    name: 'Pluto',
    glyph: '♇',
    keywords: ['Power', 'Death & rebirth', 'The underworld'],
    meaning:
      'Pluto is the underworld’s landlord — power, destruction, regeneration, what rises from the ashes owning itself. In tarot it is Judgement: the trumpet that ends one self and summons the next.',
    card: 20,
    weight: 1,
  },
]

export function getPlanet(key: string): PlanetInfo | undefined {
  return PLANETS.find((p) => p.key === key)
}

/* ── Decans: 36 ten-degree slices ↔ Minor Arcana 2–10 ──────────── */

const SUIT_BY_ELEMENT: Record<Element, Suit> = {
  Fire: 'Wands',
  Earth: 'Pentacles',
  Air: 'Swords',
  Water: 'Cups',
}

/** Chaldean order of decan rulers, starting at 0° Aries */
const DECAN_RULERS = ['mars', 'sun', 'venus', 'mercury', 'moon', 'saturn', 'jupiter'] as const

export interface DecanCard {
  suit: Suit
  num: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  name: string
  ruler: string
  rulerName: string
  /** e.g. "10° – 20°" within the sign */
  span: string
}

function decanNumber(sign: SignInfo, decanIndex: number): DecanCard['num'] {
  const group: Record<Modality, number> = { Cardinal: 0, Fixed: 1, Mutable: 2 }
  return (2 + group[sign.modality] * 3 + decanIndex) as DecanCard['num']
}

/** The Minor Arcana card corresponding to an absolute ecliptic degree. */
export function decanAt(absDegree: number): { sign: SignInfo; decan: DecanCard } {
  const d = ((absDegree % 360) + 360) % 360
  const sign = signAt(d)
  const decanIndex = Math.floor((d % 30) / 10)
  const globalDecan = Math.floor(d / 10)
  const rulerKey = DECAN_RULERS[globalDecan % 7]
  const ruler = getPlanet(rulerKey)
  const num = decanNumber(sign, decanIndex)
  return {
    sign,
    decan: {
      suit: SUIT_BY_ELEMENT[sign.element],
      num,
      name: `${num} of ${SUIT_BY_ELEMENT[sign.element]}`,
      ruler: rulerKey,
      rulerName: ruler?.name ?? rulerKey,
      span: `${decanIndex * 10}° – ${decanIndex * 10 + 10}°`,
    },
  }
}

/* ── Element & modality relations (synastry) ───────────────────── */

export function elementRelation(a: Element, b: Element): 'harmonious' | 'neutral' | 'friction' {
  if (a === b) return 'harmonious'
  const pairs: [Element, Element][] = [
    ['Fire', 'Air'],
    ['Air', 'Fire'],
    ['Earth', 'Water'],
    ['Water', 'Earth'],
  ]
  return pairs.some(([x, y]) => x === a && y === b) ? 'harmonious' : 'friction'
}

export const ELEMENTS: Element[] = ['Fire', 'Earth', 'Air', 'Water']

/* ── City list for the birth-place picker (lat / lng) ──────────── */

export interface City {
  name: string
  country: string
  lat: number
  lng: number
}

export const CITIES: City[] = [
  // Brazil — state capitals
  { name: 'São Paulo', country: 'Brazil', lat: -23.55, lng: -46.63 },
  { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.91, lng: -43.17 },
  { name: 'Brasília', country: 'Brazil', lat: -15.79, lng: -47.88 },
  { name: 'Salvador', country: 'Brazil', lat: -12.98, lng: -38.51 },
  { name: 'Fortaleza', country: 'Brazil', lat: -3.73, lng: -38.52 },
  { name: 'Recife', country: 'Brazil', lat: -8.05, lng: -34.9 },
  { name: 'Belém', country: 'Brazil', lat: -1.46, lng: -48.49 },
  { name: 'Manaus', country: 'Brazil', lat: -3.12, lng: -60.02 },
  { name: 'Belo Horizonte', country: 'Brazil', lat: -19.92, lng: -43.94 },
  { name: 'Curitiba', country: 'Brazil', lat: -25.43, lng: -49.27 },
  { name: 'Porto Alegre', country: 'Brazil', lat: -30.03, lng: -51.23 },
  { name: 'Goiânia', country: 'Brazil', lat: -16.68, lng: -49.25 },
  { name: 'Campo Grande', country: 'Brazil', lat: -20.44, lng: -54.65 },
  { name: 'Cuiabá', country: 'Brazil', lat: -15.6, lng: -56.1 },
  { name: 'Florianópolis', country: 'Brazil', lat: -27.59, lng: -48.55 },
  { name: 'Vitória', country: 'Brazil', lat: -20.32, lng: -40.34 },
  { name: 'São Luís', country: 'Brazil', lat: -2.53, lng: -44.3 },
  { name: 'Teresina', country: 'Brazil', lat: -5.09, lng: -42.8 },
  { name: 'Natal', country: 'Brazil', lat: -5.79, lng: -35.21 },
  { name: 'João Pessoa', country: 'Brazil', lat: -7.12, lng: -34.84 },
  { name: 'Maceió', country: 'Brazil', lat: -9.67, lng: -35.74 },
  { name: 'Aracaju', country: 'Brazil', lat: -10.91, lng: -37.07 },
  { name: 'Palmas', country: 'Brazil', lat: -10.24, lng: -48.36 },
  { name: 'Porto Velho', country: 'Brazil', lat: -8.76, lng: -63.9 },
  { name: 'Rio Branco', country: 'Brazil', lat: -9.97, lng: -67.81 },
  { name: 'Boa Vista', country: 'Brazil', lat: 2.82, lng: -60.67 },
  { name: 'Macapá', country: 'Brazil', lat: 0.04, lng: -51.07 },
  // Portugal
  { name: 'Lisbon', country: 'Portugal', lat: 38.72, lng: -9.14 },
  { name: 'Porto', country: 'Portugal', lat: 41.16, lng: -8.63 },
  // Latin America
  { name: 'Buenos Aires', country: 'Argentina', lat: -34.6, lng: -58.38 },
  { name: 'Santiago', country: 'Chile', lat: -33.45, lng: -70.67 },
  { name: 'Lima', country: 'Peru', lat: -12.05, lng: -77.04 },
  { name: 'Bogotá', country: 'Colombia', lat: 4.71, lng: -74.07 },
  { name: 'Quito', country: 'Ecuador', lat: -0.18, lng: -78.47 },
  { name: 'Caracas', country: 'Venezuela', lat: 10.49, lng: -66.88 },
  { name: 'Montevideo', country: 'Uruguay', lat: -34.9, lng: -56.16 },
  { name: 'Asunción', country: 'Paraguay', lat: -25.26, lng: -57.58 },
  { name: 'La Paz', country: 'Bolivia', lat: -16.5, lng: -68.15 },
  { name: 'Mexico City', country: 'Mexico', lat: 19.43, lng: -99.13 },
  { name: 'Guadalajara', country: 'Mexico', lat: 20.66, lng: -103.35 },
  { name: 'Monterrey', country: 'Mexico', lat: 25.69, lng: -100.32 },
  { name: 'Havana', country: 'Cuba', lat: 23.11, lng: -82.37 },
  { name: 'San José', country: 'Costa Rica', lat: 9.93, lng: -84.08 },
  { name: 'Panama City', country: 'Panama', lat: 8.98, lng: -79.52 },
  { name: 'Santo Domingo', country: 'Dominican Republic', lat: 18.49, lng: -69.9 },
  { name: 'Guatemala City', country: 'Guatemala', lat: 14.63, lng: -90.55 },
  // North America
  { name: 'New York', country: 'USA', lat: 40.71, lng: -74.01 },
  { name: 'Los Angeles', country: 'USA', lat: 34.05, lng: -118.24 },
  { name: 'Chicago', country: 'USA', lat: 41.88, lng: -87.63 },
  { name: 'Houston', country: 'USA', lat: 29.76, lng: -95.37 },
  { name: 'Miami', country: 'USA', lat: 25.76, lng: -80.19 },
  { name: 'San Francisco', country: 'USA', lat: 37.77, lng: -122.42 },
  { name: 'Boston', country: 'USA', lat: 42.36, lng: -71.06 },
  { name: 'Seattle', country: 'USA', lat: 47.61, lng: -122.33 },
  { name: 'Atlanta', country: 'USA', lat: 33.75, lng: -84.39 },
  { name: 'Toronto', country: 'Canada', lat: 43.65, lng: -79.38 },
  { name: 'Vancouver', country: 'Canada', lat: 49.28, lng: -123.12 },
  { name: 'Montreal', country: 'Canada', lat: 45.5, lng: -73.57 },
  // Europe
  { name: 'London', country: 'UK', lat: 51.51, lng: -0.13 },
  { name: 'Manchester', country: 'UK', lat: 53.48, lng: -2.24 },
  { name: 'Dublin', country: 'Ireland', lat: 53.35, lng: -6.26 },
  { name: 'Paris', country: 'France', lat: 48.86, lng: 2.35 },
  { name: 'Lyon', country: 'France', lat: 45.76, lng: 4.84 },
  { name: 'Marseille', country: 'France', lat: 43.3, lng: 5.37 },
  { name: 'Berlin', country: 'Germany', lat: 52.52, lng: 13.4 },
  { name: 'Munich', country: 'Germany', lat: 48.14, lng: 11.58 },
  { name: 'Hamburg', country: 'Germany', lat: 53.55, lng: 9.99 },
  { name: 'Madrid', country: 'Spain', lat: 40.42, lng: -3.7 },
  { name: 'Barcelona', country: 'Spain', lat: 41.39, lng: 2.17 },
  { name: 'Rome', country: 'Italy', lat: 41.9, lng: 12.5 },
  { name: 'Milan', country: 'Italy', lat: 45.46, lng: 9.19 },
  { name: 'Amsterdam', country: 'Netherlands', lat: 52.37, lng: 4.9 },
  { name: 'Brussels', country: 'Belgium', lat: 50.85, lng: 4.35 },
  { name: 'Vienna', country: 'Austria', lat: 48.21, lng: 16.37 },
  { name: 'Zurich', country: 'Switzerland', lat: 47.38, lng: 8.54 },
  { name: 'Geneva', country: 'Switzerland', lat: 46.2, lng: 6.14 },
  { name: 'Copenhagen', country: 'Denmark', lat: 55.68, lng: 12.57 },
  { name: 'Stockholm', country: 'Sweden', lat: 59.33, lng: 18.07 },
  { name: 'Oslo', country: 'Norway', lat: 59.91, lng: 10.75 },
  { name: 'Helsinki', country: 'Finland', lat: 60.17, lng: 24.94 },
  { name: 'Reykjavik', country: 'Iceland', lat: 64.15, lng: -21.94 },
  { name: 'Warsaw', country: 'Poland', lat: 52.23, lng: 21.01 },
  { name: 'Prague', country: 'Czechia', lat: 50.08, lng: 14.44 },
  { name: 'Budapest', country: 'Hungary', lat: 47.5, lng: 19.04 },
  { name: 'Athens', country: 'Greece', lat: 37.98, lng: 23.73 },
  { name: 'Istanbul', country: 'Turkey', lat: 41.01, lng: 28.98 },
  { name: 'Moscow', country: 'Russia', lat: 55.76, lng: 37.62 },
  { name: 'Kyiv', country: 'Ukraine', lat: 50.45, lng: 30.52 },
  // Africa & Middle East
  { name: 'Cairo', country: 'Egypt', lat: 30.04, lng: 31.24 },
  { name: 'Lagos', country: 'Nigeria', lat: 6.52, lng: 3.38 },
  { name: 'Nairobi', country: 'Kenya', lat: -1.29, lng: 36.82 },
  { name: 'Cape Town', country: 'South Africa', lat: -33.92, lng: 18.42 },
  { name: 'Johannesburg', country: 'South Africa', lat: -26.2, lng: 28.05 },
  { name: 'Casablanca', country: 'Morocco', lat: 33.57, lng: -7.59 },
  { name: 'Tel Aviv', country: 'Israel', lat: 32.08, lng: 34.78 },
  { name: 'Jerusalem', country: 'Israel', lat: 31.77, lng: 35.21 },
  { name: 'Dubai', country: 'UAE', lat: 25.2, lng: 55.27 },
  { name: 'Doha', country: 'Qatar', lat: 25.29, lng: 51.53 },
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.71, lng: 46.68 },
  { name: 'Tehran', country: 'Iran', lat: 35.69, lng: 51.39 },
  // Asia & Oceania
  { name: 'Tokyo', country: 'Japan', lat: 35.68, lng: 139.69 },
  { name: 'Osaka', country: 'Japan', lat: 34.69, lng: 135.5 },
  { name: 'Seoul', country: 'South Korea', lat: 37.57, lng: 126.98 },
  { name: 'Beijing', country: 'China', lat: 39.9, lng: 116.41 },
  { name: 'Shanghai', country: 'China', lat: 31.23, lng: 121.47 },
  { name: 'Hong Kong', country: 'China', lat: 22.32, lng: 114.17 },
  { name: 'Taipei', country: 'Taiwan', lat: 25.03, lng: 121.57 },
  { name: 'Bangkok', country: 'Thailand', lat: 13.76, lng: 100.5 },
  { name: 'Singapore', country: 'Singapore', lat: 1.35, lng: 103.82 },
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.14, lng: 101.69 },
  { name: 'Jakarta', country: 'Indonesia', lat: -6.21, lng: 106.85 },
  { name: 'Manila', country: 'Philippines', lat: 14.6, lng: 120.98 },
  { name: 'Mumbai', country: 'India', lat: 19.08, lng: 72.88 },
  { name: 'Delhi', country: 'India', lat: 28.61, lng: 77.21 },
  { name: 'Bangalore', country: 'India', lat: 12.97, lng: 77.59 },
  { name: 'Sydney', country: 'Australia', lat: -33.87, lng: 151.21 },
  { name: 'Melbourne', country: 'Australia', lat: -37.81, lng: 144.96 },
  { name: 'Brisbane', country: 'Australia', lat: -27.47, lng: 153.03 },
  { name: 'Perth', country: 'Australia', lat: -31.95, lng: 115.86 },
  { name: 'Auckland', country: 'New Zealand', lat: -36.85, lng: 174.76 },
]

export function findCity(query: string): City | null {
  const q = query.trim().toLowerCase()
  if (!q) return null
  return (
    CITIES.find(
      (c) => c.name.toLowerCase() === q || `${c.name}, ${c.country}`.toLowerCase() === q,
    ) ??
    CITIES.find(
      (c) =>
        c.name.toLowerCase().startsWith(q) || `${c.name} ${c.country}`.toLowerCase().startsWith(q),
    ) ??
    CITIES.find(
      (c) =>
        c.name.toLowerCase().includes(q) || `${c.name} ${c.country}`.toLowerCase().includes(q),
    ) ??
    null
  )
}
