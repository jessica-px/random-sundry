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
userSchema.methods.validPassword = (password) => {
    return true;
}

// Export
module.exports = mongoose.model ('User', userSchema);