const productRepository = require('./ProductRepository')

class ProductService{
    addProduct = async (data)=>{
        
        const product = await productRepository.save(data)

        return product
    }

    getByCategory = async (category)=>{
        const products = await productRepository.findAllByCategory(category)
        return products
    }
}

module.exports = new ProductService()