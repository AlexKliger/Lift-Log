const express = require('express')
const workoutsController = require('../controllers/workouts')

const router = express.Router()

router.get('/', workoutsController.getWorkouts)
router.post('/', workoutsController.createWorkout)
router.delete('/:id', workoutsController.deleteWorkout)
router.put('/:id', workoutsController.addLiftToWorkout)

module.exports = router