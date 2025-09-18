// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to receive form data
app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'add you gmail', // Your Gmail
      pass: 'add your app password'             // Gmail App Password
    }
  });

  // Email body with clear user info
  const fullMessage = `
You received a new message from SMB Renovation website contact form:

Name: ${name}
Email: ${email}

Message:
${message}
`;

  // Mail options
  const mailOptions = {
    from: 'add your gmail',        // Must be your Gmail
    replyTo: email,                                 // Reply goes to user
    to: 'again add your gmail',          // Receive email here
    subject: `${subject} - Message from ${name} (${email})`, // User name + email in subject
    text: fullMessage
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error); // Terminal log
      res.status(500).send('Error sending message');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
