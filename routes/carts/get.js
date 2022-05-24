module.exports = (express,router)=>{
    
    router.get('/',()=>{
        console.log('get');
    })
    return router
}