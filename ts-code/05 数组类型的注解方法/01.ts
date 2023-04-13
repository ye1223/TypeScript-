/* const numArr = [1,2,3] //类型推断const numArr: number[]
const multiArr = [1,'1',undefined]
const numArr2: number[] = [1,2,3,4,5]

const stringArr: string[] = ['1','3','5']
console.log(stringArr)
const undefinedArr: undefined[] = [undefined,undefined]

const arr: (number | string | undefined)[] = [1,'string',undefined]

// 类型别名 type alias
type Fruit = {
    name: string,
    year: number
}

const fruit: Fruit[] = [
// const fruit:{name: string, year: number}[] = [
    {name: '香蕉', year: 1},
    {name: '菠萝', year: 3}
]
console.log(fruit)
 */