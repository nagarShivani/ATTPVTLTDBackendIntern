const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const patientRoutes = require("./routes/patientRoutes");
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", employeeRoutes);
// Use Patient Routes
app.use("/api", patientRoutes);

module.exports = app;
