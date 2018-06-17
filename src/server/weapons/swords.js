const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray');
const titleCase = require('./../titleCase.js');

const weaponTypes = [
    {
        typeName: getRandomFrom(['longsword', 'flamberge', 'bastard sword', 'broadsword']),
        stats: 'Longsword, 1d8 slashing. Versatile (1d10).'},
    {
        typeName: getRandomFrom(['shortsword', 'spatha']),
        stats: 'Shortsword, 1d6 piercing. Finesse, light.'},
    {
        typeName: getRandomFrom(['greatsword', 'claymore', 'Zweihander']),
        stats: 'Greatsword, 2d6 slashing. Heavy, two-handed.'},
    {
        typeName: getRandomFrom(['scimitar', 'falchion', 'machete', 'cutlass']),
        stats: 'Scimitar, 1d6 slashing. Finesse, light.'},
    {
        typeName: getRandomFrom(['rapier', 'estoc']),
        stats: 'Rapier, 1d8 piercing. Finesse.'},
    {
        typeName: getRandomFrom(['dagger', 'kris', 'dirk']),
        stats: 'Dagger, 1d4 piercing. Finesse, light.'},
]

const sword = () => {
    const weapon = getRandomFrom(weaponTypes);
    const adjective = get(tags.metal);
    weapon.name = titleCase(adjective + ' ' + weapon.typeName);
    weapon.description = `This is a ${weapon.typeName} with a ${get(tags.blade)}, ${adjective} blade. ${get(tags.itemBonusSword)}`;
    return weapon;
}

module.exports = sword;