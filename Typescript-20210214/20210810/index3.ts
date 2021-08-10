namespace other1 {
    interface Eg1 {
        name: string
        readonly age: number
    }

    interface Eg2 {
        color: string
        age: string
    }

    type T = Eg1 & Eg2

    const val: T = {
        name: '',
        color: '2',
        age: (function a() {
            throw Error()
        })()
    }
}
