import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, title, message } = await request.json();

        console.log('Received data:', { name, email, title, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
            secure: true,
        });

        await new Promise((resolve, reject) => {
            transporter.verify((error, success) => {
                if (error) {
                    console.error('Verification error:', error);
                    reject(error);
                } else {
                    console.log('Server is ready to send messages');
                    resolve(success);
                }
            });
        });

        const mailData = {
            from: `"${name}" <${email}>`,
            to: process.env.NEXT_PUBLIC_GMAIL_USER,
            subject: title,
            text: message,
            html: `<p>${message}</p>`,
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailData, (err, info) => {
                if (err) {
                    console.error('Error sending email:', err);
                    reject(err);
                } else {
                    console.log('Email sent:', info);
                    resolve(info);
                }
            });
        });

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
