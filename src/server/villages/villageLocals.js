const get = getRandomFrom = require('./../getRandomFromArray');
const tags = tagDict = require('./../tags/tagDict.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    `Not only are the locals $LOCALS_POS_1, but they are also $LOCALS_POS_2.`,
    `Although the locals are $LOCALS_POS_1, they are also $LOCALS_NEG_2.`,
    `On top of being $LOCALS_NEG_1, the locals are also $LOCALS_NEG_2.`,
    `Even though the locals are $LOCALS_NEG_1, they are also $LOCALS_POS_2.`
]

const getRandom = () => {
    let sentence = getRandomFrom(sentences)
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;