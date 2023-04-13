/* class Person{
    // public readonly _name: string
    // constructor(name: string){
    //     this._name = name
    // }
    // 两种写法等价等价
    constructor(public readonly _name: string){
    }

    private readonly _age:number  = 10
    get(){
        console.log(this._age)
        // this._age = 1
    }
}
const person = new Person('levy')
// person._name = 'lalala' 不能修改readonly属性
console.log(person._name) */


abstract class Animal{
    abstract makeSound(): void
}

class Cat extends Animal{
    makeSound(): void {
        console.log('Meow Meow')
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log('Woof Woof')
    }
}