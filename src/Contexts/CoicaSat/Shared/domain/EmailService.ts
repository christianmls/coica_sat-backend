export interface EmailBody {
  subject: string;
  body: string;
  to: string;
}

export interface EmailService {
  send(emailBody: EmailBody): Promise<void>;
}
