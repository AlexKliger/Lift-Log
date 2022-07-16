const mongoose = require('mongoose')

const SetSchema = new mongoose.Schema({
    weight: Number,
    reps: Number
})

module.exports = SetSchema