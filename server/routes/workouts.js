const express = require('express')
const workoutsController = require('../controllers/workouts')

const router = express.Router()

router.get('/', workoutsController.getWorkouts)
router.post('/', workoutsController.createWorkout)
router.delete('/:id', workoutsController.deleteWorkout)
router.put('/addLift/:id', workoutsController.addLiftToWorkout)
router.put('/deleteLift/:id', workoutsController.deleteLiftFromWorkout)
router.put('/updateLift/:id', workoutsController.updateLift)
router.put('/updateWorkout/:id', workoutsController.updateWorkout)

module.exports = router