const fill = fillBlanks = require('./../fillBlanks.js');
const get = getRandomFrom = require('./../getRandomFromArray.js');
const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');

const knowledge = [
    'all the nearby locals whisper that',
    'only a few elders know that',
    'a historian has recently discovered that',
    'a dusty old tome suggests',
    'There\'s a well known story about how',
    `The $PEOPLE tell an old legend about how`,
    `A $VILLAIN_ADJ $VILLAIN is the only one who knows that`
]

const history = [
    `this place was cursed by a $VILLAIN_ADJ god`,
    `the original inhabitants were killed by a $VILLAIN_ADJ $VILLAIN`,
    'a mysterious plague drove off the original inhabitants',
    'its original inhabitants never left—they simply changed',
    'this place was consumed in an unnatural fire',
    'this place hides an entrance to the Abyss'
]

const current = [
    `Today, this place is overrun with $CREATURES.`,
    `Today, a $VILLAIN_ADJ $VILLAIN struggles to wrest control of this place from $CREATURES.`,
    `Today, this place is home to two warring factions of $FACTION.`,
    `Today, this is a site of great conflict between $FACTION and $CREATURES.`,
    `Today, a $VILLAIN_ADJ $VILLAIN struggles to wrest control of this place from $FACTION.`,
    `Today, this place is home to $FACTION who have been recently subjugated by a $VILLAIN_ADJ $VILLAIN.`
]

//Format to JSON
const formatJson = () => {

    const adjective = fill(`$BUILDING_ADJ`);
    const building = fill(`$BUILDING`);

    const body = [
        spellCheck(fill(`Somewhere $LOCATION lies a ${adjective} ${building}. $BUILDING_EXTRA.`)),
        spellCheck(fill(`${get(knowledge)} ${get(history)}.`)),
        spellCheck(fill(get(current)))
    ]

    return {
        header: titleCase(adjective + ' ' + building),
        subheader: '',
        body: body,
        category: 'Places',
        subcategory: 'Ruins'
    }
}

module.exports = formatJson;