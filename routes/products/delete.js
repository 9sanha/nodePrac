module.exports = (express,router)=>{
    router.delete('/',()=>{
    console.log('delete');
})
return router
}