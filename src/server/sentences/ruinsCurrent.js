const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    'Today, this place is overrun with $CREATURES.',
    'Today, a $PERSON_ADJ $PERSON struggles to wrest control of this place from $CREATURES.',
    'Today, this place is home to two warring factions of $FACTION.',
    'Today, this is a site of great conflict between $FACTION and $CREATURES.',
    'Today, a $PERSON_ADJ $PERSON struggles to wrest control of this place from $FACTION.',
    'Today, this place is home to $FACTION who have been recently subjugated by a $PERSON_ADJ $PERSON.'
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = fillBlanks(sentence);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;