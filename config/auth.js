module.exports = {
  'facebookAuth' : {
    'clientID' : process.env.FACEBOOK_APP_ID,
    'clientSecret': process.env.FACEBOOK_SECRET,
    'callbackURL' : 'http://127.0.0.1:3000',
    'profileFields': ['emails', 'displayName']
  }
}
