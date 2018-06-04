const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    'Rumors say it was once a gift for a $PERSON.',
    'Rumors say it was used to slay a $PERSON.',
    'It\'s said to have been enchanted by a $PERSON.',
    'They say a $PERSON fiercely coveted this weapon.',
    'They say a $PERSON performed wicked deeds with this weapon.',
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = fillBlanks(sentence);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;