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

// Change password
userSchema.methods.changePassword = function(newPassword){ // can't be an arrow function, because of 'this'
    this.local.password = this.generateHash(newPassword);
    this.save((err) => {
        if (err) throw err;
        else{
          console.log('Saved new password.')
        }
    });
}

//  --------------
//
//  Faves
//
//  ---------------

// Add Fave
userSchema.methods.addFave = function(newFave){ // can't be an arrow function, because of 'this'
    console.log('Adding new fave to user ' + this.local.username + '...')

    if (this.faves.filter(fave => fave.id === newFave.id).length > 0){
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

// Get All Faves (and optionally filter by category or subcategory)
userSchema.methods.getAllFaves = function(category, subcategory){ 
    console.log('Getting faves from user ' + this.local.username + '...');
    let matchingFaves = [];
    // Get By Category
    if (category){
        console.log('Getting faves in category ' + category + '...')
        matchingFaves = this.faves.filter(fave => fave.category === category);
    }
    // Get by Subcategory
    else if(subcategory){
        console.log('Getting faves in subcategory ' + subcategory + '...')
        matchingFaves = this.faves.filter(fave => fave.subcategory === subcategory);
    }
    // Else get all faves
    else{
        console.log('Getting all faves...')
        matchingFaves = this.faves;
    }
    // If no faves found, return message
    if (matchingFaves.length > 0){
        console.log('Faves found. Sending to client.')
        return matchingFaves;
    }
    else{
        console.log('No faves found.')
        return {message: 'No faves found.'}
    }
}

// Export
module.exports = mongoose.model ('User', userSchema);