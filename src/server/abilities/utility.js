
// Utility Cantrips

const cantrips = [
    'Blade Ward',
    'Control Flames',
    'Dancing Lights',
    'Druidcraft',
    'Friends',
    'Guidance',
    'Minor Illusion',
    'Prestidigitation',
    'Produce Flame',
    'Resistance',
    'Spare the Dying',
    'Thaumaturgy',
    'True Strike'
]

const conditions = [
    'Once per short rest',
    '1d4 times per long rest',
    'While at full health',
    'While below full health',
    'When in sunlight',
    'While outdoors',
    'When in moonlight',
]

const utilityCantrip = () => {
    const cantrip = getRandomFrom(cantrips);
    const condition = getRandomFrom(conditions);
    return condition + ', the bearer may cast ' + cantrip + ' as a cantrip.'
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = utilityCantrip;