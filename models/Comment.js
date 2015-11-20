var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
  title: String,
  entry: String,
  date: Date,
  _creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  //subcomments: [commentSchema]
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
