const express = require('express');
const router = express.Router()
const postRouter = require('./post')

router.use('/check',postRouter)

module.exports = router
