const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    local:{
        username: String,
        password: String,
    }
})

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

// Export
module.exports = mongoose.model ('User', userSchema);