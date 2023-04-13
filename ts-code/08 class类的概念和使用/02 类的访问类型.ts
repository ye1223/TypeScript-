/* class Person{
    public name!: string  // `!`表示一定会给name赋值
    private sex = '男'
    protected age!: string
    readonly introduction: string = 'introooooo'
    public sayName(){
        return this.name + this.sex + ' say Hello'
        // this.introduction = 1 //只读
    }
}

class SubPerson extends Person{
    age = '男'
}

const person = new Person()
person.name = '小叶子'
// console.log(person.sex)  //私有变量 类外不能访问以及修改
console.log(person)
console.log(person.sayName())

person.introduction = 1
console.log(person.introduction)
 */