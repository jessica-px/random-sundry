const get = getRandomFrom = require('./../getRandomFromArray');
const races = ['dwarves', 'elves', 'humans', 'gnomes', 'halflings', 'half-orcs']

const list = [
    'cowards',
    'gloomy and pessimistic',
    'crude and ill-mannered',
    'arrogant and self-important',
    `bigoted against ${get(races)}`
]
        
module.exports = list;