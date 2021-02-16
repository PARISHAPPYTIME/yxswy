// 遍历 dom 结构，解析指令和插槽表达式
class Compile {
  // el- 带编译的模板 vm-Vue 实例
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    // 把模板中的内容移到片段操作
    this.$fragment = this.node2Fragment(this.$el)
    // 执行编译
    this.compile(this.$fragment)
    this.$el.appendChild(this.$fragment)
  }

  node2Fragment(el) {
    // 创建片段
    const fragment = document.createDocumentFragment()
    let child
    while ((child = el.firstChild)) {
      fragment.appendChild(child)
    }
    return fragment
  }

  compile(el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach((node) => {
      // 判断是否是元素
      if (node.nodeType === 1) {
        // console.log('编译元素 - ' + node.nodeName)
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // console.log('编译插值文本' + node.textContent)
        this.compileText(node)
      }
      // 递归子节点
      if (node.children && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  compileText(node) {
    const exp = this.$vm[RegExp.$1]
    this.update(node, this.$vm, exp, 'text')
  }

  compileElement(node, value) {
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).forEach((attr) => {
      const attrName = attr.name
      const exp = attr.value
      if (attrName.indexOf('v-') === 0) {
        const dir = attrName.substring(2)
        this[dir] && this[dir](node, this.$vm, exp)
      }

      if (attrName.indexOf('@') === 0) {
        const dir = attrName.substring(1) // 事件名称
        // 事件监听处理
        this.eventHandler(node, this.$vm, exp, dir)
      }
    })
  }
  text(node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }

  html(node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }

  model(node, vm, exp) {
    this.update(node, vm, exp, 'model')
    node.addEventListener('input', (e) => {
      vm[exp] = e.target.value
    })
  }
  // ----------------
  update(node, vm, exp, dir) {
    console.log(dir + 'Updater')
    const updater = this[dir + 'Updater']
    updater && updater(node, vm[exp])
    // 创建 Watcher 实例，依赖收集完成
    new Watcher(vm, exp, function (value) {
      updater && updater(node, value)
    })
  }
  // 事件处理: get node 添加事件监听 dir - 事件
  // 通过 vm.$options.methods[exp] 可获得事件回调函数
  eventHandler(node, vm, exp, dir) {
    let fn = vm.$options.methods && vm.$options.methods[exp]
    if (dir && fn) {
      node.addEventListener(dir, fn.bind(vm))
    }
  }
  // -------------------------
  textUpdater(node, value) {
    node.textContent = value
  }

  htmlUpdater(node, value) {
    node.innerHTML = value
  }

  modelUpdater(node, value) {
    node.value = value
  }
}
