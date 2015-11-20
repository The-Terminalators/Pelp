var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var passport = require('passport');
var logger = require('morgan');
var socket = require('socket.io');
var userRoutes = require('./routes/users.js');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:terminalat0r@ds057234.mongolab.com:57234/usersdb', function(err){
  if (err) console.log(err);
  else console.log("connected to mongo")
});

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/api', userRoutes);

app.listen(port, function(){
  console.log('Listening on port ', port);
});
