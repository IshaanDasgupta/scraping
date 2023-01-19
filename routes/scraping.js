const express = require("express");
const { unstopData, googleKickstartData, codeforcesData } = require("../controller/scraping");

const router = express.Router();

router.get('/unstop' , unstopData);
router.get('/kickstart' , googleKickstartData);
router.get('/codeforces' , codeforcesData);

module.exports = router;