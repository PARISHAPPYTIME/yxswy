import { ref } from 'vue'

// export default {
//     name: 'Index6',
//     setup(proxy, { attrs, emit, expose, props, slots }) {
//         console.log('index6 - proxy, context', props, slots)
//         console.log(slots)
//         return () => slots.default()
//     }
// }

export default {
    name: 'Index6',

    setup(proxy, { attrs, emit, expose, props, slots }) {},
    render(proxy) {
        console.log(proxy, this.$slots)
        return (
            <div>
                {this.$slots.default()}
                {this.$slots.foo()}
                {this.$slots.name()}
            </div>
        )
    }
}
