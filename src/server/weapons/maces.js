const fill = fillBlanks = require('./../fillBlanks.js');
const get = getRandomFrom = require('./../getRandomFromArray');
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
    const adjective = fill('$METAL');
    weapon.name = titleCase(adjective +' ' + weapon.typeName);
    weapon.description = `This is a ${adjective} ${weapon.typeName}. $ITEM_BONUS`;
    return weapon;
}

module.exports = weapon;