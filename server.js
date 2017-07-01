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
});
