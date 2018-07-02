const db = require(`../models`);

// GET /api/city
function index(req, res) {
  db.City.find({})
  .exec(function(err, city) {
    if (err) {
      return console.log("index error: " + err); }
      res.json(city);
    });
  };

// POST /api/city
function create(req, res) {
  var newCity = req.body
  console.log(req.body);
  db.City.create(newCity, function(err, newCity){
    if(err){res.status(500).json({"ERROR":"Database Error"});}
    res.json(newCity);
  });
}

// Show
function show(req, res){
  let cityId = req.params.id;
  db.City.findById(cityId, (err, city) => {
    res.json(city);
  });
}
// controllers export
module.exports = {
  index: index,
  create: create,
  show: show,
};