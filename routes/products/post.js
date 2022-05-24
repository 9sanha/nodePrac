module.exports = (express,router)=>{
    router.post('/',()=>{
    console.log('post');
})
return router
}