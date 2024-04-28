const nodemailer = require("nodemailer");
const fs = require("fs");
const config = require("../config/DB.config");
const auth = require("../config/Auth.config");
const moment = require("moment");


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_SMTP_HOST,
    // port: 465,
    // secure: true,
    // auth: {
    //   // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //   user: process.env.EMAIL_SMTP_USERNAME,
    //   pass:  process.env.EMAIL_SMTP_PASSWORD
    // },
  });

exports.sendmail = async function (to, subject, html) {

// console.log(to)
  try {
    // send mail with defined transport object
    // visit https://nodemailer.com/ for more options
    /*return transporter.sendMail({
      from: from, // sender address e.g. no-reply@xyz.com or "Fred Foo 👻" <foo@example.com>
      to: to, // list of receivers e.g. bar@example.com, baz@example.com
      subject: subject, // Subject line e.g. 'Hello ✔'
      //text: text, // plain text body e.g. Hello world?
      html: html, // html body e.g. '<b>Hello world?</b>'
    });*/
   /* return await transporter.sendMail({
        from: '"'+process.env.WEBNAME+'" <'+process.env.EMAIL_SMTP_USERNAME+'>', // sender address
        to: to, // list of receivers
        subject:subject, // Subject line
        text: html, // plain text body
        // html: "HELLO", // html body
      });*/
    
      //console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err);
  }

};

exports.getHTMLMailBody = function (template_name, link) {
  try {
    let files = fs.readFileSync("./app/helpers/" + template_name);
    files = files.toString();

    files = files.replace("host_link/", process.env.APP_URL_W_H);
    files = files.replace(/{{link}}/g, link);
    return files;
  } catch (err) {
    console.log(err);
    return "";
  }
};





