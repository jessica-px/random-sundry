"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);

// Get Random From Array Function
const getRandomFrom = require('./getRandomFromArray.js');


// Random Weapons
const swords = require('./weapons/swords');
const axes = require('./weapons/axes');
const spears = require('./weapons/spears');
const weapons = [swords, axes, spears];

// Random Abilities
const utility = require('./abilities/utility');
const damageType = require('./abilities/damageType');
const resistance = require('./abilities/resistance');
const creatureType = require('./abilities/creatureType');
const abilities = [utility, damageType, resistance, creatureType];

// Random Origins
const people = require('./origins/people');
const origins = [people];

// Return Random Item
app.get('/random', (req, res) => {
    const description = getRandomFrom(weapons)();
    const ability = getRandomFrom(abilities)();
    const origin = getRandomFrom(origins)();
    res.send(description + ' ' + ability + ' ' + origin);
})





