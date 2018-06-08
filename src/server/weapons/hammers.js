
const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const titleCase = require('./../titleCase.js');

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
    const adj = fillBlanks('$METAL');
    weapon.name = titleCase(adj +' ' + weapon.typeName);
    weapon.description = `This is a ${weapon.typeName} with a $BLADE, ${adj} head. $ITEMBONUS_HAMMER`;
    return weapon;
}

module.exports = weapon;