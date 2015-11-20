var User = require('../models/User.js');
var Comment = require('../models/Comment.js')

/*function index(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  });
}

function create(req, res){
  var user = new User
}
*/

function userIndex(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  })
}

function createUser(req, res){
  /*passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup'
    })
  */
}
