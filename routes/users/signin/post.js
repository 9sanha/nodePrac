const express = require('express');
const router = express.Router()

router.use('/',()=>{
    console.log('signin');
})

module.exports = router