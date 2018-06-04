
// Get Random From Array Function
const getRandomFrom = require('./../getRandomFromArray.js');

//Format to JSON
const formatJson = () => {
    // const weapon = getRandomFrom(weapons)();
    // const ability = getRandomFrom(abilities)();
    // const origin = getRandomFrom(origins)();
    // const body = [weapon.description, ability, origin];

    return {
        name: 'ruins',
        header: 'Underwater Castle',
        //smallHeader: ,
        body: [
            'A castle that\s been lost underwater.',
            'It\s now inhabited by ghosts.',
            'Rumor says this was once the home of a legendary craftsman.'
        ]
    }
}

module.exports = formatJson;