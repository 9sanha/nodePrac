const express = require('express');
const router = express.Router()

router.post('/',()=>{
    console.log('signin');
})

module.exports = router

