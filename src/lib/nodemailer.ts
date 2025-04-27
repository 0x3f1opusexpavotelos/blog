import nodemailer from "nodemailer"

// transport config object
// message config object
export const mailer = nodemailer.createTransport({
  // service: "resend",
  host: "smtp.resend.com",
  // host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY
  }
})
