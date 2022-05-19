const express = require('express')
const router = express.Router()

const userRouter = require('./users/index')
const cartRouter = require('./carts/index')
const productRouter = require('./products/index')

router.use('/',[userRouter,cartRouter,productRouter])
module.exports = router