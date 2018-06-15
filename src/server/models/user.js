const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    local:{
        username: String,
        password: String,
    },
    faves: []
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

// Add Fave
userSchema.methods.addFave = function(newFave){ // can't be an arrow function, because of 'this'
    console.log('Adding new fave to user ' + this.local.username + '...')

    if (this.faves.filter(fave => fave.id === newFave.id).legnth > 0){
        console.log('Fave already saved in DB.')
    }
    else{
        console.log('Saving new fave to database...')
        this.faves.push(newFave);
        this.save((err) => {
            if (err) throw err;
            else{
              console.log('Saved new fave.')
            }
        });
    }
}

// Delete Fave
userSchema.methods.deleteFave = function(id){ 
    console.log('Deleting fave from user ' + this.local.username + '...')

    const matchingFave = this.faves.filter(fave => fave.id === id)[0];
    if (matchingFave){
        console.log('Fave found in DB....')
        this.faves = this.faves.filter(fave => fave.id !== id);
        this.save((err) => {
            if (err) throw err;
            else{
              console.log('Deleted fave.')
            }
        });
    }
    else{
        console.log('Fave not found in DB.')
    }

}

// Export
module.exports = mongoose.model ('User', userSchema);