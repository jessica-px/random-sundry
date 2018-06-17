// Functions
const get = getRandomFrom = require('./../getRandomFromArray.js');
const spellCheck = require('./../spellCheck.js');

// Random Weapons
const weapons = [
    require('./swords'),
    require('./axes'),
    require('./spears'),
    require('./hammers'),
    require('./maces')
];

// Randomizers
const randomOrigin = require('./wpnOrigins');
const randomAbility = require('./wpnAbilities');


//Format to JSON
const formatWeapon = () => {
    const weapon = getRandomFrom(weapons)();
    const description = spellCheck(weapon.description);
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