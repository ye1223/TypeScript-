/* type Sex = 'male' | 'female'

interface People{
    name: string,
    age: number,
    sex: Sex
    get(): void
}

interface SuperPeople extends People{
    rescue(): string
}



const superman: SuperPeople ={
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
console.log(superman.rescue()) */