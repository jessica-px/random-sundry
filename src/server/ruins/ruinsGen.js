const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray.js');

const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');

const knowledge = [
    'all the nearby locals whisper that',
    'only a few elders know that',
    'a historian has recently discovered that',
    'a dusty old tome suggests',
    'There\'s a well known story about how',
    `The ${get(tags.people)} tell an old legend about how`,
    `A ${get(tags.personAdj)} ${get(tags.person)} is the only one who knows that`
]

const history = [
    `this place was cursed by a ${get(tags.personAdj)} god`,
    `the original inhabitants were killed by a ${get(tags.personAdj)} ${get(tags.person)}`,
    'a mysterious plague drove off the original inhabitants',
    'its original inhabitants never left—they simply changed',
    'this place was consumed in an unnatural fire',
    'this place hides an entrance to the Abyss'
]

const current = [
    `Today, this place is overrun with ${get(tags.creatures)}.`,
    `Today, a ${get(tags.personAdj)} ${get(tags.person)} struggles to wrest control of this place from ${get(tags.creatures)}.`,
    `Today, this place is home to two warring factions of ${get(tags.faction)}.`,
    `Today, this is a site of great conflict between ${get(tags.faction)} and ${get(tags.creatures)}.`,
    `Today, a ${get(tags.personAdj)} ${get(tags.person)} struggles to wrest control of this place from ${get(tags.faction)}.`,
    `Today, this place is home to ${get(tags.faction)} who have been recently subjugated by a ${get(tags.personAdj)} ${get(tags.person)}.`
]

//Format to JSON
const formatJson = () => {

    const adjective = `${get(tags.buildingAdj)}`;
    const building = `${get(tags.building)}`;

    const body = [
        spellCheck(`Somewhere ${get(tags.location)} lies a ${adjective} ${building}. ${get(tags.buildingExtra)}.`),
        spellCheck(`${get(knowledge)} ${get(history)}.`),
        spellCheck(get(current))
    ]

    return {
        header: titleCase(adjective + ' ' + building),
        //subheader: ,
        body: body,
        category: 'Places',
        subcategory: 'Ruins'
    }
}

module.exports = formatJson;