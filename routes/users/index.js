const express = require('express');
const router = express.Router()

const signupRoute = require('./signup/index')
const signinRoute = require('./signin/index')

router.use('/users',[signupRoute,signinRoute])

module.exports = router