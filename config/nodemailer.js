var nodemailer = require("nodemailer");
var hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TODO@email.com',
    pass: process.env.APP_PASSWORD,
  }
});

var options = {
  viewEngine: {
    extname: '.handlebars',
    layoutsDir: 'TODO/routes',
    defaultLayout: 'mail',
    partialsDir: 'TODO/views',
  },
  viewPath: 'views',
  extName: '.handlebars'
};

transporter.use('compile', hbs(options));

module.exports = transporter;
