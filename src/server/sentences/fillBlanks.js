const getArrFromTag = require('./../tags/tagDict.js');
const getRandomFrom = require('./../getRandomFromArray');

// Matches $TAGS, aka: 
// uppercase strings preceeded with $ and bounded by white space, punctuation, or string start/ends
const regex = /(\s|[\.\,\'\"\!]|^)(\$[A-Z_]+)(\s|[\.\,\'\"\!]|$)/g;

// Finds $TAGS in sentence and pairs them with random item from matching array, 
// as listed in tagDict.js
const fillBlanks = (sentence) => {
    if (typeof sentence !== "string"){
        console.error('ERROR: Expected string. Recieved ' + typeof sentence +':');
        console.error(sentence);
    }

    sentence = sentence.replace(regex, (fullmatch, p1, p2, p3) => {
        const tag = p2;
        const array = getArrFromTag(tag);
        return p1 + getRandomFrom(array) + p3;
    })
    return sentence;
}

module.exports = fillBlanks;