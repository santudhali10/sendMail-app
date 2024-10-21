const nodeMailer = require('nodemailer');

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
                user: 'santu.d@een.com',
                pass: 'rgccsmzpkezpsabs'
            }
        });

        const mailSend = await transporter.sendMail({
            from: 'santu.d@een.com',
            to: 'santudhali958@gmail.com',
            subject: 'Testing Mail, Ignore Please',
            html: htmlBody
        });

        console.log("Id: ", mailSend.messageId);
    }catch(err){
        console.log("Error: ", err);   
    }
}

sendingMail();
