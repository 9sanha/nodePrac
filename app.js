const express = require("express")
const app = express()
const port = 3000
const routes = require('./routes/index')
const bodyParser = require('body-parser'); 
const dbConnector = require('./db/connector').default

app.use(bodyParser.json());
app.use('/',routes)
try{
    dbConnector
    console.log('db연결');
}catch(err){
    console.error(err);
}


app.listen(port, ()=> {
    console.log(`app listening on post ${port}`);
})