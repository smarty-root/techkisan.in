const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('User', userSchema)