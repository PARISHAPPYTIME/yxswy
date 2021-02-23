import { ref } from 'vue'

export default {
    name: 'Index5',
    setup() {
        const count = ref(0)
        const setCount = () => {
            count.value++
        }
        return {
            count,
            setCount
        }
    },
    render() {
        return (
            <div>
                <button onClick={this.setCount}>点击改变count</button>5
                --------------------------------{this.count}
            </div>
        )
    }
}
