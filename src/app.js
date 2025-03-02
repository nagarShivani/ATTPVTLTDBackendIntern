const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", employeeRoutes);

module.exports = app;
