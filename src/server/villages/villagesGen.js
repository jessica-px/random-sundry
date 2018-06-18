
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
    'is a former $CLASS with a troubled past',
    'is secretly a $SECRET_IDENTITY'
]

const prefix = [ // No final: s, p, h, w, ll
    'White', 'Red', 'Black', 'Grey', 'West', 'East', 'Fair', 'Rose', 'Graves', 'Wood', 'Daven', 
    'Ast', 'Avon', 'Bal', 'Bex', 'Blen', 'Brad', 'Car', 'Cul', 'Dal', 'Dun',
    'Fin', 'Gart', 'Gil', 'Glen', 'Kil', 'Kings', 'Kirk', 'Knock', 'Lang', 'Lock',
    'Lind', 'Nor', 'Pen', 'Pit', 'Pol', 'Pont', 'Ply', 'Strat', 'Stan', 'Swin',
    'Tarn', 'Win', 'Wel'
]

const suffix = [
    'beck', 'berg', 'berry', 'bury', 'burgh', 'bourne', 'burn', 'cott', 'den', 'firth', 'ham',
    'holme', 'hurst', 'ing', 'low', 'lyn', 'mere', 'more', 'pool', 'shaw',
    'stead', 'ster', 'stow', 'ton', 'wick', 'wich', 'worth',
    'field', 'ford', 'hill', 'dale', 'fell', 'shire', 'rock', 'mill', 'bridge',
]


//Format to JSON
const formatJson = () => {
    const villageName = get(prefix) + get(suffix);
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