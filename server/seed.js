var db = require("./models");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CityList = [
    {
        name : 'Tokyo',
        photo : 'image url',
    },
    {
        name : 'Tokyo',
        photo : 'image url',
    },
    {
        name : 'Tokyo',
        photo : 'image url',
    },
]

PostList = [
    {
        title : 'What a city!',
        body : 'Can I move here today? Maybe next week? How about in a month?',
        photo : 'img url',
    },
    {
        title : 'What a city!',
        body : 'Can I move here today? Maybe next week? How about in a month?',
        photo : 'img url',
    },
    {
        title : 'What a city!',
        body : 'Can I move here today? Maybe next week? How about in a month?',
        photo : 'img url',
    },
]


db.City.remove({}, function(err, cities){
    // code in here runs after all posts are removed
    db.City.create(CityList, function(err, cities){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all cities:", cities);
      console.log("created", cities.length, "cities");
    });
    
  });

  db.Post.remove({}, function(err, posts){
    // code in here runs after all posts are removed
    db.Post.create(PostList, function(err, posts){
      // code in here runs after all posts are created
      if (err) { return console.log('ERROR', err); }
      console.log("all posts:", posts);
      console.log("created", posts.length, "posts");
      process.exit();
    });
    
  });