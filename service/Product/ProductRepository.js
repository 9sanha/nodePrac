const db =  require('../../models/index')
const Product = db.Products
class ProductRepository{
    save = (product)=>{
        return Product.create({
            name: product.name,
            price: product.price,
            brand: product.brand,
            category: product.category,
            image: product.image,
            description: product.description
        })
    }
}

module.exports = new ProductRepository();