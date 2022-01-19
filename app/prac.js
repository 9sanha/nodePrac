let personArray = [
    {"name": "John Doe", "age": 20},
    {"name": "Jane Doe", "age": 19},
    {"name": "Fred Doe", "age": 32},
    {"name": "Chris Doe", "age": 45},
    {"name": "Layla Doe", "age": 37},
];

// personArray의 나이 평균을 구해주는 Arrow Function을 작성해봅시다.
const getAgeAverage = (personArray) => {
    // 초기화 안하면 None 뜸
    let avg=0
    personArray.forEach(v =>{
        console.log(v["age"])
        avg+=v["age"]
    })
    return avg/personArray.length

}

console.log(getAgeAverage(personArray));