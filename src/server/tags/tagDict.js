
const tagDict = {
    // Living Things
    personAdj: require('./personAdj'),
    person: require('./persons'),
    people: require('./peoples'),
    creature: require('./creature'),
    creatures: require('./creatures'),
    faction: require('./factions'),
    // Magic-related
    damageType: require('./damageType'),
    cantrip: require('./cantrips'),
    // Weapon Bonuses
    itemBonus: require('./bonusItem').master,
    itemBonusSword: require('./bonusItem').sword,
    itemBonusSpear: require('./bonusItem').spear,
    itemBonusAxe: require('./bonusItem').axe,
    itemBonusHammer: require('./bonusItem').hammer,
    // Weapon Components
    metal: require('./metals'),
    blade: require('./blades'),
    shaft: require('./shafts'),
    // Places
    location: require('./locations'),
    locationMild: require('./locationsMild'),
    // Ruins
    building: require('./buildings'),
    buildingAdj: require('./buildingAdj'),
    buildingExtra: require('./buildingExtra'),
    // Villages
    villageAdjs: require('./villageAdjs'),
}

module.exports = tagDict;