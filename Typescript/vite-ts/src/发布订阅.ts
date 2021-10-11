class Person {
    private subs: Record<string, any[]>
    constructor() {
        this.subs = {}
    }

    $on(type: string, fn: () => void) {
        if (!this.subs[type]) {
            this.subs[type] = []
        }

        this.subs[type].push(fn)
    }

    $emit(type: string, ...args: any[]) {
        if (this.subs[type]) {
            this.subs[type].forEach(fn => fn(...args))
        }
    }
}

const eventHub = new Person()
eventHub.$on('sum', function() {
    let count = [...arguments].reduce((x, y) => x + y)
    console.log(count)
})
eventHub.$emit('sum', 1, 2, 3)