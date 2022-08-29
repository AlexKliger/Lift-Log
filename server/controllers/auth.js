const User = require('../models/User')
const crypto = require('crypto')

module.exports = {
  logout: async (req, res) => {
    console.log('logout requested')
    req.logout(function(err) {
      if (err) { return next(err) }
      res.redirect(303, '/workouts')
    })
  },
  register: async (req, res) => {
    console.log('register requested')
    try {
      const username = req.body.username
      const password = req.body.password
      let user = await User.findOne({username: username})
      if (user) {
        res.json({success: false, message: 'username already exists'})
      } else {
        const salt = crypto.randomBytes(16).toString('hex')
        let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
        user = await User.create({username: username, hash: hash, salt: salt})
        res.json({success: true, message: 'registration successful'})
      }
    } catch (err) {
      console.log(err)
    }
  },
  user: async (req, res) => {
    console.log('user requested:', req.user ? req.user.username : 'none')
    res.send(req.user)
  },
  loginFail: async (req, res) => {
    console.log('login request')
    try {
        res.status(401).send({message: "Incorrect username or password."})
    } catch (err) {
        console.log(err)
    }
  }
}