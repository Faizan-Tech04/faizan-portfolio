const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

/* =========================================
   GMAIL SMTP TRANSPORTER
========================================= */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,

  family: 4,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    minVersion: "TLSv1.2",
  },

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

/* =========================================
   CONTACT ROUTE
========================================= */

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* =========================================
       VALIDATION
    ========================================= */

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    /* =========================================
       SEND EMAIL
    ========================================= */

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,

      subject: `New Portfolio Message from ${name}`,

      text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    /* =========================================
       SUCCESS RESPONSE
    ========================================= */

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

module.exports = router;
