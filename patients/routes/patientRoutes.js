const express = require("express");
const controller = require("../controllers/patientController");

const router = express.Router();

router.get("/",controller.getAllPatients);
router.get("/filter",controller.filterPatientsByQuery);
router.get("/disease/:disease",controller.filterPatientsByParam);
router.get("/cold",controller.getColdPatients);
router.get("/flu",controller.getFluPatients);

module.exports = router;
