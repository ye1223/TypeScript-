/* // 类型注解 type annotation  
// 轻量级为函数和变量添加约束的方式
let count: number //类型注解
count = 1

//类型推断 type inference
let countInference = 1 //自动推断：let countInference: number

// num1 num2 不能类型推断，所以要写类型注解
function getTotal(num1: number,num2: number){
    return num1 + num2
}

let num = getTotal(1,3) //自动推断num为number类型


let obj = { //自动类型推断
    x:1,
    y:'y'
} */