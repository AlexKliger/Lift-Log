const express = require('express')
const workoutsController = require('../controllers/workouts')
const { ensureAuth } = require('../middleware/auth')

const router = express.Router()

router.get('/', ensureAuth, workoutsController.getWorkouts)
router.post('/', ensureAuth, workoutsController.createWorkout)
router.delete('/:id', workoutsController.deleteWorkout)
router.put('/:id', workoutsController.updateWorkout)
router.put('/updateLift/:id', workoutsController.updateLift)

module.exports = router