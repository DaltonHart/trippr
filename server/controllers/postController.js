const db = require(`../models`);

// GET /api/city
function index(req, res) {
  db.Post.find()
  .exec(function(err, post) {
    if (err) {
      return console.log("index error: " + err); }
      res.json(post);
    });
  };

// POST /api/city
function create(req, res) {
  var newPost = req.body
  console.log(req.body);
  db.Post.create(newPost, function(err, newPost){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newPost);
  });
}
// Show
function show(req, res){
  let postId = req.params.id;
  db.Post.findById(postId, (err, post) => {
    res.json(post);
  });
}
// controllers export
module.exports = {
  index: index,
  create: create,
  show: show,
};