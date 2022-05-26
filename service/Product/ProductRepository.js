// const {Product} = require('../../properties/Products')


// class ProductRepository {
//     save = (product)=>{
//         return Product.create({
//             name: product.name,
//             price: product.price,
//             brand: product.brand,
//             category: product.category,
//             image: product.image,
//             description: product.description
//         })
//     }

//     findAllByCategory = (category)=>{
//         return Product.find({ category:category })
//     }

//     findById = (id)=>{
//         return Product.findById(id)
//     }

//     update = (product)=>{
//         return Product.findByIdAndUpdate(product.id,
//             {
//                 name: product.name,
//                 price: product.price,
//                 brand: product.brand,
//                 category: product.category,
//                 image: product.image,
//                 description: product.description
//             }
//         )
//     }
// }

// module.exports = new ProductRepository();