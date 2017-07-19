import React from 'react';
import Tweet from './Tweet.js';

const helpers = require('../../utils/helpers');

class TweetList extends React.Component {
  constructor() {
    super();
  }

  gatherReps() {
    helpers.runQuery();
  }

  getTweets() {
    helpers.getTweets();
  }

  render(){
    // let content = this.props.tweets.map(function(tweet){
    //   return(
    //     <Tweet key={tweet.twid} tweet={tweet}/>
    //   )
    // });

    return (
      <div className="tweet-list">
      <h2 className="list">Tweeeets!</h2>
      <button className="btn" onClick={this.gatherReps} type="button">My Reps!</button>
      <button className="btn" onClick={this.getTweets} type="button">My Tweets!</button>
      </div>
    )
  }
}

export default TweetList;
