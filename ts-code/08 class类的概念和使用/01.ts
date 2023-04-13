/* // 如果没有显式添加构造方法，会默认添加constructor
class People{
    name = '小叶子'
    sayName(){
        return this.name
    }
    lala(): void{
        console.log('lala')
    }
}
const people = new People()
console.log(people.sayName())

class Person extends People{ 
    sex = '男'
    lala(){ //重写
        console.log('oh lala')
        return super.sayName() + 'haha'
    }
}
const person = new Person()
console.log(person.sex)
console.log('父类People的方法',person.sayName())
console.log('??',person.lala())  */