import { ref, h } from 'vue'

window.count = ref(1)

const Child1 = {
    name: 'NextTickerChild1',
    setup() {},
    render() {
        return h('div', {}, `child1 count: ${window.count.value}`)
    }
}

// 函数式组件
// 你也可以写成 const Child2 = <div>{`child2 count: ${window.count.value}`}</div>
// 但是写成上面的写法就不会具有动态改变数据的变化了，（需要注意）
const Child2 = () => <div>{`child2 count: ${window.count.value}`}</div>

const Child3 = () => h('div', {}, `child1 count: ${window.count.value}`)

const clickFun = () => {
    window.count.value++
}

export default {
    name: 'NextTicker',
    setup() {
        setInterval(() => {
            window.count.value++
        }, 1220)
        console.log('h - jsx', Child1, Child2, Child3)
    },
    render() {
        return (
            <div>
                <h1>4. ---</h1>
                <button onClick={clickFun}>+++</button>
                <Child1 />
                <Child2 />
                <Child3 />
            </div>
        )
    }
}

// 测试 nextTick 逻辑
// import { h, ref } from 'vue'
// window.count = ref(1)

// const Child1 = {
//     name: 'NextTickerChild1',
//     setup() {},
//     render() {
//         return h('div', {}, `child1 count: ${window.count.value}`)
//     }
// }

// const Child2 = {
//     name: 'NextTickerChild2',
//     setup() {},
//     render() {
//         return h('div', {}, `child2 count: ${window.count.value}`)
//     }
// }

// export default {
//     name: 'NextTicker',
//     setup() {
//         setInterval(() => {
//             // window.count.value++
//             // console.log(window.count.value)
//         }, 1220)
//     },
//     render() {
//         return h(
//             'div',
//             { tId: 'nextTicker' },
//             [h(Child1), h(Child2)]
//             //   `for nextTick: count: ${window.count.value}`
//         )
//     }
// }
