const express = require('express');
const router = express.Router();
const {QueryEmails}=require("../controllers/QueryEmailController")


router.post('/contactus',QueryEmails)


module.exports = router;