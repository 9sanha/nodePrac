const express = require('express')
const router = express.Router()
const productService = require('../../service/Product/ProductService')
router.post('/',async (req, res)=>{
    const body = await req.body

    const product = await productService.addProduct(body)
    res.status(200).json({data:product})
})
module.exports = router