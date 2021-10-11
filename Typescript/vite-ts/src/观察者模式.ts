class Observer {
    update(): void {
        console.log('目标更新')
    }
}

class Subject {
    private observerLists: any[]
    constructor() {
        this.observerLists = []
    }

    addObs(obs: Observer) {
        if (obs && Reflect.has(obs, 'update')) {
            this.observerLists.push(obs)
        }
    }

    notify() {
        this.observerLists.forEach((obs) => {
            obs.update()
        })
    }

    empty() {
        this.observerLists = []
    }
}

// 创建目标
let sub = new Subject()

// 创建观察者
let obs1 = new Observer()
let obs2 = new Observer()
sub.addObs(obs1)
sub.addObs(obs2)

sub.notify()