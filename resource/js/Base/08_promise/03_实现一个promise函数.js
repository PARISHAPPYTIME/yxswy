const Pending = Symbol('Pending')
const Fulfilled = Symbol('Fulfilled')
const Rejected = Symbol('Rejected')

class mPromise {
    constructor(executor) {
        this.state = Pending; // 存储 Promise 的状态
        this.value = undefined // 执行成功的结果
        this.reason = undefined // 执行失败的原因
        this.onFulfilled = []
        this.onRejected = []
        const resolve = (value) => {
            if(this.state === Pending) {
                this.state = Fulfilled
                this.value = value
                this.onFulfilled.forEach(item => item())
            }
        }
        const reject = (reason) => {
            if(this.state === Pending) {
                this.state = Rejected
                this.reason = reason
                this.onRejected.forEach(item => item())
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        let promise = new mPromise((resolve, reject) => {
            if(this.state === Fulfilled) {
                if(onFulfilled && typeof onFulfilled === 'function') {
                    setTimeout(() => {
                        const x = onFulfilled(this.value)
                        handleValue(promise, x, resolve, reject)
                    }, 0)
                }
            }
            if(this.state === Rejected) {
                if(onRejected && typeof onRejected === 'function') {
                    setTimeout(() => {
                        const x = onRejected(this.reason)
                        handleValue(promise, x, resolve, reject)
                    },0)
                }
            }
            if(this.state === Pending) {
                if(onFulfilled && typeof onFulfilled === 'function') {
                    this.onFulfilled.push(() => {
                        setTimeout(() => {
                            const x = onFulfilled(this.value)
                            handleValue(promise, x, resolve, reject)
                        }, 0)
                    })
                }
                if(onRejected && typeof onRejected === 'function') {
                    this.onRejected.push(() => {
                        setTimeout(() => {
                            const x = onRejected(this.reason)
                            handleValue(promise, x, resolve, reject)
                        }, 0)
                    })
                }
            }
        })
        return promise
    }
}

const handleValue = (promise, x, resolve, reject) => {

}

const test = new mPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok 绷')
    }, 2000)
})

test.then(res => {
    console.log(res)
})