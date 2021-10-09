namespace other3 {
    interface Animal {
        name: string
    }

    interface Dog extends Animal {
        break(): void
    }

    let a: Animal
    let b: Dog

    a = b

    type A = 1 | 2 | 3
    type B = 2 | 3

    a = b

    let Eg1: Animal
    let Eg2: Dog

    Eg1 = Eg2

    let Eg3: Array<Animal>
    let Eg4: Array<Dog>

    Eg3 = Eg4
}
