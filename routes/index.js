const express = require('express')
const router = express.Router

const userRouter = require('./users')
const cartRouter = require('./carts')
const productRouter = require('./products')

router.use('/',[userRouter,cartRouter])