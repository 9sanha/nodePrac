const express = require('express')
const router = express.Router()
router.delete('/',()=>{
    console.log('delete');
})
module.exports = router