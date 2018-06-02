
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

const metals = require('./components/metals');
const blades = require('./components/blades');

const bonuses = [
    'Its pommel is set with a gem',
    'From its handle hangs a colorful tassel',
    'It\s been engraved with a single rune',
    'It has many runes engraved along it',
    'It is engraved with twisting vines',
    'Engraved on it is someone\s crest',
    'It has many ticks and scratches',
    'It seems to hum slightly',
    'It seems to glitter',
    'It feels slightly cool to touch',
    'It feels a little warm to touch',
    'It cuts the air noiselessly',
    'The air around it seems to shimmer',
    'It feels lighter than it looks'
]

const types = [
    {
        typeName: getRandomFrom(['handaxe']),
        stats: 'Handaxe, 1d6 slashing. Light, thrown (range 20/60).'},
    {
        typeName: getRandomFrom(['battleaxe']),
        stats: 'Battleaxe, 1d8 slashing. Versatile (1d10).'},
    {
        typeName: getRandomFrom(['greataxe']),
        stats: 'Greataxe, 1d12 slashing. Heavy, two-handed.'},
]


const axe = () => {
    const type = getRandomFrom(types);
    const blade = getRandomFrom(blades);
    const metal = getRandomFrom(metals);
    const bonus = getRandomFrom(bonuses);
    return weapon = {
        typeName: type.typeName,
        description: `This is a ${type.typeName} with ${blade}, ${metal} blade. ${bonus}.`,
        stats: type.stats
    }
}

module.exports = axe;