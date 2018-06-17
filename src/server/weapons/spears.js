const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray');
const titleCase = require('./../titleCase.js');

const weaponTypes = [
    {
        typeName: getRandomFrom(['spear']),
        stats: 'Spear, 1d6 piercing. Thrown (range 20/60, versatile (1d8).'},
    {
        typeName: getRandomFrom(['javelin']),
        stats: 'Javelin, 1d6 piercing. Thrown (range 30/120).'},
    {
        typeName: getRandomFrom(['halberd', 'voulge', 'glaive', 'bardiche', 'war scythe']),
        stats: 'Halberd, 1d10 slashing. Heavy, reach, two-handed.'},
    {
        typeName: getRandomFrom(['lance']),
        stats: 'Lance, 1d12 piercing. Reach, special.'},
    {
        typeName: getRandomFrom(['pike']),
        stats: 'Pike, 1d10 piercing. Heavy, reach, two-handed.'},
    {
        typeName: getRandomFrom(['trident']),
        stats: 'Trident, 1d6 piercing. Thrown (range 20/60, versatile (1d8).'},

]

const spear = () => {
    const weapon = getRandomFrom(weaponTypes);
    const adjective = get(tags.shaft);
    weapon.name = titleCase(adjective + ' ' + weapon.typeName);
    weapon.description = `This is a ${adjective} ${weapon.typeName} with a ${get(tags.metal)} head. ${get(tags.itemBonusSpear)}`;
    return weapon;
}

module.exports = spear;