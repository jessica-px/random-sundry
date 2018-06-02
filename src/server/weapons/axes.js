
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
    'handaxe',
    'greataxe',
]

const axe = () => {
    const type = getRandomFrom(types);
    const blade = getRandomFrom(blades);
    const metal = getRandomFrom(metals);
    const bonus = getRandomFrom(bonuses);
    return `This is a ${type} with ${blade}, ${metal} blade. ${bonus}.`
    
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = axe;