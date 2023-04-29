const admin = require("firebase-admin");
const credentials = require("../credentials.json");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const sgMail = require("../config/emailConfig");
const ejs = require("ejs");
const functions = require("firebase-functions");
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
// const contactEmailTemplate = require("../views/contactEmailTemplate");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASS,
  },
});
exports.contactEmail = async (req, res, next) => {
  try {
    // let template = await contactEmailTemplate(req.body);
    const { name, email, topic, message } = req.body;

    const mailOptions = {
      from: "nomanshk310@gmail.com",
      to: email,
      subject: "Thanks for contact Us",
      // message: "This is for testing",
      html: "",
    };
    const emailTemplatePath = path.join(
      __dirname,
      "../views/email_template.ejs"
    );

    ejs.renderFile(
      emailTemplatePath,
      {
        name: name,
        topic: topic,
        message: message,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          mailOptions.html = data;
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
        }
      }
    );

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log(error, "error");
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });

    // sgMail
    //   .send({
    //     from: email,
    //     // to: "techloset.test@gmail.com",
    //     to: "nomanshk310@gmail.com",
    //     // cc: "jobs@techloset.com",
    //     subject: `Contact Form Submission: ${topic}`,
    //     text: "test text",
    //     html: template,
    //   })
    //   .then(() => {
    //     res.send("Successfully! Sent Message");
    //   })
    //   .catch((error) => {
    //     console.log(error.response.body);
    //   });
  } catch (err) {
    // next(err);
    console.log(err);
  }
};

exports.verifyEmail = functions.auth.user().onCreate((user) => {
  const userEmail = user.email;
  const userId = user.uid;

  const mailOptions = {
    from: "your-email-address@gmail.com",
    to: userEmail,
    subject: "Verify your email",
    html: `
      <p>Hello ${userEmail},</p>
      <p>Thank you for signing up for our application. Please verify your email by clicking on the following link:</p>
      <p><a href="https://your-app-url.com/verify-email?userId=${userId}">Verify email</a></p>
    `,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
