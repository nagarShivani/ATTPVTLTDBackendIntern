const express = require("express");
const router = express.Router();
const {
  getAllPatients,
  getPatientsByQuery,
  getPatientsByParam,
} = require("../controllers/patientController");

router.get("/patients", getAllPatients);
router.get("/patient", getPatientsByQuery);
router.get("/patient/disease/:disease", getPatientsByParam);

module.exports = router;
