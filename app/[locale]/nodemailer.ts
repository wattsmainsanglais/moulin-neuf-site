import nodemailer from 'nodemailer';
import { ContactFormData } from './types';

export async function sendMail(data: ContactFormData) {
  const {
    firstName, surname, addressLine1, addressLine2, postCode, city, country,
    email, mobile, arrivalDate, travellingFrom, preferredCheckIn, departureDate,
    travellingTo, numberOfRooms, numberOfGuests, travellingWithPets, petsSpecify,
    furtherInfo,
  } = data;

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
    // Enquiry email to admin
    await transporter.sendMail({
      from: process.env.USER,
      to: process.env.USER,
      subject: `New booking enquiry from ${firstName} ${surname}`,
      html: `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${surname}</p>
        <p><strong>Address:</strong> ${addressLine1}${addressLine2 ? `, ${addressLine2}` : ''}, ${postCode} ${city}, ${country}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Arrival:</strong> ${arrivalDate}${travellingFrom ? ` (travelling from ${travellingFrom})` : ''}</p>
        <p><strong>Preferred check-in time:</strong> ${preferredCheckIn}</p>
        <p><strong>Departure:</strong> ${departureDate}${travellingTo ? ` (travelling to ${travellingTo})` : ''}</p>
        <p><strong>Number of rooms:</strong> ${numberOfRooms}</p>
        <p><strong>Number of guests:</strong> ${numberOfGuests}</p>
        <p><strong>Travelling with pets:</strong> ${travellingWithPets}${petsSpecify ? ` – ${petsSpecify}` : ''}</p>
        <p><strong>Further information:</strong></p>
        <p>${furtherInfo || '-'}</p>
      `,
    });

    // Confirmation email to enquirer
    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: 'Thank you for your enquiry - Chambres Moulin Neuf',
      html: `
        <h2>Thank you for your enquiry, ${firstName}!</h2>
        <p>We have received your booking enquiry and will get back to you as soon as possible.</p>
        <hr/>
        <p><strong>Arrival:</strong> ${arrivalDate}</p>
        <p><strong>Departure:</strong> ${departureDate}</p>
        <p><strong>Number of rooms:</strong> ${numberOfRooms}</p>
        <p><strong>Number of guests:</strong> ${numberOfGuests}</p>
      `,
    });

    return { message: 'Enquiry sent successfully!', error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: null, error: 'Failed to send enquiry. Please try again later.' };
  }
}
