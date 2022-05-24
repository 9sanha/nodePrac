const express = require('express')
const router = express.Router()

router.get(`/:category`,()=>{
    console.log('get product');
})

module.exports = router