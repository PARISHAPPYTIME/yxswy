// T[K] 索引访问
interface Eg11 {
    name: string
    readonly age: number
}

// string
type V1 = Eg11['name']
// string | number
type V2 = Eg11['name' | 'age']
// string | number
type V3 = Eg11[keyof Eg11]