const express = require("express");
const { generateKeywords } = require("../controllers/keywordController.js");

const router = express.Router();

router.post("/generate-keywords", generateKeywords);

module.exports = router;