const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {

  const timestamp = new Date(parseInt(user.id.substring(0,8), 16) * 1000);
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({token: tokenForUser(req.user)})
}

exports.signup = function (req, res, next) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const homeCity = req.body.homeCity;
  // See if a user with the given email exists


  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'})
  }

  User.findOne({email: email}, function (err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with a given email does exist, return an error

    if (existingUser) {
      return res.status(422).send({error: 'Email is in use'});
    }

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      homeCity: homeCity
    });

    user.save(function (err) {
      if (err) {
        return next(err);
      }

      res.json({token: tokenForUser(user)});
    });

  });


  // If a user with email does not exist, create and save a user record

  // Respond to request indicating that the user was created
}
