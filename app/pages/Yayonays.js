import React from 'react';
//get my components
import Header from './components/Header';
import TweetList from './components/TweetList';


//coming soon!
/*-----
import Profile from './components/Profile';
------*/

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Yayonays extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="main">
        <Header />
        <TweetList />
      </div>
    )
  }
}

export default Yayonays;
/***FAILURE***/
// class Yayonays extends React.Component {
//   constructor(props) {
//     super(props);
//     props = props || this.props;
//     this.state = {
//       tweets: props.tweets,
//       count: 0,
//       page: 0,
//       paging: false,
//       skip:0,
//       done: false
//     }
//
//     //binders
//     this.addTweet = this.addTweet.bind(this);
//     this.showNewTweets = this.showNewTweets.bind(this);
//     this.checkWindowScroll = this.checkWindowScroll.bind(this);
//     this.getPage = this.getPage.bind(this);
//     this.loadPagedTweets = this.loadPagedTweets.bind(this);
//   }
//
//   componentWillReceiveProps(newProps, oldProps) {
//     this.setState(this.getInitialState(newProps));
//   }
//
//   componentDidMount() {
//     let self = this;
//
//     const socet = io.connect();
//
//     socket.on('tweet',function(data){
//       self.addTweet(data);
//     });
//
//     window.addEventListener('scroll',this.checkWindowScroll);
//   }
//
//   addTweet(tweet) {
//     let updated = this.state.tweets;
//     let count = this.state.count + 1;
//     let skipi = this.state.skip + 1;
//     updated.unshift(tweet);
//     this.setState({tweets:updated, countr:count, skip: skip});
//   }
//
//   showNewTweets() {
//     let updated = this.state.tweets;
//     updated.forEach(function(tweet){
//       tweet.active = true;
//     });
//
//     this.setState({tweets:updated,count:0});
//   }
//
//   checkWindowScroll() {
//     var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     var s = document.body.scrollTop;
//     var scrolled = (h + s) > document.body.offsetHeight;
//
//     if(scrolled && !this.state.paging && !this.state.done) {
//       this.setState({paging: true, page: this.state.page + 1});
//       this.getPage(this.state.page);
//     }
//   }
//
//   getPage(page) {
//     let request = new XMLHttpRequest(), self = this;
//     request.open('GET','page/'+page+'/'+this.state.skip, true);
//     request.onload = function() {
//       if(request.status>=200 && request.status<400) {
//         self.loadPagedTweets(JSON.parse(request.responseText));
//       } else {
//         self.setState({paging: false, done: true});
//       }
//     }
//     request.send();
//   }
//
//   loadPagedTweets(tweets) {
//     let self = this;
//     if(tweets.length > 0) {
//       let updated = this.state.tweets;
//       tweets.forEach(function(tweet){
//         updated.push(tweet);
//       });
//       setTimeout(function(){
//         self.setState({tweets:updated, paging:false});
//       }, 1000);
//     } else {
//       this.setState({done:true, paging:false});
//     }
//   }
//
//   render() {
//     return (
//       <div className="Yayonays">
//         <List tweets={this.state.tweets} />
//         <Loader paging={this.state.paging} />
//         <NotificationBar count={this.state.count} onShowNewTweets={this.showNewTweets} />
//       </div>
//     )
//   }
// }
//
// export default Yayonays;
