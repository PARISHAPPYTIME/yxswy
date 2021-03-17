<template>
  <div>
     <h1>Store</h1>
     {{ mssage }}
     <slot name="content"></slot>
     <slot name="default"></slot>
      <Conent />
      <button @click="btn">点击变化</button>
  </div>
</template>

<script setup="props,context">
import Conent from './Conent.vue'
import { useProviders } from './inter.ts'
import { defineComponent, defineProps, provide, reactive, ref  } from 'vue'
import { User } from './test'

const propsContent = defineProps({
  msg: String
})


console.log(propsContent)
// const { msg } = props
const mssage = ref('子 Message')
// console.log(context.slots.content)
const btn = () => {
  context.emit('update:msg', '你好这是被更改的数据')
}
useProviders(User)
</script>

<style>

</style>