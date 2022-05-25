const express = require('express')
const router = express.Router()
const productService = require('../../../service/Product/ProductService')
router.get(`/:productId`,async (req, res)=>{

    const id = req.params.productId
    
    const product = await productService.detail(id)

    res.status(200).json({data:product})
})

module.exports = router