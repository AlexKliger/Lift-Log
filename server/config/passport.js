const crypto = require('crypto');
const LocalStrategy = require('passport-local')
const User = require('../models/User')

module.exports = function (passport) {
    passport.use(new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password',
      },
      async function verify(username, password, done) {
          try {
            let user = await User.findOne({ username: username })
            if (!user) {
              // User not found. Create new user.
              const salt = crypto.randomBytes(16).toString('hex')
              let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex')
              user = await User.create({ username: username, hash: hash, salt: salt})
              return done(null, user)
            }
            // User found.
            let hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex')
            if (!(user.hash === hash)) {
              return done(null, false, {message: 'Incorrect username or password.'})
            }
            return done(null, user)
          } catch(err) {
            return done(err)
          }

      }
    ))

    passport.serializeUser(function(user, done) {
        process.nextTick(function() {
          return done(null, { username: user.username, hash: user.hash, salt: user.salt })
        });
      });
      
      passport.deserializeUser(function(user, done) {
        process.nextTick(function() {
          return done(null, user)
        });
      });

    // passport.serializeUser((user, done) => {
    //     done(null, user.id)
    // })
    
    // passport.deserializeUser((id, done) => {
    //     User.findById(id, (err, user) => done(err, user))
    // })
}