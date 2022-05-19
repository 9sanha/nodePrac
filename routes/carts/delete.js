const express = require('express')
const router = express.Router()

router.delete('/',()=>{
    console.log('signin delete');
})

module.exports = router