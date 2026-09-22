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
    text: 'In a walled garden that feels like the first morning of the world, the Fool meets a girl, and everything he thought the road was about changes. Beneath a radiant cloud a winged angel spreads its arms over the two of them and over the two trees beside them — one hung with fruit and a serpent, one crowned with living flame. This is where he learns what the Lovers truly are: not a person, but a choice made in front of one. Love, temptation and the open road — he cannot keep all three unchanged. So he lays down his bindle and lets his things go, and chooses the girl. And in the choosing, his small white dog slips away into the garden and is lost — the first price of love, though he does not yet know he has paid it. He leaves the garden with empty hands and a full heart, and for the first time the road behind him forks and closes.',
    image: img(6),
  },
  7: {
    num: 7,
    role: 'Trial',
    title: 'The Fool Meets the Chariot',
    place: 'A battlefield plain outside walled cities',
    text: 'On a plain scarred by wheels, a charioteer in stone armor stands motionless in his chariot while two sphinxes — one black, one white — pull in opposite directions. And then the Fool understands with a jolt: the rider is himself, grown into a man, armored by everything the road has taught him. The drive he has found makes him formidable — but it has also made him single-minded. He holds both sphinxes by sheer will, and will alone does not know where it is going. There are no reins in his hands, only resolve. The young Fool watches the wheels thunder past and sees his own future barreling by — fierce, unstoppable, and aimed at a destination he never stopped to choose. This meeting leaves him wary: drive without direction is only a faster way to be lost.',
    image: img(7),
  },
  8: {
    num: 8,
    role: 'Friend',
    title: 'The Fool Meets Strength',
    place: 'A sunny meadow at the edge of a deep forest',
    text: 'In a meadow washed with gold, a great lion blocks the path — mane wild, jaws open, every line of it fury. And the Fool, no longer the boy who would have reached for his stick, walks straight up to it. This is Strength, and it is his own: the kind he found through compassion and quiet resilience, not by striking but by staying. He takes the lion’s jaws in his hands and closes them gently, patiently, without a single drop of blood, while the sign of infinity floats above his head — because the beast was never his enemy, only his own fierceness, asking to be befriended. And there at the edge of the meadow, drawn back by that same gentleness, his small white dog returns to him and stops trembling. He leaves with a new definition of courage: not the absence of the beast, but the friendship with it.',
    image: img(8),
  },
  9: {
    num: 9,
    role: 'Guide',
    title: 'The Fool Becomes the Hermit',
    place: 'A snowy peak at night, one small light in the dark',
    text: 'The road narrows to a path of snow, and the Fool climbs alone — for on this part of the mountain there is no one to meet. No hooded figure waits ahead, no lantern swings in the dark. There is only the cold, the quiet, and the long white slope. He does not meet the Hermit. He becomes him. The change comes as naturally as weather: a lantern is suddenly in his hand with a six-pointed star burning inside it, and the whole road he has walked settles into his bones. Three lives are gathered in that one small light. The bright-eyed young man who danced onto the road with nothing but a flower in his cap. The armored adult who drove his chariot with fierce drive and tamed the lion through compassion and quiet strength. And now this — the hermit, who has walked past every battlefield and every meadow, carrying his own light up into the dark. He does not come down for anyone and does not wait; the light simply stays visible, and that is the whole invitation. Somewhere far below, he senses another traveler beginning to follow the glow, and he understands the last difference there is to learn: one is loneliness, an emptiness — the other is solitude, a lamp.',
    image: img(9),
  },
  10: {
    num: 10,
    role: 'Trial',
    title: 'The Fool Meets the Wheel of Fortune',
    place: 'A starlit peak, a vision of infinity, a golden wheel turning in the sky',
    text: 'Alone on his starlit peak, the Hermit lifts his lantern one last time — and the night opens. He sees it all at once: the road behind him and the road ahead, the maiden, the lion, the dog he lost and found again, every meeting woven into one endless pattern that turns back on itself like a figure of eight laid on its side. Infinity — and how all things connect. Then the pattern gathers into a great golden wheel turning slowly in the sky, winged creatures reading upon its clouds. From the wheel’s still center comes an offer no lantern could have found: to step back onto the rim, to be made a young lad once more, and to walk the turning world again. The old man smiles. The wheel turns — and the Fool is ready.',
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
