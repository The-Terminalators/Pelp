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
var passportConfig = require('./config/passport.js');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://admin:terminalat0r@ds057234.mongolab.com:57234/usersdb', function(err){
  if (err) console.log(err);
  else console.log("connected to mongo")
});

app.use(express.static('views'));

// middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ejs configuration
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//session middleware
app.use(session({
  secret: process.env.SECRET,
  cookie: {_expires: 60000000000}
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*Home/ Landing page and root route*/
app.get('/', function(req, res){
  res.render('index');
});

app.use('/', userRoutes);

app.listen(port, function(){
  console.log('Listening on port ', port);
});
