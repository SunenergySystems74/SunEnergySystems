const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: email,
    to: "sunenergysystems74@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form Your SunEnergySystem:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send({ message: "Email sent successfully!" });
    }
  });
});

app.post("/send-client", (req, res) => {
  const { name, email, phone, address, consumer } = req.body;

  const mailOptions = {
    from: email,
    to: "sunenergysystems74@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new contact form Your SunEnergySystem:
    Name: ${name}
    Phone: ${phone}
    Address: ${address}
    ElectricityConsumerNumber: ${consumer}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send({ message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send({ message: "Email sent successfully!" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
