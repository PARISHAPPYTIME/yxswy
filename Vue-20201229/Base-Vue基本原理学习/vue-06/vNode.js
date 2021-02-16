/*createEmptyVNode 创建一个空VNode节点*/
export const createEmptyVNode = () => {
    const node = new VNode()
    node.text = ''
    node.isComment = true
    return node
}

/*createTextVNode 创建一个文本节点*/
export function createTextVNode(val) {
    return new VNode(undefined, undefined, undefined, String(val))
}

/*createComponent 创建一个组件节点*/
