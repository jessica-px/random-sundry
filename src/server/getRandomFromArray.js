// Get random from Array
const getRandomFrom = (array) => {
    // Type checking, throws error if not array
    if (Array.isArray(array) === false){
        console.error('ERROR in getRandomFromArray.js: Expected array. Recieved ' + typeof array +'.');
    }

    const index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}

module.exports = getRandomFrom;