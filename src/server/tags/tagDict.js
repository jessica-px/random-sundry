
const tagDict = {
    // Living Things
    '$PERSON_ADJ': require('./personAdj'),
    '$PERSON': require('./persons'),
    '$PEOPLE': require('./peoples'),
    '$CREATURE': require('./creature'),
    '$CREATURES': require('./creatures'),
    '$FACTION': require('./factions'),
    // Magic-related
    '$DAMAGE_TYPE': require('./damageType'),
    '$CANTRIP': require('./cantrips'),
    // Weapon Bonuses
    '$ITEM_BONUS': require('./bonusItem').master,
    '$ITEM_BONUS_SWORD': require('./bonusItem').sword,
    '$ITEM_BONUS_SPEAR': require('./bonusItem').spear,
    '$ITEM_BONUS_AXE': require('./bonusItem').axe,
    '$ITEM_BONUS_HAMMER': require('./bonusItem').hammer,
    // Weapon Components
    '$METAL': require('./metals'),
    '$BLADE': require('./blades'),
    '$SHAFT': require('./shafts'),
    // Places
    '$LOCATION': require('./locations'),
    '$LOCATION_MILD': require('./locationsMild'),
    // Ruins
    '$BUILDING': require('./buildings'),
    '$BUILDING_ADJ': require('./buildingAdj'),
    '$BUILDING_EXTRA': require('./buildingExtra'),
    // Villages
    '$VILLAGE_ADJ': require('./villageAdjs'),
    '$INDUSTRY_ADJ_POS': require('./industryAdjPositive'),
    '$INDUSTRY_ADJ_NEG': require('./industryAdjNegative'),
    '$INDUSTRY': require('./industries'),
    '$LOCALS_NEG_1': require('./villageLocalsNeg1'),
    '$LOCALS_NEG_2': require('./villageLocalsNeg2'),
    '$LOCALS_POS_1': require('./villageLocalsPos1'),
    '$LOCALS_POS_2': require('./villageLocalsPos2'),
}

const getArrFromTag = (tag) => {
    if (tagDict[tag] === undefined){
        console.log('ERROR: tag "' + tag + '" not found.')
    }
    return tagDict[tag];
}

module.exports = getArrFromTag;