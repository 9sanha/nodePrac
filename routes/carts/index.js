const express = require('express')
const router = express.Router()

const getRoute = require('./get')
const postRoute = require('./post')
const fetchRoute = require('./fetch')
const deleteRoute = require('./delete')

router.use('/cart',[getRoute,postRoute,fetchRoute,deleteRoute])

module.exports = router