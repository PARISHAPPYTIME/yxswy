<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="fnClick">count is: {{ store.localInfo.showPicker }}</button>
  <h1>{{ computedNumber }}</h1>
  <slot>--default</slot>
  <slot name="content">--content</slot>
  <slot name="footer">--footer</slot>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { useLocaleStore } from '../store/modules/locale'

export default defineComponent({
  name: 'HelloWorld',
  emits: ['message'],
  props: {
    msg: String,
    number: Number
  },
  setup(props, { attrs, emit, expose, slots }) {
    const store = useLocaleStore()
    const computedNumber = computed(() => {
      return props.number
    })

    const fnClick = () => {
      emit('message')
      let v = store.getShowPicker
      store.setLocaleInfo({
        showPicker: ++v
      })
    }

    const _fn = () => {
      console.log('私有方法')
    }

    expose({
      _fn,
      fnClick
    })

    const count = ref(0)
    return { count, fnClick, store, computedNumber }
  }
})
</script>
