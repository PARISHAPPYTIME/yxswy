<template>
  <div>
    <h1>App2</h1>
    {{ message }}
    <Parent2
      v-model:msg="message"
      @fn="fn"
    >
      <template #content>
        <div>这里是内容 {{ message }}</div>
      </template>
      这个是默认内容
    </Parent2>
    <Index6 />
    {{ count }} / {{ count2.value2 }}
    <button ref="buttonRef" @click="btn">点击更换 count</button>
    <el-button>my button</el-button>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, reactive, onBeforeMount, onUpdated } from 'vue'
import Parent2 from './javascript/Parent.vue'
const message = ref('name')

const fn = () => {
  console.log('fn')
}

// ---------------------------------
const count = ref(0)
const count2 = reactive({
  value2: 0
})

let timer = null
const btn = () => {
  timer = setInterval(() => {
    count.value++;
    count2.value2++
  }, 1000)
}

watch([count, () => count2.value2], ([newV1, newV2], [oldV1, oldV2]) => {
  console.log('count', newV1, oldV1, newV2, oldV2)
})
// -----------------------------------------------
const buttonRef = ref(null)
console.log(buttonRef, 789) // 获取组件实例
// -----------------------------------------------
// watchEffect(() => {
//   console.log("watchEffect-post-数据的更改之后", count)
// }, { flush: 'post' })

// watchEffect(() => {
//   console.log("watchEffect-pre-数据的更改之前", count)
// }, { flush: 'pre' })

// watchEffect((onInvalidate) => {
//   console.log("watchEffect-pre-数据的更改之前", count)
//   onInvalidate(() => {
//     console.log('清除');
//     clearInterval(timer);
//   })
// }, {
//   onTrigger (e) {
//     // 依赖项变更导致副作用被触发时
//     // e.target包含了值
//     console.log(1, e)
//   },
//   onTrack (e) {
//     // 当一个 reactive对象属性或一个 ref 作为依赖被追踪时触发
//     // e.target包含了值
//     console.log(1, e)
//   }
// })

onBeforeMount(() => {
  console.log('onBeforeMount生命周期被调用了')
})
onMounted(() => {
  console.log('onMounted生命周期被调用了')
})
onUpdated(() => {
  console.log('updated生命周期被调用了')
})
</script>

<style>
</style>