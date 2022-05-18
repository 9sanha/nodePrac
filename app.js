const express = require("express")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('서버 구동중...')
})

app.listen(port, ()=> {
    console.log(`app listening on post ${port}`);
})