const tags = tagDict = require('./../tags/tagDict.js');
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
    const adjective = `${get(tags.metal)}`;
    weapon.name = titleCase(adjective +' ' + weapon.typeName);
    weapon.description = `This is a ${adjective} ${weapon.typeName}. ${get(tags.itemBonus)}.`;
    return weapon;
}

module.exports = weapon;