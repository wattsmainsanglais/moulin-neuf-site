'use server'

import { sendMail } from "./nodemailer"
import { ContactFormData } from "./types"

export async function submitContactForm(data: FormData) {
  const mailOptions: ContactFormData = {
    firstName: data.get('firstName') as string,
    surname: data.get('surname') as string,
    addressLine1: data.get('addressLine1') as string,
    addressLine2: data.get('addressLine2') as string,
    postCode: data.get('postCode') as string,
    city: data.get('city') as string,
    country: data.get('country') as string,
    email: data.get('email') as string,
    mobile: data.get('mobile') as string,
    arrivalDate: data.get('arrivalDate') as string,
    travellingFrom: data.get('travellingFrom') as string,
    preferredCheckIn: data.get('preferredCheckIn') as string,
    departureDate: data.get('departureDate') as string,
    travellingTo: data.get('travellingTo') as string,
    numberOfRooms: data.get('numberOfRooms') as string,
    numberOfGuests: data.get('numberOfGuests') as string,
    travellingWithPets: data.get('travellingWithPets') as string,
    petsSpecify: data.get('petsSpecify') as string,
    furtherInfo: data.get('furtherInfo') as string,
    termsAccepted: data.get('termsAccepted') as string,
  }

  const { message, error } = await sendMail(mailOptions)

  return { message, error }
}
