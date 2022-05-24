module.exports = (express,router)=>{
    const postRouter = require('./post')

    router.use('/check',postRouter)(express,router)
    return router
}
