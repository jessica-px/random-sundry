// Functions
const getRandomFrom = require('./../getRandomFromArray.js');
const spellCheck = require('./../spellCheck.js');
const fillBlanks = require('./../sentences/fillBlanks.js');

// Random Weapons
const weapons = [
    require('./swords'),
    require('./axes'),
    require('./spears'),
    require('./hammers'),
    require('./maces')
];

// Randomizers
const randomOrigin = require('./../sentences/wpnOrigins');
const randomAbility = require('./../sentences/wpnAbilities');


//Format to JSON
const formatWeapon = () => {
    const weapon = getRandomFrom(weapons)();
    const description = spellCheck(fillBlanks(weapon.description));
    const ability = randomAbility();
    const origin = randomOrigin();
    const body = [description, ability, origin];

    return {
        header: weapon.name,
        subheader: weapon.stats,
        body: body,
        category: 'Things',
        subcategory: 'Weapons'
    }
}


module.exports = formatWeapon;