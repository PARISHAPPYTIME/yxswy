export interface ReactiveEffect<T = any> {
    (): T
    _isEffect: true
    id: number
    active: boolean
    raw: () => T
    allowRecurse: boolean
}

function createReactiveEffect<T = any>(
    fn: () => T,
    options: any
): ReactiveEffect<T> {
    const effect = function reactiveEffect(): unknown {
        if (!effect.active) {
            return options.scheduler ? undefined : fn()
        }
    } as ReactiveEffect
    effect.allowRecurse = !!options.allowRecurse
    effect._isEffect = true
    effect.active = true
    effect.raw = fn
    return effect
}
