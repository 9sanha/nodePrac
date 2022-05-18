const express = require('express');
const router = express.Router()
const checkRouter = require('./check/index')
const postRouter = require('./post')

router.use('/signup',[checkRouter,postRouter])

module.exports = router