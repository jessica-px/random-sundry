
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

const weaponTypes = [

    { // Maul
        typeName: getRandomFrom(['maul', 'sledgehammer']),
        stats: 'Maul, 2d6 bludgeoning. Heavy, two-handed.',
    },
    { // Warhammer
        typeName: getRandomFrom(['warhammer']),
        stats: 'Warhammer, 1d8 bludgeoning. Versatile (1d10).',
    },
    { // Light hammer
        typeName: getRandomFrom(['light hammer', 'throwing hammer']),
        stats: 'Light Hammer, 1d4 bludgeoning. Light, thrown (30/120).',
    }
]

const weapon = () => {
    const weapon = getRandomFrom(weaponTypes);
    weapon.description = `This is a ${weapon.typeName} with a $BLADE, $METAL head. $ITEMBONUS_HAMMER`;
    return weapon;
}

module.exports = weapon;