var db = require("./models");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

CityList = [
    {
        name : 'Tokyo',
        country : 'Japan',
        photo : 'https://static.boredpanda.com/blog/wp-content/uploads/2016/01/tokyo-streets-night-photography-masashi-wakui-29.jpg',
    },
    {
        name : 'San Francisco',
        country: 'United States',
        photo : 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/1200/600/90/secure.parksandresorts.wdpromedia.com/media/abd/refresh/north-america/san-francisco-tours/adventures-by-disney-north-america-san-francisco-long-weekend-hero-01-golden-gate-bridge.jpg',
    },
    {
        name : 'New York',
        country: 'United States',
        photo : 'https://www.ediblemanhattan.com/wp-content/uploads/2016/04/header-new-york.jpg',
    },
    {
        name : 'Seattle',
        country: 'United States',
        photo : 'http://www.heritageschoolofinteriordesign.com/main/wp-content/uploads/2018/05/103845788-_sites-default-files-images-103845788-GettyImages-155735310.1910x1000.jpg',
    },
    {
        name : 'Austin',
        country: 'United States',
        photo : 'https://www.mymilestone.com/blog/wp-content/uploads/2017/12/forecast-1.jpg',
    },
    {
        name : 'Dubai',
        country: 'United Arab Emirates',
        photo : 'https://www.dubai.it/wp-content/uploads/sites/32/Dubai-Marina.jpg',
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
      process.exit();
    });

  });

//   db.Post.remove({}, function(err, posts){
//     // code in here runs after all posts are removed
//     db.Post.create(PostList, function(err, posts){
//       // code in here runs after all posts are created
//       if (err) { return console.log('ERROR', err); }
//       console.log("all posts:", posts);
//       console.log("created", posts.length, "posts");
//       process.exit();
//     });

//   });
