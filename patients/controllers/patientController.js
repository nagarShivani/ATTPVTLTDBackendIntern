const patients = require("../data/patients");

// Get all patients
const getAllPatients = (req, res) => {
    res.json(patients);
};

// Filter patients by disease using Query String (Example: /patients/filter?disease=Cold)
const filterPatientsByQuery = (req, res) => {
    const { disease } = req.query;
    if (!disease) {
        return res.status(400).json({ message: "Disease query parameter is required" });
    }
    const filteredPatients = patients.filter(p => p.disease.toLowerCase() === disease.toLowerCase());
    res.json(filteredPatients);
};

// Filter patients by disease using URL Parameter (Example: /patients/disease/Cold)
const filterPatientsByParam = (req, res) => {
    const { disease } = req.params;
    const filteredPatients = patients.filter(p => p.disease.toLowerCase() === disease.toLowerCase());
    res.json(filteredPatients);
};

// Get patients suffering from Cold
const getColdPatients = (req, res) => {
    res.json(patients.filter(p => p.disease === "Cold"));
};

// Get patients suffering from Flu
const getFluPatients = (req, res) => {
    res.json(patients.filter(p => p.disease === "Flu"));
};

// Export all functions properly
module.exports = {
    getAllPatients,
    filterPatientsByQuery,
    filterPatientsByParam,
    getColdPatients,
    getFluPatients
};
