
const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
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
    const adj = fillBlanks('$METAL');
    weapon.name = titleCase(adj +' ' + weapon.typeName);
    weapon.description = `This is a ${weapon.typeName} with a $BLADE, ${adj} blade. $ITEMBONUS_AXE`;
    return weapon;
}

module.exports = axe;