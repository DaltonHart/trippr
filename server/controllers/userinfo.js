const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');
const models = require('../models');


const update = (req, res) => {
   User.findById(req.params.user_id, function(err, foundUser) {
      if(err) {
         console.log('error, dummy', err)
      }
         foundUser.firstName = req.body.firstName;
         foundUser.lastName = req.body.lastName;
         foundUser.homeCity = req.body.homeCity;
         foundUser.save(function(err, saved) {
            if(err){
               console.log('this is an error', err)
            } else {
               res.json(saved)
            }
         })
      }
   )}

   module.exports = {
      update: update,
   }
