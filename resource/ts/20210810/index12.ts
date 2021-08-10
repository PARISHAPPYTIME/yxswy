namespace other16 {
    type ConstructorParameters<T extends abstract new (...args: any) => any> =
        T extends abstract new (...args: infer P) => any ? P : never

    interface ErrorConstructor {
        new (message?: number): Error
        (message?: string): Error
        readonly prototype: Error
    }

    type Eg = ConstructorParameters<ErrorConstructor>

    class People {
        constructor(public name: string, sex?: number) {}
    }
    type Eg2 = ConstructorParameters<typeof People>

    class Animal {
        constructor(age: boolean) {}
    }
    type Eg3 = ConstructorParameters<typeof Animal>




    class MyClass {
        name: string
        age: number
        constructor() {}
    }

    abstract class MyAbstractClass {}

    const c1: typeof MyClass = MyClass

    const c3: typeof MyAbstractClass = MyClass

    const c4: typeof MyAbstractClass = MyAbstractClass

    class People2 {
        name: number;
        age: number;
        constructor() {}
    }
}
