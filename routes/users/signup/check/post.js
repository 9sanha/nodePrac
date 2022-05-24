const express = require('express');
const router = express.Router();

router.post('/',()=>{
    console.log('/users/signup/check');
})

module.exports = router