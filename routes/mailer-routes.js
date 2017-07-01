var transporter = require("../config/nodemailer.js");

let mailOptions = {
  from: '"Yayonays" <TODO@email.com>', // sender address
  to: , // get email from database
  subject: 'Here are you matches!', // Subject line
  template: 'TODO',
  context: {
    name: 'TODO', // database
    websiteUrl: "yayonays.com",
    userCard: 'TODO', // scorecard stuff
  }
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent');
});
