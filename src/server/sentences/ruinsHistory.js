
const getRandomFrom = require('./../getRandomFromArray');
const fillBlanks = require('./../sentences/fillBlanks.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    'this place was cursed by a $PERSON_ADJ god',
    'the original inhabitants were killed by a $PERSON_ADJ $PERSON',
    'a mysterious plague drove off the original inhabitants',
    'its original inhabitants never left—they simply changed',
    'this place was consumed in an unnatural fire',
    'this place hides an entrance to the Abyss'
]
    
const getRandom = () => {
    let sentence = getRandomFrom(sentences);
    sentence = fillBlanks(sentence);
    //sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;