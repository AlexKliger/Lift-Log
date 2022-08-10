const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/fail/login',
  failureMessage: true
}),
  async function(req, res) {
    res.json({message: 'successful redirect'})
  }
)

router.get('/fail/login', async (req, res) => {
  try {
      res.json({message: 'login failed'})
  } catch (err) {
      console.err(err)
  }
})

module.exports = router