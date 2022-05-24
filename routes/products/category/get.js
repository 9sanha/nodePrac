const express = require('express')
const router = express.Router()
const productService = require('../../../service/Product/ProductService')

router.get('/:category',async (req, res)=>{
    const category = req.params.category
    const products = await productService.getByCategory(category)
    res.status(200).json({data:products})
})

module.exports = router