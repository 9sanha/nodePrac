const calculate = (command, a, b) => {
    /* if 문
    if (command == 'add') {
        return add(a,b)
    } else if (command == 'substract') {
        return sub(a,b)
    } else if (command == 'divide') {
        return div(a,b)
    } else if (command == 'multiply') {
        return mul(a,b)
    } else if (command == 'remainder') {
        return rem(a,b)
    } else {
        return '올바른 연산이 아닙니다.'
    }
    */
    switch (command) {
        case 'add':
            return add(a,b)
        case 'substract':
            return sub(a,b)
        case 'divide':
            return div(a,b)
        case 'multiply':
            return mul(a,b)
        case 'remainder':
            return rem(a,b)
    }
    return '올바른 연산이 아닙니다.'

}
const add = (a, b) => a + b
const sub = (a, b) => a - b
const div = (a, b) => a / b
const mul = (a, b) => a * b
const rem = (a, b) => a % b

let res = calculate('add',2,5)
console.log(res)