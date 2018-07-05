const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const City = require('./city.js');


const postSchema = new Schema({
  title : String,
  body : String,
  photo : String,
});


const Post = mongoose.model('post', postSchema);

module.exports = Post;
