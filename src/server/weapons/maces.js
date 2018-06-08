
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const titleCase = require('./../titleCase.js');

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
    const adj = fillBlanks('$METAL');
    weapon.name = titleCase(adj +' ' + weapon.typeName);
    weapon.description = `This is a ${adj} ${weapon.typeName}. $ITEMBONUS`;
    return weapon;
}

module.exports = weapon;