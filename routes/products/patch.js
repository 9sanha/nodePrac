const express = require('express')
const router = express.Router()
const productService = require('../../service/Product/ProductService')

router.patch('/',async (req, res)=>{
    const body = req.body
    productService.updateInfo(body)
    
    res.status(200).json('Success')

})
module.exports = router