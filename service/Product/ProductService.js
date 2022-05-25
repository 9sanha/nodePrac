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

    detail = async (id)=>{
        const product = await productRepository.findById(id)
        return product
    }

    updateInfo = (product)=>{
        productRepository.update(product)
    }
}

module.exports = new ProductService()