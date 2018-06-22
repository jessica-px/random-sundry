const get = getRandomFrom = require('./../getRandomFromArray');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    `Rumors say it was once a gift for a $VILLAIN_ADJ $VILLAIN.`,
    `Rumors say it was once used to slay a $VILLAIN_ADJ $VILLAIN.`,
    `Rumors say it was stolen from a $VILLAIN_ADJ $VILLAIN.`,
    `It\'s said to have been made by a $VILLAIN_ADJ $MAGIC_USER.`,
    `They say a $VILLAIN_ADJ $VILLAIN fiercely coveted this weapon.`,
    `They say a $VILLAIN_ADJ $VILLAIN performed wicked deeds with this weapon.`,
    `They say a $VILLAIN_ADJ $VILLAIN desperately tried to destroy this weapon.`,
    `This weapon is said to hold the soul of a $VILLAIN_ADJ $VILLAIN.`,
    `A $VILLAIN_ADJ $VILLAIN is said to have been buried with this weapon.`,
    `The $PEOPLE tell a famous love story involving this weapon.`,
    `The $PEOPLE tell a dark tragedy involving this weapon.`,
    `The $PEOPLE consider this weapon to be an evil omen.`,
    `The $PEOPLE believe this weapon is a symbol of good fortune.`,
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;