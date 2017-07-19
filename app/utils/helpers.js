//https://github.com/the-Coding-Boot-Camp-at-UT/01-2017-Austin-Class-Content/blob/master/1-Class-Content/19-ReactJS/1-Class-Content/19.2/Activities/17-AddressFinder-Students/app/Components/utils/helpers.js

const axios = require('axios');
// const mongoose = require('mongoose');
// const Tweet = require('../../models/Tweet');


//helper object
const helpers = {
  //method is essentially an ajax request using Axios
  runQuery: function(street, city, state, zip) {
    let authKey = 'AIzaSyBzYen7lF7bJ7MTg5y0vdIILDtVX4RlpVw';
    // let address = `${addr} ${city} ${state} ${zip}`;
    let address = `2409 Town Lake Circle Austin Texas 78741`;

  //   const queryReps = 'https://www.googleapis.com/civicinfo/v2/representatives&' +
  // authKey + '&'+address;
  // let repsTweeter = [];

  const repAPI = 'https://www.googleapis.com/civicinfo/v2/representatives';
  // let params = {
  //   key: authKey,
  //   address: address
  // }

    //basic URL search with just a search term
    // console.log(queryReps);

    //axios to google CIVIC API
    return axios.get(repAPI, {
      params: {
        key: 'AIzaSyBzYen7lF7bJ7MTg5y0vdIILDtVX4RlpVw',
        address: address
      }
    }).then(function(data) {
      // console.log(data);
      function Politician(name, party, twitterHandle) {
        this.name = name;
        this.party = party;
        this.twitterHandle = twitterHandle;
        // this.email = email;
        // this.level = level;
        // this.title = title;
        // this.socLinks = socLinks;
        // this.urls = urls;
      }

      //create empty arrays to store pol objects
      let repsTweeter = [];

      //grab objects from dats
      const officials = data.data['officials'];
      // console.log(officials);

      //manipulating the data here at the divisions object
      //need to start here to build arrays of objects
      for(let i=0; i<officials.length; i++) {
        let pol = officials[i];
        //placeholders for the pol object -> global to this for loop scope b/c will be changing
        let name = officials[i].name;
        let party = officials[i].party;
        //let email;
        //let level;
        //let title;
        // let socLinks = [];
        let twitterHandle;

        ///console.log(channels);

        let channels = 'channels' in pol;
        // console.log(channels);

        if (channels) {
          for (let j=0; j<pol.channels.length; j++) {
              //console.log(pol.channels[j]);
            if(pol.channels[j].type === 'Twitter') {
              twitterHandle = pol.channels[j].id;
            }
          }
        } else {
          twitterHandle = 'undefined';
        }


        // console.log('\n-------------------------');
        // console.log('Index ' + i);
        // console.log('Name: ' +name);
        // console.log('Party: ' +party);
        // console.log('Twitter: ' +twitterHandle);
        //console.log('Email: ' +email);
        //console.log('Locality: ' +locality);
        //console.log('Level: ' +level);
        //console.log('Social: ' +socLinks);
        //console.log('URLs: ' +urls);

        let newPol = new Politician(name,party,twitterHandle);

        if(newPol.twitterHandle != 'undefined') {
          repsTweeter.push(newPol);
          }
        }
        console.log(repsTweeter);
        return repsTweeter;

  });
  },
  //twitter request
  getTweets: function() {
    return axios.get('/tweets').then(function(data) {
      console.log(data.data);
    });
  }
}

module.exports = helpers;
