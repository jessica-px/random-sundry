// Combat Cantrips

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


const damageType = () => {
    const type = getRandomFrom(damageTypes);
    return 'Attacks with this weapon can deal ' + type + ' damage.'
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = damageType;