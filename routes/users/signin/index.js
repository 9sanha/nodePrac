module.exports = (express,router)=>{
    const postRouter = require('./post')

    router.use('/signin',postRouter)
    return router
}