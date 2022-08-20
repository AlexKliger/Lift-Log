const mongoose = require('mongoose')
const Workout = require('../models/Workout')
const LiftSchema = require('../models/Lift')

module.exports = {
    getWorkouts: async (req, res) => {
        console.log('getWorkouts requested')
        try {
            const workouts = await Workout.find({userId: req.user.id})
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    createWorkout: async (req, res) => {
        console.log('createWorkout requested')
        try {
            await Workout.create({...req.body, userId: req.user.id})
            const workouts = await Workout.find({userId: req.user.id})
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    deleteWorkout: async (req, res) => {
        console.log('deleteWorkout requested')
        try {
            await Workout.findOneAndDelete({ _id: req.params.id})
            const workouts = await Workout.find({userId: req.user.id})
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    updateWorkout: async (req, res) => {
        console.log('updateWorkout requested')
        try {
            const workout = await Workout.findOne({'_id': req.params.id})
            workout.set(req.body)
            await workout.save()
            const workouts = await Workout.find({userId: req.user.id})
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    },
    updateLift: async (req, res) => {
        console.log('updateLift requested')
        try {
            const workout = await Workout.findOne({'lifts._id': req.params.id})
            const lift = workout.lifts.id(req.params.id)
            lift.set(req.body)
            await workout.save()
            const workouts = await Workout.find({userId: req.user.id})
            res.json(workouts)
        } catch (err) {
            console.log(err)
        }
    }
}