const express = require('express')
const router = express.Router()
router.fetch('/',()=>{
    console.log('fetch');
})
module.exports = router