const mongoose = require('mongoose')
const Workout = require('../models/Workout')
const LiftSchema = require('../models/Lift')

module.exports = {
    getWorkouts: async (req, res) => {
        try {
            const workouts = await Workout.find()
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    createWorkout: async (req, res) => {
        try {
            await Workout.create({title: req.body.title})
            const workouts = await Workout.find()
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    deleteWorkout: async (req, res) => {
        try {
            await Workout.findOneAndDelete({ _id: req.params.id})
            const workouts = await Workout.find()
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    addLiftToWorkout: async (req, res) => {
        try {
            const workout = await Workout.findOne({_id: req.params.id})
            workout.lifts.push({name: req.body.name})
            await workout.save()
            const workouts = await Workout.find()
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    }
}