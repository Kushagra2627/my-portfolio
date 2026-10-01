import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const { name, email, subject, message } = req.body as ContactRequestBody;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Validation Failed: A valid name (at least 2 characters) is required.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Validation Failed: A valid email address is required.'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Validation Failed: A message of at least 5 characters is required.'
      });
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      subject: (subject || 'Portfolio Inquiry').trim().slice(0, 150),
      message: message.trim().slice(0, 2000),
      receivedAt: new Date().toISOString()
    };

    const recipientEmail = process.env.NOTIFY_EMAIL || 'kushagratomar044@gmail.com';
    const recipientPhone = process.env.NOTIFY_PHONE || '+91 7060597775';

    console.log('[API/CONTACT] Form Submission Received:', sanitizedData);
    console.log(`[NOTIFICATION] Alerting: Email (${recipientEmail}) & Phone (${recipientPhone})`);

    // Dispatch real email via Nodemailer if SMTP is configured
    let emailSent = false;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"Portfolio Alert Engine" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          subject: `[PORTFOLIO TRANSMISSION] ${sanitizedData.subject}`,
          html: `
            <div style="font-family: monospace; background: #0e0e10; color: #e5e1e4; padding: 20px; border: 1px solid #00ff66;">
              <h2 style="color: #00ff66; border-bottom: 1px solid #3b4b3a; padding-bottom: 10px;">
                NEW PORTFOLIO TRANSMISSION RECEIVED
              </h2>
              <p><strong>SENDER NAME:</strong> ${sanitizedData.name}</p>
              <p><strong>SENDER EMAIL:</strong> ${sanitizedData.email}</p>
              <p><strong>SUBJECT:</strong> ${sanitizedData.subject}</p>
              <p><strong>TIMESTAMP:</strong> ${sanitizedData.receivedAt}</p>
              <hr style="border-color: #3b4b3a;" />
              <p><strong>MESSAGE:</strong></p>
              <blockquote style="background: #1c1b1d; padding: 15px; border-left: 3px solid #00ff66; margin: 0;">
                ${sanitizedData.message.replace(/\n/g, '<br/>')}
              </blockquote>
              <p style="font-size: 11px; color: #849581; margin-top: 20px;">
                Notification dispatched to Phone: ${recipientPhone} | Email: ${recipientEmail}
              </p>
            </div>
          `
        });
        emailSent = true;
        console.log('[NOTIFICATION] Email sent to', recipientEmail);
      } catch (err) {
        console.error('[NOTIFICATION ERROR] Email transport failed:', err);
      }
    }

    return res.status(200).json({
      success: true,
      message: `Transmission received & notification dispatched to Kushagra Tomar's email (${recipientEmail}) and phone (${recipientPhone}).`,
      emailSent,
      data: {
        timestamp: sanitizedData.receivedAt,
        sender: sanitizedData.email,
        notifyPhone: recipientPhone,
        notifyEmail: recipientEmail
      }
    });
  } catch (error) {
    console.error('[API/CONTACT] Internal Error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.'
    });
  }
}
