const OIDCStrategy = require('passport-azure-ad').OIDCStrategy
const mongoose = require('mongoose')
const User = require('../models/User')

musule.exports = function (passport) {
    passport.use(
        new OIDCStrategy({
            
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log('auth: ', profile)
            const newUser = {
                authId: profile.oid,
                displayName: profile.displayName
            }

            try {
                let user = await User.findOne({ authId: profile.oid })

                if (user) {
                    done(null, user)
                } else {
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err) {
                console.error(err)
            }
        })
    )
}