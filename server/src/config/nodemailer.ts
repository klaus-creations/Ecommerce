import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

let mailOptions = {
  from: process.env.SENDER_EMAIL,
  to: "abushnatanem@gmail.com",
  subject: "Testing Nodemailer",
  text: "Hello, this is a test email!",
};

export default transporter;
