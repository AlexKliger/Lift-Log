module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            console.log('is authenticated')
            return next()
        } else {
            console.log('is not authenticated')
            res.json([])
        }
    }
}