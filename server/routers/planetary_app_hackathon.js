const express = require("express");
const controller = require("../controllers/planetary_app_hackathon");

const router = express.Router();
router.get("/", controller.index);

module.exports = router;
