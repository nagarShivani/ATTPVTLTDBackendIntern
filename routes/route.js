const express = require('express');
// router object
const router = express.Router();
router.use(express.json());

const controller = require('../controllers/controller');
router.post("/employeesCreate",controller.employeesCreate)
router.post("/login",controller.login)
router.get("/getEmployees",controller.getEmployees)



module.exports = router