const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    `Rumors say it was once a gift for a ${get(tags.personAdj)} ${get(tags.person)}.`,
    `Rumors say it was once used to slay a ${get(tags.personAdj)} ${get(tags.person)}.`,
    `Rumors say it was stolen from a ${get(tags.personAdj)} ${get(tags.person)}.`,
    `It\'s said to have been made by a ${get(tags.personAdj)} ${get(tags.person)}.`,
    `They say a ${get(tags.personAdj)} ${get(tags.person)} fiercely coveted this weapon.`,
    `They say a ${get(tags.personAdj)} ${get(tags.person)} performed wicked deeds with this weapon.`,
    `They say a ${get(tags.personAdj)} ${get(tags.person)} desperately tried to destroy this weapon.`,
    `This weapon is said to hold the soul of a ${get(tags.personAdj)} ${get(tags.person)}.`,
    `A ${get(tags.personAdj)} ${get(tags.person)} is said to have been buried with this weapon.`,
    `The ${get(tags.people)} tell a famous love story involving this weapon.`,
    `The ${get(tags.people)} tell a dark tragedy involving this weapon.`,
    `The ${get(tags.people)} consider this weapon to be an evil omen.`,
    `The ${get(tags.people)} believe this weapon is a symbol of good fortune.`,
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;