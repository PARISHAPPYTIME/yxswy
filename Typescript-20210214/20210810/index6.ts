namespace other4 {
    interface Animal {
        name: string
    }

    interface Dog extends Animal {
        run(): void
    }

    interface AnimalFn {
        (arg: Animal): void
    }

    interface DogFn {
        (arg: Dog): void
    }

    let animal: AnimalFn = (arg: Animal) => {}

    let dog: DogFn = (arg: Dog) => {
        arg.run()
    }

    dog = animal
}

