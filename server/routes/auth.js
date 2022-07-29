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

router.get('/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/todos');
  });

router.post('/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/todos');
  });

module.exports = router