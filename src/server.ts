import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const transporter = nodemailer.createTransport({
   host: 'webhost.dynadot.com', // Replace with your SMTP server address
   port: 587, // Replace with your SMTP server port (587 for TLS, 465 for SSL)
   secure: false, // Set to true for SSL, false for TLS
   auth: {
      user: 'info@westcic.com', // Your email address
      pass: process.env.SMTP_PASSWORD // Your email password or app-specific password
   }
})

app.post('/send-email', (req, res) => {
   const { name, email, message, subject } = req.body

   // Define the email message
   const mailOptions = {
      from: `${email}`,
      to: 'info@westcic.com',
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
   }

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.error('Error sending email:', error)
         res.status(500).send('Email could not be sent.')
      } else {
         console.log('Email sent successfully:', info.response)
         res.status(200).send('Email sent successfully.')
      }
   })
})

app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
})
