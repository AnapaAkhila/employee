const express = require("express");
const router = express.Router();
const {
    getEmployees,
    healthCheck
} = require("../controllers/employeeController");
router.get("/employees", getEmployees);
router.get("/health", healthCheck);
module.exports = router;