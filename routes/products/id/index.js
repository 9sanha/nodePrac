module.exports = (express,router)=>{
    const getRouter = require('./get')(express,router)
    router.use('/',getRouter)
    return router
}