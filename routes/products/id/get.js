module.exports = (express,router)=>{
    router.get(`/:productId`,()=>{
    console.log('get product id');
    })
    return router
}