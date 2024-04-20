import { NextApiRequest, NextApiResponse } from 'next/types'
// import nodemailer from 'nodemailer'
import { contactEmailSchema } from './validator'
import { ValidationError } from 'yup'
import formatContactInfoForEmail from '@/utils/formatToEmailText'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Método não permitido' })
      return
    }

    const { name, email, whatsapp, instagram } = req.body

    console.log(name, email, whatsapp, instagram)

    await contactEmailSchema.validate(req.body, {
      abortEarly: false,
    })

    const textFormatted = formatContactInfoForEmail({
      name,
      email,
      whatsapp,
      instagram,
    })

    console.log(textFormatted)

    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.SMPT_EMAIL_LOGIN,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })

    // const mailOptions = {
    //   from: process.env.SMPT_EMAIL_LOGIN,
    //   to: process.env.SMPT_EMAIL_LOGIN,
    //   subject: `Email enviado pelo seu site: ${name}`,
    //   text: textFormatted,
    // }

    // await transporter.sendMail(mailOptions)
    res.status(200).json({ sucess: true })
  } catch (error: any) {
    if (error instanceof ValidationError) {
      return res.status(400).json({ errors: error.errors })
    }

    res.status(500).json({ success: false, error: error.message })
  }
}
