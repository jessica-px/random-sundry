const getRandomFrom = require('./../getRandomFromArray.js');
const spellCheck = require('./../spellCheck.js');
const titleCase = require('./../titleCase.js');
const fillBlanks = require('./../sentences/fillBlanks.js');


// Randomizers
const randomKnowledge = require('./../sentences/ruinsKnowledge');
const randomHistory = require('./../sentences/ruinsHistory');
const randomInhabitants = require('./../sentences/ruinsCurrent');

//Format to JSON
const formatJson = () => {
    // const weapon = getRandomFrom(weapons)();
    // const ability = getRandomFrom(abilities)();
    // const origin = getRandomFrom(origins)();

    const adjective = fillBlanks('$BUILDING_ADJ');
    const building = fillBlanks('$BUILDING');

    const whoKnows = randomKnowledge();
    const history = randomHistory();
    const historySentence = spellCheck(`${whoKnows} ${history}.`);


    const currentInhabitants = randomInhabitants();

    const body = [
        spellCheck(fillBlanks(`Somewhere $LOCATION lies a ${adjective} ${building}. $BUILDING_EXTRA.`)),
        historySentence,
        currentInhabitants
    ]

    return {
        name: 'ruins',
        header: titleCase(adjective + ' ' + building),
        //smallHeader: ,
        body: body
    }
}

module.exports = formatJson;