# class类



## 1. 类基本

* 定义+实例化

  * ```typescript
    // 如果没有显式添加构造方法，会默认添加constructor
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
    ```
  
* 继承 + 重写方法

  * ```typescript
    class Person extends People{ 
        sex = '男'
        lala(){ //重写
            console.log('oh lala')
            return super.sayName() + 'haha'
        }
    }
    const person = new Person()




## 2. 类的访问类型

`public private protected`  readonly只读（在哪里都是只读，不可修改）

```typescript
class Person{
    public name!: string  // `!`表示一定会给name赋值
    private sex = '男'
    protected age!: string
    public sayName(){
        return this.name + this.sex + ' say Hello'
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
```

在 TypeScript 中，当我们声明一个类的属性时，有时候我们不能确定该属性在实例化的时候是否会被赋值。此时，我们可以在属性名后面加上 `!`，来告诉 TypeScript 编译器该属性一定会被赋值。 



## 3. 类的构造函数

```typescript
class Person{
    // public name: string
    // constructor(name: string){
    //     this.name = name
    // }
    // 上下等价
    constructor(public name: string){
    }
}
const person = new Person('小牛子')
console.log(person) //Person { name: '小牛子' }
```

**继承**

```typescript
class SubPerson extends Person{
    constructor(public age: number, public name: string){
        super(name) //继承自父类Person
        // super('xaioyezi')
    }
}
const subperson = new SubPerson(18, '小叶子')
console.log(subperson)//SubPerson { name: '小叶子', age: 18 }
```



```typescript
class Person {
    // 如果没有显式添加构造方法，会默认添加constructor
}
class SubPerson extends Person{
    constructor(){
        super()
    }
}
```

![image-20230412221535782](08 class类的概念和使用.assets/image-20230412221535782.png)

   

## 4. 类的Getter、Setter 和static

**getter setter**

类的 getter 和 setter 是用来<u>访问私有属性的方法</u>，它们允许对私有属性进行读写操作，并提供了更好的封装性

```typescript
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
console.log('person的年龄是',person.age) //不用函数调用
```

**static静态方法（类方法）**

```typescript
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
console.log(Person2.sayName2()) //直接访问Person类的方法
```