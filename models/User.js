var transporter = require("../config/nodemailer.js");

let mailOptions = {
  from: '"Vidi Veni Mail" <vidivenimail@gmail.com>', // sender address
  to: dbStuff[i].email, // list of receivers
  subject: 'A new person has joined!', // Subject line
  template: 'mailJoinedBody',
  context: {
    name: dbStuff[i].name,
    websiteUrl: "https://vidiveni.herokuapp.com",
    joinedName: req.user.name,
    eventId: dbEvent[0][0].EventId
  }
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});
