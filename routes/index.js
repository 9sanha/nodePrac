const express = require('express')
const router = express.Router()

module.exports = (express,router)=>{
    
    const userRouter = require('./users/index')(express,router)
    const cartRouter = require('./carts/index')(express,router)
    const productRouter = require('./products/index')(express,router)

    router.use('/',[userRouter,cartRouter,productRouter])
    }