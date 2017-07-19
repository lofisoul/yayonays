//express
const express = require('express');
const mongoose = require('mongoose');
const Twitter = require('twitter');
const keys = require('../keys');
const Tweet = require('../models/Tweet');

// instantiate Twit module
const client = new Twitter(keys.twitter);

module.exports = function(app) {
  app.get('/tweets', function(req, res, next) {
    // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
    client.get('statuses/user_timeline', { screen_name: 'lofisoul', count: 10 }, function(error, tweets, response) {
      if (!error) {
        //let tweets = tweets.data['tweets'];
        //console.log(response);
        let retrievedTweets = [];

        for (let i = 0; i<tweets.length; i++) {
          let tweet = {
            twid: tweets[i].id,
            active: false,
            author: tweets[i].user.name,
            avatar: tweets[i].user.profile_image_url_https,
            body: tweets[i].text,
            date: tweets[i].created_at,
            screenname: tweets[i].user.screen_name
          }

          //creating new object for mongoose
          let tweetEntry = new Tweet(tweet);

          //push it into the array for front end
          retrievedTweets.push(tweet);

          Tweet.findOneAndUpdate(
            {twid: tweet.twid}, //filter
            tweetEntry, //what to put in there
            {upsert: true, new: true},
            function(err,doc){
            if(err) {
              console.log(err);
            } else {
              console.info('tweets stored!', doc);
            }
          });
        }

        console.log('tweets! ' +retrievedTweets);


        res.status(200).send(retrievedTweets);
      }
      else {
        res.status(500).json({ error: error });
      }
    });
  });
}
