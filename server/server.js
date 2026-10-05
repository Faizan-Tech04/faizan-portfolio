const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api", contactRoutes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Gmail connection failed:", error);
  } else {
    console.log("Gmail connection successful!");
  }
});

/* =========================================
   TEST ROUTE
========================================= */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Faizan Portfolio Backend is running!",
  });
});

/* =========================================
   SERVER
========================================= */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
