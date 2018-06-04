const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    'Rumors say it was once a gift for a $PERSON_ADJ $PERSON.',
    'Rumors say it was once used to slay a $PERSON_ADJ $PERSON.',
    'Rumors say it was stolen from a $PERSON_ADJ $PERSON.',
    'It\'s said to have been made by a $PERSON_ADJ $PERSON.',
    'They say a $PERSON_ADJ $PERSON fiercely coveted this weapon.',
    'They say a $PERSON_ADJ $PERSON performed wicked deeds with this weapon.',
    'They say a $PERSON_ADJ $PERSON desperately tried to destroy this weapon.',
    'This weapon is said to hold the soul of a $PERSON_ADJ $PERSON.',
    'A $PERSON_ADJ $PERSON is said to have been buried with this weapon.',
    'The $PEOPLE tell a famous love story involving this weapon.',
    'The $PEOPLE tell a dark tragedy involving this weapon.',
    'The $PEOPLE consider this weapon to be an evil omen.',
    'The $PEOPLE believe this weapon is a symbol of good fortune.',
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = fillBlanks(sentence);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;