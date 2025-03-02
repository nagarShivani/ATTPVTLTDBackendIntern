const employees = require("../../data/employees");
const logger = require("../utils/logger");

exports.getEmployees = (req, res) => {
  try {
    logger.info("Fetching employee data");
    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    logger.error("Error fetching employees: " + error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
