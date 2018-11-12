// Load
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');




module.exports = (passport) => {
  console.log('Running passport config');

  // serialize user for the session, aka 'store this session'
  passport.serializeUser( (user, done) => {
    console.log('Serializing user: ' + user.local.username);
    done(null, user);
  });

  // deserialize user, aka 'retrieve session data'
  passport.deserializeUser( (id, done) => {
    console.log('Deserializing user');
    User.findById( id, (err, user) => {
      done(null, user);
    });
  });


  //==============================================================

  //    Sign Up / Registration   

  //==============================================================

  passport.use('local-signup', new LocalStrategy({
    passReqToCallback: true // this prevents the 'done is not a function' error
  },
  (req, username, password, done) => {
    console.log('Processing signup...');

    // looks up this username in DB
    User.findOne({'local.username' : username}, (err, alreadyRegisteredUser) => {
      console.log('Looking up user...')

      // if name is taken, return message
      if (alreadyRegisteredUser) return done(null, false,  {usernameError: 'Username already taken.'});

      // if password is too short, return message
      else if (password.length < 8) return done(null, false, {passwordError: 'Password must be at least 8 characters.'});

      // catch errors
      else if (err) return done(err);

      else{
        console.log('Creating new user...')
        // otherwise create new user
        const newUser = new User();

        // set credentials
        newUser.local.username = username;
        newUser.local.password = newUser.generateHash(password);
        if (req.body.email != ''){
          newUser.local.email = req.body.email;
        }

        // save user
        newUser.save((err) => {
            
          if (err) throw err;
          else{
            console.log('Saved user: ' + newUser.local.username + ', pw: ' + newUser.local.password)
            return done(null, newUser);
          }
            
        });
      }
    });

  }
  ));

  //==============================================================

  //    Login

  //==============================================================

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // this prevents the 'done is not a function' error
  },
  (req, username, password, done) => {

    // Find a user with matching username
    User.findOne({ 'local.username' : username}, (err, user) => {
      if (err) return done(err);

      // If no user found, or the password doesn't match, return failure message
      if ( !user || !user.validPassword(password) ) {
        return done(null, false, { message: 'Wrong username or password.' })
      }
      
      if (!user.validPassword(password)){
        return done(null, false, { message: 'Wrong username or password.' })
      }


      //console.log('Password ' + password + ' is valid for user ' + username + ': ' + user.validPassword(password));
      return done(null, user);

    })
  }
  ))



};