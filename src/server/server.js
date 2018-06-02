"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require("path");
app.use(cors()); // Allow cross-origin-referneces
app.listen(port);



// API - Random Weapon
app.get('/api/random-weapon', (req, res) => {
    const weapon = require('./weapons/weaponGen')();
    res.send(weapon);
})

// API - Random Ruins
app.get('/api/random-ruin', (req, res) => {
    const ruins = {header: 'Ruins', 
            body: ['These are some ruins.', 'They\'re full of zombies.']}
    res.send(ruins);
})



// Direct all other routes to index.html
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname +'/../..', 'public', 'index.html'))
})




