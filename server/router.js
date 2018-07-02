const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const controllers = require('./controllers');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    const date = req.user.joinDate.toLocaleDateString("en-US")
    console.log(date)
    console.log('FAACK', req.user.firstName)
    res.send({message: `Hello, ${req.user.firstName}, you joined the Trippr community on ${date}. How is the weather in ${req.user.homeCity}?`});
  });
  app.put('/editProfile/:user_id', requireAuth)
  app.post('/signup', Authentication.signup);
  app.post('/signin', requireSignIn, Authentication.signin);
  app.get('/logout', (req,res) => {
     req.user = null;
     res.json({msg: "logged out"})
 })
 
 app.get('/api/cities', controllers.city.index);



 app.get('/api/cities/:id', controllers.city.show)
 app.get('/api/posts', controllers.post.index);
 app.get('/api/posts/:id', controllers.post.show)
 app.get('/api', controllers.api.index);
}
