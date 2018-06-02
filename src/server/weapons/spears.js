
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

const metals = require('./components/metals');
const blades = require('./components/blades');
const shafts = require('./components/shafts');

const bonuses = [
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
        typeName: getRandomFrom(['spear']),
        stats: 'Spear, 1d6 piercing. Thrown (range 20/60, versatile (1d8).'},
    {
        typeName: getRandomFrom(['javelin']),
        stats: 'Javelin, 1d6 piercing. Thrown (range 30/120).'},
    {
        typeName: getRandomFrom(['halberd', 'voulge', 'glaive', 'bardiche', 'war scythe']),
        stats: 'Halberd, 1d10 slashing. Heavy, reach, two-handed.'},
    {
        typeName: getRandomFrom(['lance']),
        stats: 'Lance, 1d12 piercing. Reach, special.'},
    {
        typeName: getRandomFrom(['pike', 'spetum']),
        stats: 'Pike, 1d10 piercing. Heavy, reach, two-handed.'},
    {
        typeName: getRandomFrom(['trident']),
        stats: 'Trident, 1d6 piercing. Thrown (range 20/60, versatile (1d8).'},

]

const spear = () => {
    const type = getRandomFrom(types);
    //const blade = getRandomFrom(blades);    // halberds and lances can have blades....
    const shaft = getRandomFrom(shafts);
    const metal = getRandomFrom(metals);
    const bonus = getRandomFrom(bonuses);
    return weapon = {
        typeName: type.typeName,
        description: `This is a ${shaft} ${type.typeName} with a ${metal} head. ${bonus}.`,
        stats: type.stats
    }
}

module.exports = spear;