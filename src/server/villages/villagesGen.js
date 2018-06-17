
const tags = tagDict = require('./../tags/tagDict.js');
const get = getRandomFrom = require('./../getRandomFromArray.js');

const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');


//Format to JSON
const formatJson = () => {

    const villageName = get[`Whitehaven`, 'Hollowbrook', 'Stonewood', 'Redcreek'];

    const body = [
        spellCheck(`${villageName} is a ${get(tags.villageAdjs)} village ${get(tags.locationMild)}.`),
        'Most of the locals share a fondness for archery, but although they are friendly to strangers, they are also arrogant and self-important.',
        `Today, ${villageName} is led by a naive young man who has been making dark deals with a fanatical vampire.`
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