const express = require("express")

const app = express()
const port = 3000
const router = require('./routes/index')
app.use('/',router)

app.listen(port, ()=> {
    console.log(`app listening on post ${port}`);
})