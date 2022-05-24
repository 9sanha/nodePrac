module.exports = (express,router)=>{
    router.post('/',(req,res)=>{
        const body = req.body
        console.log('/users/signup');
    })
    return router
}