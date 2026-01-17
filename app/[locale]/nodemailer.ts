import nodemailer from 'nodemailer';

interface MailOptions {
  name: string;
  email: string;
  message: string;
  tel: string;
}

export async function sendMail(mailOptions: MailOptions) {
  const { name, email, message, tel } = mailOptions;

  // Create transport (update with your SMTP settings or use environment variables)
  const transporter = nodemailer.createTransport({
    host: process.env.HOST || 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.USERPASS,
    },
  });

  try {
    // Email to admin
    await transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${tel}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <h2>Thank you for your message, ${name}!</h2>
        <p>We have received your enquiry and will get back to you soon.</p>
        <hr/>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { message: 'Email sent successfully!', error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: null, error: 'Failed to send email. Please try again later.' };
  }
}
