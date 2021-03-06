const express = require("express")
const { sequelize } = require('./models')
const app = express()
const port = 3000
const routes = require('./routes/index')
const bodyParser = require('body-parser'); 

app.use(bodyParser.json());
app.use('/',routes)

// force: true -> 테이블 생성할 때 테이블이 존재하면 삭제
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(port, ()=> {
    console.log(`app listening on post ${port}`);
})