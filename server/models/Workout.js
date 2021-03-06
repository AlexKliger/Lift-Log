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
    lifts: [LiftSchema]
})

module.exports = mongoose.model('Workout', WorkoutSchema)