const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    price: String,
    name: String,
    brand: String,
    category: String,
    description: String,
    image: String
})

const Product = mongoose.model('Products',ProductSchema)
module.exports = { Product }