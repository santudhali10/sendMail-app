const nodeMailer = require('nodemailer');
require('dotenv').config();

const htmlBody = `
    <h3>Hello, This email is sent to you from EEN for testing purpose only.</h3>
    <p>Thank you so much for your time.</p>
`

const sendingMail = async () => {
    try {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SENDER_MAIL,
                pass: process.env.AUTH_PASS
            }
        });

        const mailSend = await transporter.sendMail({
            from: process.env.SENDER_MAIL,
            to: 'santudhali958@gmail.com',
            subject: 'Testing Mail, Ignore Please',
            html: htmlBody,
            attachments: [{
                filename: 'image1.png',
                path: './images/image1.png',
            }]
        });

        console.log("Id: ", mailSend.messageId);
    }catch(err){
        console.log("Error: ", err);   
    }
}

sendingMail();
