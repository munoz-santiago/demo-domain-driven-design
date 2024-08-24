import EmailSender from '../domain/emails/EmailSender';
import EmailSenderImplementation from './EmailSenderImplementation';

let emailSender: EmailSender;

export const getEmailSender = (): EmailSender => {
    if (!emailSender) emailSender = new EmailSenderImplementation();
    return emailSender;
};

