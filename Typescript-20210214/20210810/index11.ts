namespace other8 {
    type Parameters<T extends (...args: any) => any> = T extends (
        ...args: infer P
    ) => any
        ? P
        : never

    type Eg = Parameters<(arg1: string, arg2: number) => void>

    type P23<T extends (arg: string, arg2: number, arg3: boolean) => any> =
        T extends (arg: infer P, ...args: infer U) => any ? U : never

    type Or = P23<(arg: string, arg2: number, arg4: boolean) => void>

    const a: Or = [1, false]

    type FalttenArray<T extends Array<any>> = T extends Array<infer P>
        ? P
        : never

    type Eg1 = FalttenArray<[number, string]>

    type Eg2 = FalttenArray<[1, 'add']>

    type ReturnType<T extends (...args: any) => any> = T extends (
        ...args: any
    ) => infer R
        ? R
        : any

    type Func = ReturnType<() => string>
}
