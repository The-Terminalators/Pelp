var User = require('../models/User.js');

function index(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  });
}

function create(req, res){
  var user = new User
}
