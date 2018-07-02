const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post.js');

const citySchema = new Schema({
  name : String,
  photo : String,
  posts : [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
    default: null,
  }],
});


const City = mongoose.model('city', citySchema);

module.exports = City;
