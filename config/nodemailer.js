const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'geekshubscristian@gmail.com',
        pass: '12345678aA'
    }
});
module.exports = transporter;
