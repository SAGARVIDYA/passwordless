import nodemailer from 'nodemailer';

const sendMail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: 'OTP Verification',
    html: `<h1>Your OTP is ${otp}</h1>`,
  });
};

export default sendMail;