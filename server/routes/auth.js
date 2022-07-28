const express = require('express')
const router = express.Router()

router.get('/login',
    function(req, res, next) {
        passport.authenticate('azuread-openidconnect',
            {
                response: res,
                resourceURL: config.resourceURL,
                customState: 'my_state',
                failureRedirect: '/'
            }
        )(req, res, next)
    },
    function(req, res) {
        console.log('getLogin requested')
        res.redirect('/workouts')
    }
)

module.exports = router