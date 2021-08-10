import { ref } from 'vue'
import Child from './index6-children'

export default {
    name: 'Index6',
    setup() {
        const slots = {
            default: () => <h1>默认</h1>,
            foo: () => <h1>foo</h1>,
            name: () => <h1>name</h1>
        }
        return {
            slots
        }
    },
    render() {
        return (
            <div>
                <h1>6 --------------------</h1>
                <Child v-slots={this.slots}></Child>
            </div>
        )
    }
}
