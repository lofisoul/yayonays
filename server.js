var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");
var loginRoutes = require("./routes/login-routes.js");

require("./config/passport.js")();

var PORT = 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(passport.initialize());
app.use(passport.session());

require("./config/passport.js")();

app.use(loginRoutes);

app.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
=======
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const logger = require('morgan');
const mongoose = require('mongoose');
//favicon
const favicon = require('serve-favicon');
const path = require('path');

//set mongoose for ES6
mongoose.Promise = Promise;

//init express
var app = express();
var port = process.env.PORT || 3030

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(express.static('public'));

//handlebars
// const exphbs = require('express-handlebars');
//
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

//favicon
app.use(favicon(path.join(__dirname,'favicon.ico')));

//configure db
mongoose.connect('mongodb://localhost/yayonays');
var db = mongoose.connection;
//show mongoose errs
db.on('error', function(err){
  console.log('Mongoose Error: ', err);
});
//confirm success
db.once('open', function(){
  console.log('Mongoose connected!');
});

//routes
require('./routes/app-routes.js')(app);
require('./routes/tweets.js')(app);

//listen up!
app.listen(port, function(){
  console.log('Hello Smithers. You. Are. Good. At. Turning. Me. On: ' + port);
});
