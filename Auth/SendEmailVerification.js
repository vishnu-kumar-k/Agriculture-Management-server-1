const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendEmailVerification(email, verificationCode) {
  try {
    // Create a nodemailer transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: email,
      subject: "Welcome to MindVerse: Unlock Your Mind's Potential",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #008080; text-align: center;">Welcome to MindVerse</h1>
          <p style="text-align: center;">Thank you for joining MindVerse, where your ideas come to life!</p>
          <hr style="border: none; border-top: 2px solid #008080;">
          <p style="text-align: center;">To embark on a journey of self-discovery and creativity, please enter the following verification code:</p>
          <div style="text-align: center; padding: 20px; background-color: #f5f5f5; border-radius: 10px;">
            <h2 style="color: #008080; margin: 0;">${verificationCode}</h2>
          </div>
          <!-- Please do not reply to this email. This email is for informational purposes only. -->
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
const SendAdminMail = async (formData) => {
  try {
    // Create a nodemailer transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: "boopendhiran@gmail.com",
      subject: "New client as requested to contact",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
          <h2 style="color: #333; text-align: center;">New client as requested to contact</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>WhatsApp Number:</strong> <a href="https://wa.me/${formData.phonenumber}" target="_blank">${formData.phonenumber}</a></p>
          <p><strong>Complaint:</strong> ${formData.message}</p>
          
          <div style="margin-top: 20px; text-align: center;">
            <p style="font-size: 14px; color: #777;">Thank you for your attention.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const ReplyClientMail = async (formData) => {
  try {
    // Create a nodemailer transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: formData.email,
      subject: "Thank you for contacting us",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
      <h2 style="color: #333; text-align: center;">Thank you for contacting us</h2>
      <p>Dear ${formData.name},</p>
      <p>We appreciate your interest in our services. Our team will review your inquiry, and we will get back to you as soon as possible.</p>
      <p>If you have any urgent matters, please feel free to contact us via WhatsApp at <a href="https://wa.me/9876543211" target="_blank">87654321900</a>.</p>
      <p>Thank you again for reaching out. We look forward to assisting you.</p>
      
      <div style="margin-top: 20px; text-align: center;">
        <p style="font-size: 14px; color: #777;">Best regards,</p>
        <p style="font-size: 14px; color: #777;">Your Company Name</p>
      </div>
    </div>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendEmailVerification, SendAdminMail, ReplyClientMail };
