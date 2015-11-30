var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var userSchema = new Schema ({
  local: {
    name: String,
    email: String,
    password: String,
  },
  facebook: {
    id: String,
    name: String,
    token: String,
    email: String
  },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  overallRating: {type: Number, max: 5},
  ratings: [],
  overallMoney: {type: Number,  max: 5},
  moneys: [],
  overallDateCost: {type: Number,  max: 5},
  dateCosts: [],
  pictureURL: String
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

userSchema.methods.addComments=function(comment){
  var user = this;
  console.log('======USER=====',user)
  user.comments.push(comment)
  user.ratings.push(comment.rating)
  user.moneys.push(comment.money)
  user.dateCosts.push(comment.dateCost)
  user.save(function(err, user){
    if (err) console.log(err)
    console.log(user)
    return
  })
  console.log('====Comment===',comment)
}

//create method on user model that grabs all values in user array and gives average in "overallRating"


var User = mongoose.model('User', userSchema);

module.exports = User;
