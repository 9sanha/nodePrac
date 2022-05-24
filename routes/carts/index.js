module.exports = (express,router)=>{
    const getRoute = require('./get')(express,router)
    const postRoute = require('./post')(express,router)
    const fetchRoute = require('./fetch')(express,router)
    const deleteRoute = require('./delete')(express,router)

    router.use('/carts',[getRoute,postRoute,fetchRoute,deleteRoute])

}