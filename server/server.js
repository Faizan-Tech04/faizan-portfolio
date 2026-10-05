const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: FRONTEND_URL,
  }),
);

app.use(express.json());

/* =========================================
   ROUTES
========================================= */

app.use("/api", contactRoutes);

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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
