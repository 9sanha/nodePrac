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

    updateInfo = async(product)=>{
        console.log(product);
        const a = await productRepository.update(product)
        console.log(a);
    }
}

module.exports = new ProductService()