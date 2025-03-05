const express = require("express");
const { addUser } = require("../controllers/userController");

const router = express.Router();

router.post("/add", addUser);

module.exports = router;
