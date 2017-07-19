const Tweet = require('../models.Tweet');

module.exports = function(stream,io){
  stream.on('data',function(data){
    let tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname:data['user']['screen_name']
    }

    let tweetEntry = new Tweet(tweet);

    tweetEntry.save(function(err){
      if(!err){
        io.emit('tweet',tweet);
      }
    });

  });
}
