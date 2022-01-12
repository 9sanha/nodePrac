// // http 모듈을 임포트하여 변수 http에 할당
// const http = require('http');
//
// //http 서버 객체 생성
// http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello World');
// }).listen(3000);
var personArray = [
    {"name":"구","age": 5},
    {"name":"산","age": 4}
]
console.log('Server running at http://127.0.0.1:3000/');
for (let i = 0; i < personArray.length; i++) {
    if (isValidAge(personArray[i])){
        console.log("5세 이상")
    }else {
        console.log("5세 미만")
    }
}

function isValidAge(person){
    if (person["age"]<5){
        return  false
    }else {
        return true
    }
}