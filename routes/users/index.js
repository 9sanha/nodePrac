module.exports = (express,router)=>{
    const signupRoute = require('./signup/index')(express,router)
    const signinRoute = require('./signin/index')(express,router)

    router.use('/users',[signupRoute,signinRoute])
    return router
}