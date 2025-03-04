const patients = require("../../data/patients");

// Get all patients
const getAllPatients = (req, res) => {
  res.json(patients);
};

// Filter patients using Query String (e.g., /patients?disease=Cold)
const getPatientsByQuery = (req, res) => {
  const { disease } = req.query;
  if (!disease) {
    return res
      .status(400)
      .json({ message: "Please provide a disease in the query string." });
  }

  const filteredPatients = patients.filter(
    (patient) => patient.disease.toLowerCase() === disease.toLowerCase()
  );

  if (filteredPatients.length === 0) {
    return res
      .status(404)
      .json({ message: "No patients found with the specified disease." });
  }

  res.json(filteredPatients);
};

// Filter patients using URL Params (e.g., /patients/disease/Cold)
const getPatientsByParam = (req, res) => {
  const { disease } = req.params;

  const filteredPatients = patients.filter(
    (patient) => patient.disease.toLowerCase() === disease.toLowerCase()
  );

  if (filteredPatients.length === 0) {
    return res
      .status(404)
      .json({ message: "No patients found with the specified disease." });
  }

  res.json(filteredPatients);
};

module.exports = { getAllPatients, getPatientsByQuery, getPatientsByParam };
