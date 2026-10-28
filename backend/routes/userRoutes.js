const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/Auth/UserAuthController');
const {CheckUser}=require("../middlewares/checkUser")


router.post('/register', registerUser);

router.get('/checkuser',CheckUser, getUserProfile);

router.post('/login', loginUser);


module.exports = router;