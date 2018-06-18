const get = getRandomFrom = require('./../getRandomFromArray');
const tags = tagDict = require('./../tags/tagDict.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    [ // Neutral Pos
        `Its $INDUSTRY_ADJ_POS $INDUSTRY only locally known.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY relatively unknown.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY completely unknown to most people.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY not widely talked about.`,
    ],
    [
    //  Neutral Neg
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY only locally known.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY relatively unknown.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY completely unknown to most people.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY not widely talked about.`,
    ],
    [ // Positive
        `Its $INDUSTRY_ADJ_POS $INDUSTRY highly regarded.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY practically famous.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY rapidly gaining attention.`,
        `Its $INDUSTRY_ADJ_POS $INDUSTRY considered a hidden gem by some.`,
    ],
    [ // Negative
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY no longer at all respected.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY considered a laughing stock.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY hurting its reputation.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY quite notorious.`,
        `Its $INDUSTRY_ADJ_NEG $INDUSTRY widely pitied.`,
    ]
    
    
]

const getRandom = () => {
    const subArr = getRandomFrom(sentences)
    let sentence = getRandomFrom(subArr);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;