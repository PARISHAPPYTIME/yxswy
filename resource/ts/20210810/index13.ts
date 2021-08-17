namespace other9 {
    type Eg1 = Uppercase<'adf'>

    type TypeKeys<T> = T[keyof T]

    type PickByValue<T, V> = Pick<T, TypeKeys<{
        [P in keyof T]: T[P] extends V ? P : never
    }>>

    type T1 = TypeKeys<{ num: number, age: string }>
}