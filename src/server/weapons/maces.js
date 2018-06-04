
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

const weaponTypes = [

    { // Mace
        typeName: getRandomFrom(['mace']),
        stats: 'Mace, 1d6 bludgeoning.',
    },
    { // Morningstar
        typeName: getRandomFrom(['morningstar']),
        stats: 'Morningstar, 1d8 piercing.',
    },
    { // Flail
        typeName: getRandomFrom(['flail']),
        stats: 'Flail, 1d4 bludgeoning.',
    }
]

const weapon = () => {
    const weapon = getRandomFrom(weaponTypes);
    weapon.description = `This is a $METAL ${weapon.typeName}. $ITEMBONUS`;
    return weapon;
}

module.exports = weapon;