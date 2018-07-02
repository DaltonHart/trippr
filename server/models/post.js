const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const City = require('./city.js');


const postSchema = new Schema({
  title : String,
  body : String,
  photo : String,
  city : [{
     type: Schema.Types.ObjectId,
     ref: 'City',
     default: null,
   }],
});


const Post = mongoose.model('post', postSchema);

module.exports = Post;
