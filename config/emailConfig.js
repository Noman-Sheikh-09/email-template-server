const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SG_MAIL_API_KEY);
module.exports = sgMail;

