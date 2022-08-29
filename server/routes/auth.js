const express = require('express')
const passport = require('passport')
const User = require('../models/User')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/login', passport.authenticate('local', {
  successRedirect: '/workouts',
  failureRedirect: '/auth/login/fail'
  })
)

router.delete('/logout', authController.logout)

router.post('/register', authController.register)

router.get('/user', authController.user)

router.get('/login/fail', authController.loginFail)

module.exports = router