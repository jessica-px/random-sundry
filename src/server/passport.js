// Load
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');



module.exports = (passport) => {
  console.log('Running passport config');

  // serialize user for the session, aka 'store this session'
  passport.serializeUser( (user, done) => {
    console.log('Serializing user');
    done(null, user.id);
  });

  // deserialize user, aka 'retrieve session data'
  passport.deserializeUser( (id, done) => {
    console.log('Deserializing user');
    User.findById( id, (err, user) => {
      done(err, user);
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
      User.findOne({'local.username' : username}, (err, user) => {
        console.log('Looking up user...')
        
        // catch errors
        if (err) return done(err);

        // if name is taken, return message
        //if (user) return done(null, false, req.flash('signupMessage', 'Username taken.'));
        if (user) return done(null, false, console.log('Username taken.'));
        else{
          console.log('Creating new user...')
          // otherwise create new user
          const newUser = new User();

          // set credentials
          newUser.local.username = username;
          newUser.local.password = newUser.generateHash(password);

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

};