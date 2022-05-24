const express = require('express');
const router = express.Router();
const userService = require('../../../service/User/UserService')

router.post('/',async (req,res)=>{
    const body = await req.body
    const user = await userService.signup(body)
    res.status(200).json({data:user})
})

module.exports = router