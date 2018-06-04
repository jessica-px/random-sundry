
const tagDict = {
    $PERSON: require('./persons'),
    $CREATURE: require('./creature'),
    $CREATURES: require('./creatures'),
    $DAMAGE_TYPE: require('./damageType'),
    $CANTRIP: require('./cantrips'),
    // Weapon Bonuses
    $ITEMBONUS_SWORD: require('./bonusItem').sword,
    $ITEMBONUS_SPEAR: require('./bonusItem').spear,
    $ITEMBONUS_AXE: require('./bonusItem').axe,
    // Weapon Components
    $METAL: require('./metals'),
    $BLADE: require('./blades'),
    $SHAFT: require('./shafts'),

}

const getArrFromTag = (tag) => {
    return tagDict[tag];
}

module.exports = getArrFromTag;