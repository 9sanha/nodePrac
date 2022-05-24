module.exports = (express,router)=>{
    const idRouter = require('./id/index')(express,router)
    const categoryRouter = require('./category/index')(express,router)
    const deleteRouter = require('./delete')(express,router)
    const fetchRouter = require('./fetch')(express,router)
    const postRouter = require('./post')(express,router)

    router.use('/products',[
        idRouter, 
        categoryRouter, 
        deleteRouter, 
        fetchRouter, 
        postRouter])
}