const express = require('express');
const router = express.Router()
const signupRoute = require('./signup')

router.use('/users',[signupRoute])

module.exports = router