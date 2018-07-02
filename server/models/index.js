const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/server');

module.exports.City = require('./city');
module.exports.Post = require('./post');

