const mongoose = require('mongoose')
const LiftSchema = require('./Lift')

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        default: 0
    },
    lifts: {
        type: [LiftSchema]
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    }
})

module.exports = mongoose.model('Workout', WorkoutSchema)