const express = require('express')
const router = express.Router()

router.get('/',()=>{
    console.log('get');
})
module.exports = router