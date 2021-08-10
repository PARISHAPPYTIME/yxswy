namespace other5 {
    type Bar<T> = T extends {
        a: (x: infer U) => void
        b: (x: infer U) => void
    }
        ? U
        : never

    type T1 = Bar<{
        a: (x: string) => void
        b: (x: string) => void
    }>

    type T2 = Bar<{
        a: (x: string) => void
        b: (x: number) => void
    }>

    type Foo<T> = T extends {
        a: infer U
        b: infer U
    }
        ? U
        : never

    type T3 = Foo<{
        a: string
        b: string
    }>

    type T4 = Foo<{
        a: string
        b: number
    }>
}

// 协变 收敛 联合 属性
// 逆变 扩散 交叉 函数的参数