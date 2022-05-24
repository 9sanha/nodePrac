const productRepository = require('./ProductRepository')

class ProductService{
    addProduct = async (data)=>{
        
        const product = await productRepository.save(data)

        return product
    }
}

module.exports = new ProductService()