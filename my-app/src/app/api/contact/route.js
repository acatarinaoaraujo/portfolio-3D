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
            debug: false,
            logger: false,
        });

        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.NEXT_PUBLIC_GMAIL_USER,
            subject: title,
            text: message,
        });


        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
