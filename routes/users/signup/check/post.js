const express = require('express');
const router = express.Router();
const userService = require('../../../../service/User/UserService')

router.post('/',async (req,res)=>{
    const body = await req.body
    const result = await userService.check(body.target,body.value)
    res.status(200).json({result:result})
})

module.exports = router