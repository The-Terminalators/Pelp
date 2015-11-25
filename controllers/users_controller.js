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

function indexComment(req,res) {
  Comment.find({}, function(err, comments){
    if(err) console.log(err)
    res.json(comments)
  })
}

function createComment(req, res){
  var comment = new Comment ()

  comment.title = req.body.title
  comment.entry = req.body.entry
  comment.date = new Date()
  comment._creator = req.body._creator
  comment.rating = req.body.rating
  comment.money = req.body.money
  comment.dateCost = req.body.dateCost
  console.log(req.body)

  comment.save(function(err) {
    if (err) console.log(err)
    res.json({success: true, message: "Comment created!"})
  })
  User.findById(req.body.user, function(err, user) {
  if (err) throw err
  user.addComments(comment)
  })
}

function showComment(req,res) {
  Comment.find({_id: req.params.id}, function(err, comment){
    if(err) console.log(err)
    res.json(comment)
  })
}

function updateComment(req, res){
  Comment.findById( req.params.id , function(err, comment){
    if (err) res.send(err);
    console.log("THE REQUEST BODY IS: ", req.body)

    if(req.body.title){
      comment.title = req.body.title;
    }

    if(req.body.entry){
      comment.entry = req.body.entry;
    }

    if(req.body.rating){
      comment.rating = req.body.rating;
    }

    if(req.body.money){
      comment.money = req.body.money;
    }

    if(req.body.dateCost){
      comment.dateCost = req.body.dateCost;
    }

    comment.save(function(err){
      if (err) res.send(err);
      res.json({message: "Success!"});
    });
  });
}

function deleteComment(req,res){
  Comment.remove({_id: req.params.id}, function(err, comment){
    if(err) console.log(err)
    res.json(comment)
  })
}

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}


/*SEARCH ROUTES*/
function findUsers(req, res){
  var users_found = [];
  User.find({}, function(err, users){
    //console.log("TEST");
    //console.log(users[1]);
    console.log("REQUESTED: ", req.params.name)
    for(var i = 0; i < users.length; i++){

      var userName = (users[i].local.name || users[i].facebook.name).toLowerCase();

      var user_name = (users[i].local.name || users[i].facebook.name)
      var user_id = users[i]._id

      console.log("USER: ", userName)

      var searchName = req.params.name.toLowerCase();
      console.log(userName.indexOf(searchName) > -1)
      if (userName.indexOf(searchName) > -1){
        object = {
          _id: user_id,
          name: user_name
        }
        console.log("WE ARE HERE");
        users_found.push(object)
      }
    }
    res.send(users_found);
  })
}


module.exports = {
  index: userIndex,
  show: showUser,
  update: updateUser,
  destroy: deleteUser,
  indexComment: indexComment,
  createComment: createComment,
  showComment: showComment,
  updateComment: updateComment,
  deleteComment: deleteComment,
  findUsers: findUsers
}
