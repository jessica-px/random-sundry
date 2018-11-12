const getArrFromTag = require('./tags/tagDict.js');
const getRandomFrom = require('./getRandomFromArray');

// Matches $TAGS, aka: 
// uppercase strings preceeded with $ and bounded by white space, punctuation, or string start/ends
const regex = /(\$[A-Z\d_]+)/g;

// Finds $TAGS in sentence and pairs them with random item from matching array, 
// as listed in tagDict.js
const fillBlanks = (sentence) => {
  if (typeof sentence !== "string"){
    console.error('ERROR in fillBlanks.js: Expected string. Recieved ' + typeof sentence +':');
    console.error(sentence);
  }

  sentence = sentence.replace(regex, (fullmatch) => {
    const tag = fullmatch;
    const array = getArrFromTag(tag);
    return getRandomFrom(array);
  })
  return sentence;
}

module.exports = fillBlanks;