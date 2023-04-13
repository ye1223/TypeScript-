/* 
function getTotal(num1: number, num2: number): number { //返回值注解
    return num1 + num2
}
const result = getTotal(1, 2)

// void 函数返回值为空
function sayHello(): void {
    console.log('Hello World')
    // return 1 //报错
}

// never 一个函数永远不会得到一个正确的返回值  //在异常处理用得多
function errorFunc(): never {
    throw new Error()
    console.log('lalal')
}

function getNum({ one, two }: { one: number, two: number}){
    console.log('one',one) //1
    return one
}
const res = getNum({one:1,two:2}) */