const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    local:{
        username: String,
        password: String,
    },
    faves:{
        people: [],
        places: [],
        things: [],
    }
})

//  --------------
//
//  Authentication
//
//  ---------------

// Generate salted hash with bcrypt (synchronously)
userSchema.methods.generateHash = (password) => {
    const hash =  bcrypt.hashSync(password, saltRounds, ((err, hash) => {
        return hash;
    }));
    //const bool = bcrypt.compareSync('abcd', hash); 
    //console.log('Password correctly compared: ' + bool)
    return hash;
}

// Validate password
userSchema.methods.validPassword = function(password){ // can't be an arrow function, because of 'this'
    return bcrypt.compareSync(password, this.local.password);
}

//  --------------
//
//  Faves
//
//  ---------------

// Validate password
userSchema.methods.addFave = function(fave){ // can't be an arrow function, because of 'this'
    console.log('Adding fave to user ' + this.local.username + '...')
    switch(fave.category){
        case 'People': this.faves.people.push(fave); break;
        case 'Places': this.faves.places.push(fave); break;
        case 'Things': this.faves.things.push(fave); break;
        default: console.log('Error: No valid category found for fave: ' + fave); break
    }
    this.save((err) => {
        if (err) throw err;
        else{
          console.log('Added new fave to user: ' + this.local.username)
        }
    });
}

// Export
module.exports = mongoose.model ('User', userSchema);