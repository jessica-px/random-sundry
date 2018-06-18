const get = getRandomFrom = require('./../getRandomFromArray');
const spellCheck = require('./../spellCheck.js');

const sentences = [
    [ // Creatures
        `Attacks with this weapon deal an extra 1d6 damage against $CREATURES.`,
        `Within a 60 foot radius, the bearer can detect $CREATURES.`,
        `The bearer has Resistance against physical attacks made by $CREATURES.`,
        `On dealing the killing blow to a $CREATURE, the bearer regains 1d8 HP.`,
        `$CREATURES hit by this weapon must make a DC12 Wis Save or become frightened until the bearer\'s next turn.`,
    ],
    [ // Damage Type
        `Attacks with this weapon can deal $DAMAGE_TYPE damage.`,
        `The bearer has resistance again $DAMAGE_TYPE damage.`,
        `When the bearer takes $DAMAGE_TYPE damage, their next attack with this weapon gains advantage.`,
    ],
    [ // Spells
        //`Once per short rest`,
        `While at full health, the bearer can cast the $CANTRIP cantrip.`,
        `While below full health, the bearer can cast the $CANTRIP cantrip.`,
        `When in sunlight, the bearer can cast the $CANTRIP cantrip.`,
        `When in moonlight, the bearer can cast the $CANTRIP cantrip.`,
    ]
    
    
]

const getRandom = () => {
    const subArr = getRandomFrom(sentences)
    let sentence = getRandomFrom(subArr);
    sentence = spellCheck(sentence);
    return sentence;
}

module.exports = getRandom;