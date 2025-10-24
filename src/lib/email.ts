// Email service configuration
// Choose one: SendGrid, Resend, or AWS SES

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  // TODO: Implement your email service
  
  // Option 1: SendGrid
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({ from: 'noreply@apexvps.com', ...data });
  
  // Option 2: Resend
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: 'noreply@apexvps.com', ...data });
  
  // Option 3: AWS SES
  // const ses = new AWS.SES({ region: 'us-east-1' });
  // await ses.sendEmail({ Source: 'noreply@apexvps.com', ...data }).promise();
  
  console.log('[Email] Would send:', data);
  return true;
}

export function getContactEmailTemplate(name: string, email: string, subject: string, message: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; margin: 20px 0; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <div class="footer">
            <p>ApexVPS - High Performance Hosting</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getNewsletterWelcomeTemplate(email: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #3b82f6; color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .button { background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; }
          .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to ApexVPS!</h1>
          </div>
          <div class="content">
            <h2>Thanks for subscribing!</h2>
            <p>You're now part of our community. Here's what you can expect:</p>
            <ul>
              <li>Exclusive deals and promotions</li>
              <li>Product updates and new features</li>
              <li>Tips and tutorials for better performance</li>
            </ul>
            <p style="text-align: center; margin: 30px 0;">
              <a href="https://apexvps.com/pricing" class="button">View Our Plans</a>
            </p>
          </div>
          <div class="footer">
            <p>ApexVPS - High Performance Hosting</p>
            <p><a href="https://apexvps.com/unsubscribe?email=${email}">Unsubscribe</a></p>
          </div>
        </div>
      </body>
    </html>
  `;
}
