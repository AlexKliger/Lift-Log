const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post('/register', (req, res) => {

})

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/fail',
  failureMessage: true
}),
  async function(req, res) {
    res.json({message: 'successful redirect'})
  }
)

router.get('/fail', async (req, res) => {
  try {
      console.log('login failed', 'username:', req.body.username, 'pw:', req.body.password)
      res.json({'message': 'login failed'})
  } catch (err) {
      console.err(err)
  }
})

module.exports = router