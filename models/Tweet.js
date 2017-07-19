const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  twid: String,
  active: Boolean,
  author: String,
  avatar: String,
  body: String,
  date: Date,
  screenname: String
});

const Tweet = mongoose.model('Tweet',TweetSchema);

module.exports = Tweet;
