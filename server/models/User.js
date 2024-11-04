const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        sparse: true
    },
    profile: {
        type: String
    },
    password: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    country: {
        type: String,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin']
    }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)