
const fill = fillBlanks = require('./../fillBlanks.js');
const get = getRandomFrom = require('./../getRandomFromArray.js');

const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');



const leaderAdj = ['naive', 'brave', 'stern', 'sorrowful', 'moody', 'charming', 'cynical', 'nervous']
const leader = ['young man', 'young woman', 'youth', 'old man', 'old woman', 'elder', 'man', 'woman', 'individual']
const leaderCurrent = [
    `has been making dark deals with a $PERSON_ADJ $PERSON`,
    `is under the influence of a $PERSON_ADJ $PERSON`,
    `is struggling to lift a curse placed by a $PERSON_ADJ $PERSON`,
    `lives in fear of a $PERSON_ADJ $PERSON`,
    `knows a dangerous secret about a $PERSON_ADJ $PERSON`
]




//Format to JSON
const formatJson = () => {
    const villageName = get([`Whitehaven`, 'Hollowbrook', 'Stonewood', 'Redcreek']);
    const openingSentence = `${villageName} is a $VILLAGE_ADJ village $LOCATION_MILD.`;
    const industrySentence = require('./villageIndustry.js')();
    const localsSentence = require('./villageLocals.js')();
    
    const body = [
        spellCheck(fill(openingSentence + ' ' + industrySentence)),
        spellCheck(fill(localsSentence)),
        spellCheck(fill(`Today, ${villageName} is led by a ${get(leaderAdj)} ${get(leader)} who ${get(leaderCurrent)}.`))
    ]

    return {
        header: titleCase(villageName),
        //subheader: ,
        body: body,
        category: 'Places',
        subcategory: 'Villages'
    }
}

module.exports = formatJson;