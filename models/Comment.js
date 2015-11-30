var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  date: {type: Date},
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rating: {type: Number, required: true, max: 5},
  money: {type: Number, required: true, max: 5},
  dateCost: {type: Number, required: true, max: 5}
  //subcomments: [commentSchema] /*this is optional subcomments*/
});


var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
