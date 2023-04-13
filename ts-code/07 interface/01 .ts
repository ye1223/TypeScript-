/* interface Info{
    name: string,
    age: number,
    sex: number,
    introduction?: string, //可选
    [propname: string]: any //可以随意增添属性了
}

let infoArr: Info[] = []
const setInfo = (name: string, age: number, sex: number,introduction?: string): void =>{
    introduction? infoArr.push({name, age, sex,introduction}) : infoArr.push({name, age, sex})
    console.log('设置成功')
}

const getInfo = (index: number): Info =>{
    return infoArr[index]
}

setInfo('张三', 18, 1,'这是我的个人简介...')
console.log('成功获取索引信息',getInfo(0))


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
test({name:person.name,age:person.age,sex:person.sex}) */