namespace other9 {
    type Eg1 = Uppercase<'adf'>

    type TypeKeys<T> = T[keyof T]

    type PickByValue<T, V> = Pick<T, TypeKeys<{
        [P in keyof T]: T[P] extends V ? P : never
    }>>

    type T1 = TypeKeys<{ num: number, age: string }>
}
namespace other43 {
    // 首字母小写转大写
    type Eg3 = Capitalize<'aBCDEF'>

    // 首字母大写转小写
    type Eg2 = Uncapitalize<'ABc'>

    // 全部小写
    type Eg1 = Lowercase<'ABCD'>

}