
// People Origins

const sentences = [
    'Rumor says it was once a gift for ',
    'Rumors say it was used to slay ',
    'It\'s said to have been enchanted by ',
    'They say this weapon performed great deeds in the hands of ',
    'They say this weapon performed wicked deeds in the hands of ',
]

const people = [
    'a vampire',
    'a crazed wizard',
    'a secretive wizard',
    'an orc warlord',
    'an orc sorceror',
    'an elven queen',
    'an elven warlord',
    'an ancient hero',
    'a fey noble',
    'an undead king',
    'a lich',
    'a traitorous prince',
    'a feared pirate',
    'the head of a long dead dwarven clan',
    'a mermaid princess',
    'a cunning sorceress',
    'the prince of thieves',
    'a prophet of Bahamut',
    'a prophet of Orcus',
    'a dark elf princess',
    'a corrupted knight'
]

const peopleOrigin = () => {
    const sentence = getRandomFrom(sentences);
    const person = getRandomFrom(people);
    return sentence + person + '.';
}

// Get Random Function
const getRandomFrom = require('./../getRandomFromArray');

module.exports = peopleOrigin;