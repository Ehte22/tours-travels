const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    tourId: {
        type: mongoose.Types.ObjectId,
        ref: 'tour',
        required: true
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

module.exports = mongoose.model('review', reviewSchema)