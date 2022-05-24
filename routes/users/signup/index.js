module.exports = (express,router)=>{
    const checkRouter = require('./check/index')(express,router)
    const postRouter = require('./post')(express,router)

    router.use('/signup',[checkRouter,postRouter])
    return router

}