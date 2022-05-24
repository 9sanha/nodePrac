module.exports = (express,router)=>{
    const getRoute = require('./get')(express,router)
    router.use('/',getRoute)
    return router

}