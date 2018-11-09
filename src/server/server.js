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

// Configure database
require('dotenv').config();
const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url);

// Configure sessions
const MongoStore = require('connect-mongo')(expressSession);
app.use(expressSession({
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        httpOnly: false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))



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

const categoryPaths = {
  'weapon': './weapons/weaponGen',
  'ruin': './ruins/ruinsGen',
  'village': './villages/villagesGen'
}

// API - GET - Random
app.get('/api/random/:category', (req, res) => {
  const category = req.params.category;
  const modulePath = categoryPaths[category] ? categoryPaths[category] : 'Error: Text unavailable';
  const randomizedText = require(modulePath)();
  res.send(randomizedText);
})

// ------ Add/Delete/Edit Favorites API ---------------------------

// Add Face
app.post('/api/faves', (req, res) => {
    const newFave = req.body;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...adding fave...')
        req.user.addFave(newFave);
        res.sendStatus(200); // status ok
    }
    else{
        console.log('User not logged in! Cannot add fave.')
        res.sendStatus(401); // status not authenticated
    }
})

// Delete Fave
app.delete('/api/faves', (req, res) => {
    const id = req.body.id;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...deleting fave...')
        req.user.deleteFave(id);
        res.sendStatus(200); // status ok
    }
    else{
        console.log('User not logged in! Cannot delete fave.')
        res.sendStatus(401); // status not authenticated
    }
})

// Get All Faves
app.get('/api/faves', (req, res) => {
    const category = req.query.category;
    const subcategory = req.query.subcategory;
    const isLoggedIn = req.isAuthenticated();
    if (isLoggedIn){
        console.log('User ' + req.user.local.username + ' is logged in...getting faves list')
        const faves = req.user.getAllFaves(category, subcategory);
        res.send(faves);
    }
    else{
        console.log('User not logged in! Cannot get faves list.')
        res.send(401); // status not authenticated
    }
})


// ------ Authentication API ---------------------------------------


// AUTH - POST - Signup / Register
app.post('/auth/register', function(req, res, next) {
    console.log(req.body);
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

// AUTH - GET - Delete Account
app.get('/auth/delete-account', (req, res) => {
    const User = require('./models/user');
    User.deleteOne(req.user, function (err) {
        if (err) return (err);
    })
    console.log('Deleting user account...');
    req.session.destroy();
    res.send('Session ended.')
})

// AUTH - GET - Validates cookies
app.get('/auth/validate', (req, res) => {
    console.log('Validating cookies...')
    const isLoggedIn = req.isAuthenticated();
    const username = req.user ? req.user.local.username : '';
    const email = req.user ? req.user.local.email : '';
    if (!isLoggedIn){
        console.log('No cookies found!');
    }
    res.send({isLoggedIn, username, email});
})


// ------ User Settings API ---------------------------------------


// SETTINGS - POST - Change Password
app.post('/auth/change-password', function(req, res, next) {
    if (req.user.validPassword(req.body.currPassword)){
        if (req.body.newPassword.length >= 8){
            req.user.changePassword(req.body.newPassword);
            res.json({success: 'Password successfully changed.'});
        }
        else{
            const info = {message: 'New password must be at least 8 characters.'}
            return res.json(info);
        }
        
    }
    else{
        const info = {message: 'Incorrect password.'}
        return res.json(info);
    }
  });

app.post('/auth/change-email', function(req, res, next) {
    const isLoggedIn = req.isAuthenticated();
    if (!isLoggedIn){
        const info = {message: 'Not logged in.'}
        return res.json(info);
    }

    else{
        req.user.changeEmail(req.body.newEmail);
        res.json({success: 'Email successfully changed.'});
    }
  });



// Direct all other routes to index.html

app.use(express.static('public')) 
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname +'/../..', 'public', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})




