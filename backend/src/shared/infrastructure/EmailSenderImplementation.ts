import nodemailer, { Transporter } from 'nodemailer';
import EmailSender, { SendEmailProps } from '../domain/emails/EmailSender';

export default class EmailSenderImplementation implements EmailSender {
    private transporter: Transporter;

    constructor() {
        const port = parseInt(process.env.SMTP_PORT || '587');
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });
        
        this.transporter
            .verify()
            .then(() => {
                console.log('SMTP transporter connected.');
            })
            .catch((error) => {
                console.error('SMTP transporter connection ERROR. ', error);
            });
    }

    async sendEmail({ receivers, subject, message, html }: SendEmailProps): Promise<boolean> {
        try {
            if (!receivers.length) throw new Error('receivers required.');

            const info = await this.transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: receivers,
                subject,
                text: message,
                html,
            });
            return !!info.messageId;
        } catch(error) {
            console.error('Error sending email: ', error);
            return false;
        }
    }
}
