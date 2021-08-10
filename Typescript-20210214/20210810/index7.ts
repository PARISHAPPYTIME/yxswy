interface EventListener {
    (evt: Event): void
}

interface Event {
    readonly target: EventTarget | null
    preventDefault(): void
}

interface MouseEvent extends Event {
    readonly x: number
    readonly y: number
}

interface window {
    addEventListener(type: string, listener: EventListener)
}

window.addEventListener('click', (e: Event) => {})
window.addEventListener('mouseover', (e: MouseEvent) => {})