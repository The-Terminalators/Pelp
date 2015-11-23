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

function deleteUser(req, res){

}

function updateUser(req, res){

}

function showUser(req, res){

}

/*comment CRUD*/
function createUserComment(req, res){

}

function updateUserComment(req, res){

}

function deleteUserComment(req,res){

}
