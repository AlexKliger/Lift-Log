const express = require('express')
const passport = require('passport')
const crypto = require('crypto');
const User = require('../models/User')
const router = express.Router()

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login/fail',
  failureMessage: true
}),
  async function(req, res) {
    res.redirect('/workouts')
  }
)

router.post('/register', async (req, res) => {
  console.log('register requested')
  try {
    const username = req.body.username
    const password = req.body.password
    let user = await User.findOne({username: username})
    if (user) {
      res.json({message: 'username already exists'})
    } else {
      const salt = crypto.randomBytes(16).toString('hex')
      let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
      user = await User.create({username: username, hash: hash, salt: salt})
      res.json({message: 'registration successful'})
    }
  } catch (err) {
    console.log(err)
  }
})

router.get('/login/fail', async (req, res) => {
  console.log('login requested')
  try {
      res.json({message: 'login failed'})
  } catch (err) {
      console.log(err)
  }
})

router.delete('/logout', async (req, res) => {
  console.log('logout requested')
  req.logout(function(err) {
    if (err) { return next(err) }
    res.redirect(303, '/workouts')
  })
})

router.get('/user', async (req, res) => {
  console.log('user requested:', req.user ? req.user.username : 'none')
  res.send(req.user)
})

module.exports = router