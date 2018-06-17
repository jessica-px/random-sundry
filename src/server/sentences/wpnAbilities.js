const get = getRandomFrom = require('./../getRandomFromArray');
const tags = tagDict = require('./../tags/tagDict.js');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    [ // Creatures
        `Attacks with this weapon deal an extra 1d6 damage against ${get(tags.creatures)}.`,
        `Within a 60 foot radius, the bearer can detect ${get(tags.creatures)}.`,
        `The bearer has Resistance against physical attacks made by ${get(tags.creatures)}.`,
        `On dealing the killing blow to a ${get(tags.creature)}, the bearer regains 1d8 HP.`,
        `${get(tags.creatures)} hit by this weapon must make a DC12 Wis Save or become frightened until the bearer\'s next turn.`,
    ],
    [ // Damage Type
        `Attacks with this weapon can deal ${get(tags.damageType)} damage.`,
        `The bearer has resistance again ${get(tags.damageType)} damage.`,
        `When the bearer takes ${get(tags.damageType)} damage, their next attack with this weapon gains advantage.`,
    ],
    [ // Spells
        //`Once per short rest`,
        `While at full health, the bearer can cast the ${get(tags.cantrip)} cantrip.`,
        `While below full health, the bearer can cast the ${get(tags.cantrip)} cantrip.`,
        `When in sunlight, the bearer can cast the ${get(tags.cantrip)} cantrip.`,
        `When in moonlight, the bearer can cast the ${get(tags.cantrip)} cantrip.`,
    ]
    
    
]

const getRandom = () => {
    const subArr = getRandomFrom(sentences)
    let sentence = getRandomFrom(subArr);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;