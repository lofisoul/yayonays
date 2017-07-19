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
