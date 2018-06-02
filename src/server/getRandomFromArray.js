// Get random from Array
const getRandomFrom = (array) => {
    const index = Math.floor(Math.random() * Math.floor(array.length));
    return array[index];
}

module.exports = getRandomFrom;