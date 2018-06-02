
const metals = require('./components/metals');
const blades = require('./components/blades');

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');


const bonuses = [
    'Its pommel is set with a gem',
    'The crossguard is sharp and geometric',
    'The crossguard is intricately twisted',
    'Cruel spikes jut from its crossguard',
    'Its crossguard splays out like feathered wings',
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
        typeName: getRandomFrom(['longsword', 'flamberge', 'bastard sword', 'broadsword']),
        stats: 'Longsword, 1d8 slashing. Versatile (1d10).'},
    {
        typeName: getRandomFrom(['shortsword', 'spatha']),
        stats: 'Shortsword, 1d6 piercing. Finesse, light.'},
    {
        typeName: getRandomFrom(['greatsword', 'claymore', 'Zweihander']),
        stats: 'Greatsword, 2d6 slashing. Heavy, two-handed.'},
    {
        typeName: getRandomFrom(['scimitar', 'falchion', 'machete', 'cutlass']),
        stats: 'Scimitar, 1d6 slashing. Finesse, light.'},
    {
        typeName: getRandomFrom(['rapier', 'estoc']),
        stats: 'Rapier, 1d8 piercing. Finesse.'},
    {
        typeName: getRandomFrom(['dagger', 'kris', 'dirk']),
        stats: 'Dagger, 1d4 piercing. Finesse, light.'},
]

const sword = () => {
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


module.exports = sword;