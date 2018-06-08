const mongoose = require('mongoose');
//gonna need a hash middleware

const userSchema = mongoose.Schema({
    local:{
        username: String,
        password: String,
    }
})

// Generate hash
userSchema.methods.generateHash = (password) => {
    console.log('hashing password: ' + password)
    return password;
}

// Validate password
userSchema.methods.validPassword = (password) => {
    return true;
}

// Export
module.exports = mongoose.model ('User', userSchema);