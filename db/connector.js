const MongoClient = require('mongodb').MongoClient;
const config = require(__dirname+'/mongo-url.json')
// const client = new MongoClient(config.url, { useNewUrlParser: true });
const Product = require('../properties/Products')

const dbConnect = MongoClient.connect(config.url,(err,client)=>{
    if (err) throw err
    const db = client.db("node")

        // db.createCollection("products")
        // db.createCollection("users") 
    
    // db.dropCollection("products")
    // db.dropCollection("users")
})
module.exports = dbConnect
