const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    availability_from: {
        type: String,
        required: true,
        trim: true
    },
    availability_to: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    max_people: {
        type: String,
        required: true,
    },
    min_age: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    includes: {
        type: [String],
        required: true,
    },
    excludes: {
        type: [String],
        required: true,
    },
    itinerary: [
        {
            day: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true,
                trim: true
            },
            desc: {
                type: String,
                required: true,
                trim: true
            },
        }
    ],
    faqs: [
        {
            title: {
                type: String,
                required: true,
                trim: true
            },
            desc: {
                type: String,
                required: true,
                trim: true
            },
        }
    ],
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'review',
    }
}, { timestamps: true })

module.exports = mongoose.model('tour', tourSchema)