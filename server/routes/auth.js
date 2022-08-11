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
  try {
      res.json({message: 'login failed'})
  } catch (err) {
      console.log(err)
  }
})

router.delete('/logout', async (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err) }
    res.redirect(303, '/workouts')
  })
})

module.exports = router