namespace other6 {
    type PartialOptional<T, K extends keyof T> = {
        [P in K]?: T[P]
    }

    type Eg1 = PartialOptional<{
        key1: string
        key2: number
        key3: ''
    }, 'key1' | "key2">

    type Readonly<T> = {
        readonly [P in keyof T]: T[P]
    }

    type Eg = Readonly<{
        key1: string
        key2: number
    }>

    type Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    type EgPick = Pick<{
        key: number
        age: number
        sex: string
    }, 'key'>

    type Eg3 = Record<'key1' | 'key3', { key1: string }>
    type Eg4 = Record<'key1' | 'key3', string>
    type Eg5 = Record<string, string>

    type Record<K extends keyof any, T> = {
        [P in K]: T
    }

    interface A {
        a: string
        b: number
    }

    interface B {
        key1: number
        key2: String
    }

    type Eg7 = Record<keyof A, B>

    type Eg9 = Pick<{ readonly a?: string }, 'a'>
}