
// Abilities based on those possessed by official races and subraces

const methods = [
    'Attacks with this weapon deal an extra 1d6 damage against ',
    'Within a 60 foot radius, the bearer can detect ',
    'The bearer has Resistance against physical attacks made by ',
]



const creatures = [
    'Aberrations',
    'Beasts',
    'Constructs',
    'Dragons',
    'Elementals',
    'Fey',
    'Giants',
    'Magical Beasts',
    'Plants',
    'Undead',
    'Fiends',
    'Celestials'
]



const creatureType = () => {
    const method = getRandomFrom(methods);
    const creature = getRandomFrom(creatures);
    return method + creature + '.'
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = creatureType;