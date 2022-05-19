const express = require('express');
const router = express.Router()

const signupRoute = require('./signup')
const signinRoute = require('./signin')

router.use('/users',[signupRoute,signinRoute])

module.exports = router