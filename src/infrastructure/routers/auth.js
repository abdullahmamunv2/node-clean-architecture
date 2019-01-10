const router               = require('express').Router();
const {authController}  = require('../controller');
const hof                  = require('./hof');

// middleware


// routes

router.post('/signup',hof(authController.signup,(req)=>[req]));
router.post('/signup/getotp',hof(authController.sendOTP,(req,res)=>[req,res]));
router.post('/signup/otp',hof(authController.verifyOTP,(req,res)=>[req,res]));
router.post('/signin',hof(authController.signin,(req,res)=>[req,res]));

module.exports = router;