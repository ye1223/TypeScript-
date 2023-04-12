/* class Person{
    // public name: string
    // constructor(name: string){
    //     this.name = name
    // }
    // 上下等价
    constructor(public name: string){
        name = ''
    }
}

const person = new Person('小牛子')
console.log(person)

class SubPerson extends Person{
    constructor(public age: number, public name: string){
        super(name)
        // super('xaioyezi')

    }
}
const subperson = new SubPerson(18, '小叶子')
console.log(subperson)

 */

/* class Person {
    // 如果没有显式添加构造方法，会默认添加constructor
}

class SubPerson extends Person{
    constructor(){
        super()
    }
} */