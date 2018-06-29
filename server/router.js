const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    console.log('FAACK', req.user.firstName)
    res.send({message: `Hello, ${req.user.firstName}, ${req.user.joinDate}`});
  });
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);
}
