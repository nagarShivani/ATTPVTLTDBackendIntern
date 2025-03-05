// server.js
const express = require("express");
const { getPatients, getPatientsByDisease } = require("./patients");

const app = express();
const PORT = 3000;

// Route to retrieve all patients
app.get("/patients", (req, res) => {
    res.json(getPatients());
});

// Route to get patients suffering from Cold
app.get("/patients/cold", (req, res) => {
    res.json(getPatientsByDisease("Cold"));
});

// Route to get patients suffering from Flu
app.get("/patients/flu", (req, res) => {
    res.json(getPatientsByDisease("Flu"));
});

// Route to filter patients by disease using query string (e.g., /patients/filter?disease=Cold)
app.get("/patients/filter", (req, res) => {
    const { disease } = req.query;
    if (!disease) {
        return res.status(400).json({ message: "Disease query parameter is required" });
    }
    const result = getPatientsByDisease(disease);
    res.json(result);
});

// Route to filter patients by disease using URL parameter (e.g., /patients/disease/Flu)
app.get("/patients/disease/:disease", (req, res) => {
    const { disease } = req.params;
    const result = getPatientsByDisease(disease);
    res.json(result);
});

app.get("/", (req, res) => {
  res.send(`
      <h2>Welcome to the Patient Management API</h2>
      <p>Use the following endpoints:</p>
      <ul>
          <li><strong>/patients</strong> - Get all patients</li>
          <li><strong>/patients/cold</strong> - Get patients with Cold</li>
          <li><strong>/patients/filter?disease=Cold</strong> - Filter by disease using Query String</li>
          <li><strong>/patients/disease/Flu</strong> - Filter by disease using URL Parameter</li>
      </ul>
  `);
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
