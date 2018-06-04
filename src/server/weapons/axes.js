
// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

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
    weapon.description = `This is a ${weapon.typeName} with a $BLADE, $METAL blade. $ITEMBONUS_AXE`;
    return weapon;
}

module.exports = axe;