const express = require('express')
const router = express.Router()
router.put('/',()=>{
    console.log('put');
})
module.exports = router