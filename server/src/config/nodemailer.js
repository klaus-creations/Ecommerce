"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
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
const sendEmail = async function () {
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent: ", info.response);
    }
    catch (error) {
        console.error("Error sending email: ", error);
    }
};
exports.sendEmail = sendEmail;
exports.default = transporter;
//# sourceMappingURL=nodemailer.js.map