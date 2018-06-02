
// Abilities based on those possessed by official races and subraces

const damageTypes = [
    'Acid',
    'Cold',
    'Fire',
    'Poison',
    'Lightning',
    'Nectrotic',
    'Psychic',
    'Radiant',
    'Thunder',
    'Force'
]

const resistanceTypes = [
    'The bearer has Resistance against '
]


const resistance = () => {
    const resistance = getRandomFrom(resistanceTypes);
    const damage = getRandomFrom(damageTypes);
    return resistance + damage + ' damage.'
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = resistance;