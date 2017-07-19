//https://github.com/the-Coding-Boot-Camp-at-UT/01-2017-Austin-Class-Content/blob/master/1-Class-Content/19-ReactJS/1-Class-Content/19.2/Activities/17-AddressFinder-Students/app/Components/utils/helpers.js
const axios = require('axios');

//twitter API
const twitterKeys = require('./keys.js').twitterKeys;
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

//helper object
const helpers = {
  //method is essentially an ajax request using Axios
  runQuery: function(street, city, state, zip) {
    let authKey = 'AIzaSyBzYen7lF7bJ7MTg5y0vdIILDtVX4RlpVw';
    let address = `${addr} ${city} ${state} ${zip}`;

    const queryReps = 'https://www.googleapis.com/civicinfo/v2/representatives&' +
  authKey + '&'+address;
  let repsTweeter = [];

    //basic URL search with just a search term
    console.log(queryReps);

    //axios
    return axios.get(queryReps).then(function(data) {
      return data;
    });
  }

  getTweets: function() {
  var params = {screen_name: twitterHandle, count: '20'};
  client.get('statuses/user_timeline', params, function(err, tweets, response) {
    if (err) {
        console.log(err);
      }
      console.log(tweets);
    }
  }

  getTwitterProfile: function() {
    var params = {screen_name: profile};
    client.get('users/show', params, function(err, tweets, response) {
      if (err) {
        console.log(err);
      }
      console.log(tweets);
      console.log(response);

    });
  }

}


module.exports = helpers;
