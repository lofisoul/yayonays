//require mongoose
var mongoose = require('mongoose');
//create Schema
var Schema = mongoose.Schema;

//create the article schema
var UserSchema = new Schema({
  //key with object values
  name: {
    type: String,
    require: true
  },
  city: {
    type: String,
    require: true
  },
  zip: {
    type: String,
    require: true
  },
  twitter: {
    type: String,
    require: true
  },
  tweets: [{
      type: Schema.Types.ObjectId,
      ref: 'Tweet'
  }]
},{
  timestamps: {
    createdAt: 'created_at'
  }
});

//create the model
var User = mongoose.model('User', UserSchema);

//exports
module.exports = User;

//
// var transporter = require("../config/nodemailer.js");
//
// let mailOptions = {
//   from: '"Vidi Veni Mail" <vidivenimail@gmail.com>', // sender address
//   to: dbStuff[i].email, // list of receivers
//   subject: 'A new person has joined!', // Subject line
//   template: 'mailJoinedBody',
//   context: {
//     name: dbStuff[i].name,
//     websiteUrl: "https://vidiveni.herokuapp.com",
//     joinedName: req.user.name,
//     eventId: dbEvent[0][0].EventId
//   }
// };
//
// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Message %s sent: %s', info.messageId, info.response);
// });
