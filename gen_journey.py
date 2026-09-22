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
