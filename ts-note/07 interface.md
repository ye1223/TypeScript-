接口（interface）是 TypeScript 的一个重要概念，它用于定义**对象**的形状（shape），包括属性、方法等。接口可以看做是一个约定，定义了对象应该具有的属性和方法。



## interface声明

```typescript
interface Info{
    name: string,
    age: number,
    sex: number,
    introduction?: string, //可选
    [propname: string]: any //可以随意增添属性了
}
```



初始化一个受`接口Info`约束的`infoArr数组`

```typescript
let infoArr: Info[] = []
//introduction可选
const setInfo = (name: string, age: number, sex: number,introduction?: string): void =>{
    introduction? infoArr.push({name, age, sex,introduction}) : infoArr.push({name, age, sex})
    console.log('设置成功')
}
const getInfo = (index: number): Info =>{
    return infoArr[index]
}

setInfo('张三', 18, 1,'这是我的个人简介...') //输出 设置成功
console.log('成功获取索引信息',getInfo(0))// 输出 成功获取索引信息 { name: '张三', age: 18, sex: 1, introduction: '这是我的个人简介...' }
```



person 受接口Info约束


```typescript
let person: Info = {
    name: '1',
    age:1,
    sex:1,
    lala:233 //随意增加的属性
}
function test({name,age,sex}:Info): void{
    console.log('lalla',name,age,sex)
    console.log(person)
}

test({name: '张三',age: 12,sex: 1})
test({name:person.name,age:person.age,sex:person.sex})
```



## interface继承

* 定义一个接口 People

```typescript
type Sex = 'male' | 'female'

interface People{
    name: string,
    age: number,
    sex: Sex
    get(): void
}
```

* 接口SuperPeople继承People

```typescript
interface SuperPeople extends People{
  	// 添加了新的方法
    rescue(): string
}
```



* Person类`实现implements` People接口
  * `implements` 关键字用于让一个类实现一个接口，即实现该接口中定义的所有属性和方法。通过 `implements` 关键字，我们可以让类遵循一个抽象的接口，并强制实现该接口中定义的所有属性和方法。

```typescript
class Person implements People{
    name = 'levy'
    age = 21
    sex: Sex = 'male'
    get(): void {
        console.log('aaaa')
    }
}
```

* 接口SuperPeople 约束一个对象

```typescript
const superman: SuperPeople = {
    name: '超人',
    age:30,
    sex: 'male',
    get(): void{
        console.log(`我是${this.name}哈哈`)
    },
    rescue(): string{
        return '成功救人'
    }
}
```





![image-20230412152530486](07 interface.assets/image-20230412152530486.png)

可选值 ?:

 

