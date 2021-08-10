namespace other2 {
    interface T1 {
        name: string
    }

    interface T2 {
        sex: number
    }

    interface T3 extends T1, T2 {
        age: number
    }

    type A1 = 'x' extends 'x' ? 1 : 2

    type A2 = 'x' | 'y' extends 'x' ? 1 : 2

    type P<T> = T extends 'x' ? 1 : 2

    type P2<T> = [T] extends ['x'] ? 1 : 2

    type A3 = P<'x' | 'y'>

    type A4 = P2<'x' | 'y'>
}



