var passport = require("passport");
var TwitterStrategy = require('passport-twitter').Strategy;
var TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
var TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;

var db; // Include the DB here to get profile info???


// DB shit
// Not sure how you want to configure MongoDB login shit.
module.exports = function() {
  passport.use(new TwitterStrategy({
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: "TODO"
    },
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate({ twitterId: profile.id }, function(err, user) {
        return cb(err, user);
      });
    }
  ));

  passport.serializeUser(function(user, callback) {
    console.log('serializing user.');
    callback(null, user);
  });

  passport.deserializeUser(function(user, callback) {
    console.log('deserialize user.');
    callback(null, user);
  });
};
