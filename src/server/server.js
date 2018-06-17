"use strict";
// Express packages
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
app.use(cors()); // Allow cross-origin-referneces

// Database packages
const mongoose = require('mongoose');

// Authentication packages
const passport = require('passport');
const expressSession = require('express-session');

// Configure express (body-parser)
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

// Configure express (sessions)
app.use(expressSession({
    secret: 'mySecretKey',
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: false
    }  
}))

// Configure database
mongoose.connect('mongodb://admin:password1@ds053156.mlab.com:53156/random-sundry');

// Configure passport
require('./passport')(passport); // pass passport to config/passport.js
app.use(passport.initialize());
app.use(passport.session());

// listen
app.listen(port);
console.log('Listening on port ' + port);


// --------------------------------
//
//      APIs
//
// --------------------------------


// ------ Generator API --------------------------------------------


// API - GET - Random Weapon
app.get('/api/random-weapon', (req, res) => {
    const weapon = require('./weapons/weaponGen')();
    res.send(weapon);
})

// API - GET - Random Ruins
app.get('/api/random-ruin', (req, res) => {
    const ruins = require('./ruins/ruinsGen')();
    res.send(ruins);
})

// API - GET - Random Village
app.get('/api/random-village', (req, res) => {
    const village = require('./villages/villagesGen')();
    res.send(village);
})

// ------ Add/Delete/Edit Favorites API ---------------------------

app.post('/api/new-fave', (req, res) => {
    console.log('Recieved new-fave post request...')
    const testFave = req.body;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...')
        req.user.addFave(testFave);
        res.sendStatus(200); // status ok
    }
    else{
        console.log('User not logged in!')
        res.sendStatus(401); // status not authenticated
    }
})

app.post('/api/delete-fave', (req, res) => {
    console.log('Recieved delete-fave post request...')
    const id = req.body.id;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...')
        req.user.deleteFave(id);
        res.sendStatus(200); // status ok
    }
    else{
        console.log('User not logged in!')
        res.sendStatus(401); // status not authenticated
    }
})

app.get('/api/faves', (req, res) => {
    console.log('Recieved GET request for faves...');
    const category = req.query.category;
    const subcategory = req.query.subcategory;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...')
        const faves = req.user.getAllFaves(category, subcategory);
        res.send(faves);
    }
    else{
        console.log('User not logged in!')
        res.send(401); // status not authenticated
    }
})


// ------ Authentication API ---------------------------------------


// AUTH - POST - Signup / Register
app.post('/auth/register', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'You have successfully signed up.', username: user.local.username});
      });
    })(req, res, next);
  });


// AUTH - POST - LOGIN
app.post('/auth/login', function(req, res, next) {
    console.log('Logging user in...')
    passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'You have successfully logged in.', username: user.local.username});
      });
    })(req, res, next);
  });

// AUTH - GET - Log Out
app.get('/auth/logout', (req, res) => {
    console.log('Logging user out...');
    req.session.destroy();
    res.send('Session ended.')
})

// AUTH - GET - Validates cookies
app.get('/auth/validate', (req, res) => {
    console.log('Validating cookies...')
    const isLoggedIn = req.isAuthenticated();
    const username = req.user ? req.user.local.username : '';
    if (!isLoggedIn){
        console.log('No cookies found!');
    }
    res.send({isLoggedIn, username});
})




// Direct all other routes to index.html

app.get('*', function (req, res){
    console.log('Loading * route. User is: ' + req.user.local.username);
    console.log(req.isAuthenticated())
    res.sendFile(path.resolve(__dirname +'/../..', 'public', 'index.html'))
})




