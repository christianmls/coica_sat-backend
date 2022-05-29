import {EmailBody, EmailService} from '../../domain/EmailService';
import nodemailer, {Transporter} from 'nodemailer';

export class NodeMailerEmailService implements EmailService {
  private readonly transporter: Transporter;
  constructor() {
    const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.ethereal.email';
    const EMAIL_PORT = Number(process.env.EMAIL_PORT) || 587;
    const EMAIL_USER = process.env.EMAIL_USER || '';
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';

    this.transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: true,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false
        },
        logger: true
      }
    ) ;
  }
  send(emailBody: EmailBody): Promise<void> {
    const info = {
      from: 'CoicaSat',
      to: emailBody.to,
      subject: emailBody.subject,
      html: emailBody.body,
    };
    return this.transporter.sendMail(info);
  }
}
