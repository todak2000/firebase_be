// lib/email.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: `${process.env.ZEPTOMAIL_HOST}`, 
  port: 587,
  auth: {
    user: `${process.env.ZEPTOMAIL_USERNAME}`,
    pass: `${process.env.ZEPTOMAIL_PASSKEY}`,
  },
});

export const sendEmail = async (mailOptions: nodemailer.SendMailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: 'email successful' };
  } catch (error) {
    console.error('Error sending email', error);
    return { status: 500, error };
  }
};

