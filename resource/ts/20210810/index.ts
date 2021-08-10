// keyof 索引查询
interface Eg1 {
    name: string
    readonly age: number
}

type T1 = keyof Eg1

class Eg2 {
    private name: string
    public readonly age: number
    protected home: string
}

type T2 = keyof Eg2
