var User = require('../models/User.js');
var Comment = require('../models/Comment.js')
var bcrypt = require('bcrypt-nodejs')


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
  User.findById( req.params.id , function(err, user){
    console.log("USER IS: ", user);


    if (err) res.send(err);
    if (err) console.log(err);
    console.log("THE REQUEST BODY IS: ", req.body)

    if(req.body.name){
      user.local.name = req.body.name;
      //console.log(user.local.name)
    }
    if(req.body.email){
      user.local.email = req.body.email;
      //console.log(user.local.email)
    }
    if(req.body.password){
      user.local.password = req.body.password;
      user.local.password = user.generateHash(user.local.password)
      //console.log(user.local.password)
    }

    user.save(function(err){
      if (err) res.send(err);
      res.json({message: "Success!"});
    });
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
  show: showUser,
  update: updateUser,
  destroy: deleteUser
}
