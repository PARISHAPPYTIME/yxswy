import { h, ref } from 'vue'

const isChange = ref(false)

// const prevChildren = [
//     h('div', { key: 'a', id: 'old-a' }, 'a'),
//     h('div', { key: 'b', id: 'old-b' }, 'b')
// ]
// const nextChildren = [
//     h('div', { key: 'b', id: 'old-b' }, 'b'),
//     h('div', { key: 'a', id: 'old-a' }, 'a')
// ]

// 第二种情况：
// 新节点的数量增加了一个
const prevChildren = [h('div', { key: 'a', id: 'old-a' }, 'a')]
const nextChildren = [
    h('div', { key: 'a', id: 'new-a' }, 'a'),
    h('div', { key: 'b' }, 'b')
]

export default {
    name: 'PatchChildren',
    setup() {},
    render() {
        return h('div', {}, [
            h(
                'button',
                {
                    onClick: () => {
                        isChange.value = !isChange.value
                    }
                },
                '测试子组件之间的 patch 逻辑'
            ),
            h(
                'children',
                {},
                isChange.value === true ? nextChildren : prevChildren
            )
        ])
    }
}
