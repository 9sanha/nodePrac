const express = require('express')
const router = express.Router()

const idRouter = require('./id')
const categoryRouter = require('./category')
const deleteRouter = require('./delete')
const fetchRouter = require('./fetch')
const postRouter = require('./post')

router.use('/products',[
    idRouter, 
    categoryRouter, 
    deleteRouter, 
    fetchRouter, 
    postRouter])

module.exports = router