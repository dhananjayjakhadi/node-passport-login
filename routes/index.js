const express = require("express");
const router = express.Router();

//Login
router.get("/", (req, res) => res.send("Welcome"));

module.exports = router;
