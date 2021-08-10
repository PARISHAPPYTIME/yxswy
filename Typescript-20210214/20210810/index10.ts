namespace other7 {
    type Exclude<T, U> = T extends U ? never : T

    type Eg = Exclude<'key3' | 'key2', 'key3'>

    type Eg7 = string | number | never


    type Extract<T, U> = T extends U ? T : never

    type Eg2 = Extract<'key1' | 'key2', 'key1'>

    // type Omit = Pick<T1, Exclude<keyof T, K>>

    type Omit2<T, K extends keyof T> = {
        [P in Exclude<keyof T, K>]: T[P]
    }

    type Er = Omit2<{
        name: string
        age: number
        sex: boolean
    }, 'name'>

    type Er2 = Omit<{
        name: string
        age: number
        sex: boolean
    }, 'name'>
}
