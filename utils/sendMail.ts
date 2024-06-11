import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  service: process.env.SMTP_SERVICE,
  auth: { user: process.env.SMTP_MAIL, pass: process.env.SMTP_PASSWORD },
});

const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: process.env.SMTP_MAIL_FROM,
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
