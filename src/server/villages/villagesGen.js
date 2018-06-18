
const fill = fillBlanks = require('./../fillBlanks.js');
const get = getRandomFrom = require('./../getRandomFromArray.js');

const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');


const leader = ['young man', 'young woman', 'youth', 'old man', 'old woman', 'man', 'woman', 'individual']
const leaderCurrent = [
    `has been making dark deals with a $VILLAIN_ADJ $VILLAIN`,
    `is under the influence of a $VILLAIN_ADJ $VILLAIN`,
    `is struggling to lift a curse placed by a $VILLAIN_ADJ $VILLAIN`,
    `lives in fear of a $VILLAIN_ADJ $VILLAIN`,
    `knows a dangerous secret about a $VILLAIN_ADJ $VILLAIN`,
    'is seeking aid against some nearby $FACTION',
    'is looking for something that was stolen by $FACTION',
    'is secretly working with $FACTION',
    // unifinished
    'is a $CLASS with a troubled past',

]




//Format to JSON
const formatJson = () => {
    const villageName = get([`Whitehaven`, 'Hollowbrook', 'Stonewood', 'Redcreek', 'Axton', 'Ashburn', 'Rosebourne', 'Blackhill']);
    const openingSentence = `${villageName} is a $VILLAGE_ADJ village $LOCATION_MILD.`;
    const industrySentence = require('./villageIndustry.js')();
    const localsSentence = require('./villageLocals.js')();
    
    const body = [
        spellCheck(fill(openingSentence + ' ' + industrySentence)),
        spellCheck(fill(localsSentence)),
        spellCheck(fill(`Today, ${villageName} is led by a $PERSON_ADJ ${get(leader)} who ${get(leaderCurrent)}.`))
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