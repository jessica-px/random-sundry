const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray');
const titleCase = require('./../titleCase.js');

const weaponTypes = [

    { // Handaxe
        typeName: getRandomFrom(['handaxe', 'hatchet']),
        stats: 'Handaxe, 1d6 slashing. Light, thrown (range 20/60).',
    },
    { // Battleaxe
        typeName: getRandomFrom(['battleaxe']),
        stats: 'Battleaxe, 1d8 slashing. Versatile (1d10).',
    },
    { // Greataxe
        typeName: getRandomFrom(['greataxe']),
        stats: 'Greataxe, 1d12 slashing. Heavy, two-handed.',
    }
]

const axe = () => {
    const weapon = getRandomFrom(weaponTypes);
    const adjective = `${get(tags.metal)}`;
    weapon.name = titleCase(adjective +' ' + weapon.typeName);
    weapon.description = `This is a ${weapon.typeName} with a ${get(tags.blade)}, ${adjective} blade. ${get(tags.itemBonusAxe)}`;
    return weapon;
}

module.exports = axe;