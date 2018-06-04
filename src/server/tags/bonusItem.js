
// Master LIst
// all sublists also draw from this

const itemBonuses = [
    'It\s been engraved with a single rune.',
    'It has many runes engraved along it.',
    'It is engraved with twisting vines.',
    'Engraved on it is someone\s crest.',
    'It has many ticks and scratches.',
    'It seems to hum slightly.',
    'It seems to glitter.',
    'It feels slightly cool to touch.',
    'It feels a little warm to touch.',
    'The air around it seems to shimmer.',
    'It feels lighter than it looks.'
]

// Sublists

const swordBonuses = itemBonuses.concat([
    'Its pommel is set with a gem.',
    'The crossguard is sharp and geometric.',
    'The crossguard is intricately twisted.',
    'Cruel spikes jut from its crossguard.',
    'Its crossguard splays out like feathered wings.',
    'From its handle hangs a colorful tassel.',
    'It cuts the air noiselessly.',
])

const spearBonuses = itemBonuses.concat([
    'The entire legnth is wrapped in bright silk.',
    'No matter how much force is applied, the shaft won\'t bend at all.'
])

const axeBonuses = itemBonuses.concat([
    'A deadly spike juts from the end of its shaft.',
    'It cuts the air noiselessly.',
])

const hammerBonuses = itemBonuses.concat([
    'Jutting from the back of its head is a long, terrible spike.',
    'It\s face bears the carving of a snarling lion.',
    'The head is oddly rounded.',
    'It\s face bears many tiny spikes.'
])

module.exports = {
    master: itemBonuses,
    sword: swordBonuses,
    spear: spearBonuses,
    axe: axeBonuses,
    hammer: hammerBonuses
};
