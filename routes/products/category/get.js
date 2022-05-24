module.exports = (express,router)=>{
    router.get(`/:category`,()=>{
        console.log('get product');
    })
    return router
}