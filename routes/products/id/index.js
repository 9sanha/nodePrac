const express = require('express')
const router = express.Router()
const getRouter = require('./get')

router.use('/detail',getRouter)
module.exports = router