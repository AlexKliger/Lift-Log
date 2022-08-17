const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/fail/login',
  failureMessage: true
}),
  async function(req, res) {
    res.redirect('/workouts')
  }
)

router.get('/fail/login', async (req, res) => {
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