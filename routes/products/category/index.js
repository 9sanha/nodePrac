const express = require('express')
const router = express.Router()

const getRoute = require('./get')
router.use('/',getRoute)

module.exports = router