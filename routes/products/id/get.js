const express = require('express')
const router = express.Router()
router.get(`/:productId`,()=>{
    console.log('get product id');
})

module.exports = router