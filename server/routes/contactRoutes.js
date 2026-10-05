const express = require("express");

const router = express.Router();

/* =========================================
   RESEND EMAIL API
========================================= */

const RESEND_API_URL = "https://api.resend.com/emails";

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
       CHECK RESEND API KEY
    ========================================= */

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    /* =========================================
       SEND EMAIL USING RESEND API
    ========================================= */

    const response = await fetch(RESEND_API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },

      body: JSON.stringify({
        from: "Faizan Portfolio <onboarding@resend.dev>",
        to: [process.env.EMAIL_USER],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,

        text: `
You received a new message from your portfolio.

Name: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    });

    const data = await response.json();

    /* =========================================
       RESEND ERROR
    ========================================= */

    if (!response.ok) {
      console.error("Resend API error:", data);

      return res.status(500).json({
        success: false,
        message: "Failed to send message.",
      });
    }

    /* =========================================
       SUCCESS RESPONSE
    ========================================= */

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

module.exports = router;
