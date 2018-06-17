const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray');
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
    const adjective = `${get(tags.metal)}`;
    weapon.name = titleCase(adjective +' ' + weapon.typeName);
    weapon.description = `This is a ${weapon.typeName} with a ${get(tags.blade)}, ${adjective} head. ${get(tags.itemBonusHammer)}`;
    return weapon;
}

module.exports = weapon;