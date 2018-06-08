const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    'all the nearby locals whisper that',
    'only a few elders know that',
    'a historian has recently discovered that',
    'a dusty old tome suggests',
    'There\'s a well known story about how',
    'The $PEOPLE tell an old legend about how',
    'A $PERSON_ADJ $PERSON is the only one who knows that'
]
    
const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = fillBlanks(sentence);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;