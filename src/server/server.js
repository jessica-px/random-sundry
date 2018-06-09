"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const path = require("path");
app.use(cors()); // Allow cross-origin-referneces

// configure body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

// configure database
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password1@ds053156.mlab.com:53156/random-sundry');

// configure passport
const flash = require('connect-flash');
const passport = require('passport');
require('./passport')(passport); // pass passport to config/passport.js
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'mySecretKey',
    saveUninitialized: false,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// listen
app.listen(port);
console.log('Listening on port ' + port);





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

// API - POST - Register

// app.post('/api/register', 
//     passport.authenticate('local-signup'), 
//     ((req, res) => {
//         res.json({
//             message: 'Message!'
//     })})
// )


app.post('/api/register', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
        console.log('info:')
        console.log(info);
      if (err) { return next(err); }
      if (!user) { return res.json(info); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'You have successfully signed up as ' + user.local.username + '.'});
      });
    })(req, res, next);
  });



// API - POST - Login
app.post('/api/login', (req, res) => {
    //const ruins = require('./ruins/ruinsGen')();
})

// API - GET - Get user info from ID
app.get('/api/random-ruin', (req, res) => {
    //onst ruins = require('./ruins/ruinsGen')();
    //res.send(ruins);
})




// Direct all other routes to index.html
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname +'/../..', 'public', 'index.html'))
})




