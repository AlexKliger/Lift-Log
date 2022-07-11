const mongoose = require('mongoose')

const LiftSchema = new mongoose.Schema({
    name: String,
    sets: [String]
})

module.exports = LiftSchema