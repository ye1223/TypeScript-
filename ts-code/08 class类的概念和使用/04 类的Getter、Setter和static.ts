class Person{
    constructor(private _age: number){
    }
    get age(): number{
        return this._age
    }
    set age(age: number){
        this._age = age
    }
}
const person = new Person(18)
console.log('person的年龄是',person.age)

// ********************
class Person2{
    sayName(){
        return '无名氏'
    }

    static sayName2(){
        return '无名氏2'
    }
}
let person2 = new Person2()
console.log(person2.sayName())

console.log(Person2.sayName2())

