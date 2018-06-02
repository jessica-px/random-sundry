
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
    'spear',
    'javelin',
    'halberd',
    'lance',
    'pike',
    'trident',
]

const spear = () => {
    const type = getRandomFrom(types);
    //const blade = getRandomFrom(blades);
    const shaft = getRandomFrom(shafts);
    const metal = getRandomFrom(metals);
    const bonus = getRandomFrom(bonuses);
    return `This is a ${shaft} ${type} with a ${metal} head. ${bonus}.`
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = spear;