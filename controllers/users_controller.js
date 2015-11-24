var User = require('../models/User.js');
var Comment = require('../models/Comment.js')


/*USER CRUD*/
function userIndex(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  })
}

function createUser(req, res){
  passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup'
    });
}

function showUser(req, res){
  User.findById(req.params.id, function(err, user){
    if (err) console.log(err);
    res.json(user);
  });
}

function deleteUser(req, res){
  User.remove({ _id: req.params.id}, function(err){
    if (err) console.log(err);
    res.json({success: true, message: "User deleted"});
  });
}

function updateUser(req, res){
  User.findOneAndUpdate({email: req.params.email}, {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }, function(err, user){
    if (err) console.log(err);
    res.json(user);
  });
}


/*comment CRUD*/

function createUserComment(req, res){

}

function updateUserComment(req, res){

}

function deleteUserComment(req,res){

}


module.exports = {
  index: userIndex,
  create: createUser,
  show: showUser,
  update: updateUser,
  destroy: deleteUser
}
