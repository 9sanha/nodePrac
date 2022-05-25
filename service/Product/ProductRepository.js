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

    findAllByCategory = (category)=>{
        return Product.findAll({
            attributes:['id','name','price','brand','image','category'],
            where:{
                category:category
            }
        })
    }

    findById = (id)=>{
        //TODO: findOne
        return Product.findAll({
            where:{
                id:id
            }
        })
    }

    update = (product)=>{
        return Product.update({
            name: product.name,
            price: product.price,
            brand: product.brand,
            category: product.category,
            image: product.image,
            description: product.description
        }, {
            where: {
                id: product.id
            }
        })
    }
}

module.exports = new ProductRepository();