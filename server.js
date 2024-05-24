const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to handle email sending
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS,
        },
    });

    // Set up email data
    let mailOptions = {
        from: '"Web Form" <your-email@gmail.com>',
        to: process.env.MAIL,
        subject: 'Fox New Tab Mail',
        text: `You have a new form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
