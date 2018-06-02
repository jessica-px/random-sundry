
// Get Random From Array Function
const getRandomFrom = require('./../getRandomFromArray.js');

// Random Weapons
const swords = require('./swords');
const axes = require('./axes');
const spears = require('./spears');
const weapons = [swords, axes, spears];

// Random Abilities
const utility = require('./../abilities/utility');
const damageType = require('./../abilities/damageType');
const resistance = require('./../abilities/resistance');
const creatureType = require('./../abilities/creatureType');
const abilities = [utility, damageType, resistance, creatureType];

// Random Origins
const people = require('./../origins/people');
const origins = [people];

//Format to JSON
const formatWeapon = () => {
    const weapon = getRandomFrom(weapons)();
    const ability = getRandomFrom(abilities)();
    const origin = getRandomFrom(origins)();
    const body = [weapon.description, ability, origin];

    return {
        name: weapon.typeName,
        smallHeader: weapon.stats,
        body: body
    }
}

module.exports = formatWeapon;