const express = require('express')
const router = express.Router()

const idRouter = require('./id/index')
const categoryRouter = require('./category/index')
const deleteRouter = require('./delete')
const fetchRouter = require('./patch')
const postRouter = require('./post')

router.use('/products',[
    idRouter, 
    categoryRouter, 
    deleteRouter, 
    fetchRouter, 
    postRouter])

module.exports = router