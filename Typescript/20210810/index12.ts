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

    // class People2 {
    //     static num123: number
    //     age: number
    //     constructor() {}
    //     static run() {}
    // }

    // const p1: People2 = new People2()
    // p1.age
    // p1.run

    // const p2: People2 = People2
    // p2.run

    // const p3: typeof People2 = new People2()
    // p3.num123
    // p3.run

    // const p4: typeof People2 = People2()
    // p4.num123
}
