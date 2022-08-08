const crypto = require('crypto');
const LocalStrategy = require('passport-local')
const User = require('../models/User')

module.exports = function (passport) {
    passport.use(new LocalStrategy(
        async function(username, password, done) {
            try {
                const user = await User.findOne({ username: username })
                if (!user || !(user.hash === crypto.pbkdf25sync(password, user.salt, 10000, 512, 'sha512').toString('hex'))) {
                    const salt = crypto.randomBytes(16).toString('hex')
                    const hash = crypto.pbkdf25sync(password, salt, 10000, 512, 'sha512').toString('hex')
                    user = await User.create({ username: username, salt: salt, hash: hash })
                    return done(null, User)
                    // return done(null, false, {message: 'Incorrect username or password.'})
                }
                return done(null, user)
            } catch(err) {
                return done(err)
            }

        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    })
}