const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USERNAME;
const emailPassword = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPassword
  }
});

const mailConfigurations = {
  
  // It should be a string of sender email
  from: 'alfredthehelperbot@gmail.com',
    
  // Comma Separated list of mails
  to: 'konstantinksh@gmail.com',

  // Subject of Email
  subject: 'Sending Email using Node.js',
    
  // This would be the text of email body
  text: 'Hi! There, You know I am using the'
    + ' NodeJS Code along with NodeMailer '
    + 'to send this email.'
};

module.exports = () => {
  transporter.sendMail(mailConfigurations, function(error, info){
    if (error) throw Error(error);
      console.log('Email Sent Successfully');
    console.log(info);
  });
}