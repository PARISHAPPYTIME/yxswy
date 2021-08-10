import { provide, inject } from 'vue'

export interface FunctionalStore<T extends object> {
    (...args: any[]): T
    token?: symbol
    root?: T
}

export function useProviders(...funcs: FunctionalStore<any>[]) {
    funcs.forEach((func) => {
        !func.token && (func.token = Symbol('functional store'))
        const depends = func()
        provide(func.token, depends)
    })
}

type InjectType = 'root' | 'optional'
export function useInjector<T extends object>(
    func: FunctionalStore<T>,
    type?: InjectType
) {
    const token = func.token
    const root = func.root
    switch (type) {
        case 'optional':
            return inject<T>(token) || func.root || null
        case 'root':
            if (!func.root) func.root = func()
            return func.root
        default:
            if (inject(token)) {
                return inject<T>(token)
            }
            if (root) return func.root
            throw new Error(
                `状态钩子函数${func.name}未在上层组件通过调用useProvider提供`
            )
    }
}
