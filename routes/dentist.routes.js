const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("dentist/home"));
router.get("/profile", (req, res, next) => res.render("dentist/profile"));

module.exports = router;
