'use server'

import { sendMail } from "./nodemailer"

export async function submitContactForm(data: FormData) {
  const mailOptions = {
    name: data.get('name') as string,
    email: data.get('email') as string,
    message: data.get('message') as string,
    tel: data.get('tel') as string
  }

  const { message, error } = await sendMail(mailOptions)

  return { message, error }
}
