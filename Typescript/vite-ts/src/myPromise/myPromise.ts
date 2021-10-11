type Callback = (v: any) => any

type Executor = (resolve: Callback, reject: Callback) => any

enum Status {
    pending,
    resolved,
    rejected
}

class myPromise { // executor 是一个执行器函数
    status: Status = Status.pending
    data: any
    reason: any
    callbacks: any[] = []

    constructor(executor: Executor) {
        const self = this;
        self.status = Status.pending; // promise对象状态
        self.data = undefined; // promise对象指定一个用于存储结果数据的属性
        self.callbacks = []; // 待执行的回调函数

        function resolve(value: unknown) {
            if (self.status === Status.pending) {
                self.status = Status.resolved
                self.data = value
                if (self.callbacks.length > 0) {
                    setTimeout(() => {
                        self.callbacks.forEach((callbackObj) => {
                            callbackObj.onResolved(value)
                        })
                    })
                }
            }
        }

        function reject(reason: unknown) {
            if (self.status == Status.pending) {
                self.status = Status.rejected
                self.data = reason
                if (self.callbacks.length > 0) {
                    setTimeout(() => {
                        self.callbacks.forEach((callbackObj) => {
                            callbackObj.onRejected(reason)
                        })
                    })
                }
            }
        }

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onResolved?: Callback | null, onRejected?: Callback | null) {
        const self = this
        onResolved = typeof onResolved === 'function' ? onResolved : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        return new myPromise((resolve, reject) => {
            function handle(callback: (v: any) => any) {
                try {
                    const result = callback(self.data)
                    if (result instanceof myPromise) {
                        result.then(resolve, reject)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if (self.status === Status.pending) {
                self.callbacks.push({
                    onResolved() {
                        handle(onResolved as Callback)
                    },
                    onRejected() {
                        handle(onRejected as Callback)
                    }
                })
            } else if (self.status === Status.resolved) {
                setTimeout(() => {
                    handle(onResolved as Callback)
                })
            } else if (self.status === Status.rejected) {
                setTimeout(() => {
                    handle(onRejected as Callback)
                })
            }
        })
    }

    catch(onRejected: any) {
        return this.then(undefined, onRejected)
    }

    static resolve = function (value: any) {
        return new myPromise((resolve, reject) => {
            if (value instanceof myPromise) {
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }

    static reject = function (reason: any) {
        return new myPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all = function (promises: myPromise[]) {
        const values = new Array(promises.length)
        let count = 0
        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                myPromise.resolve(promise).then(
                    value => {
                        count++
                        values[index] = value
                        if (count === promises.length) {
                            resolve(values)
                        }
                    },
                    reason => {
                        reject(reason)
                    }
                )
            });
        })
    }

    static race = function (promises: myPromise[]) {
        return new myPromise((resolve, reject) => {
            promises.forEach(promise => {
                myPromise.resolve(promise).then(resolve, reject)
            });
        })
    }
}

export default myPromise
