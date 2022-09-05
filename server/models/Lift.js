const mongoose = require('mongoose')
const SetSchema = require('./Set')

const LiftSchema = new mongoose.Schema({
    name: String,
    sets: [SetSchema]
})

module.exports = LiftSchema