exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration',
    
    clientID: '59a97a05-cd41-4642-a30f-fb06b0a4700b',
    
    clientSecret: '9002611e-a56b-411c-8193-edcc65bec7f8',
    
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: 'http://localhost:2121/auth/openid/return', 
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,
  
    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    cookieEncryptionKeys: [ 
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],
  
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  }

  exports.destroySessionUrl = 'http://localhost:5000'
  exports.useMongoDBSessionStore = false
  exports.databaseUri = 'mongodb://localhost/OIDCStrategy'
  exports.mongoDBSessionMaxAge = 24 * 60 * 60