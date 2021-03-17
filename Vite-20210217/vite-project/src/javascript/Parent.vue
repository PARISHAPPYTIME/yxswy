<template>
  <div>
     <h1>Store</h1>
      <Conent />
  </div>
</template>

<script>
import Conent from './Conent.vue'
import { useProviders } from './inter.ts'
import { defineComponent, provide, reactive  } from 'vue'
import { User } from './test'
export default defineComponent({
    components: { Conent },
    setup() {
      useProviders(User)
    }
})
</script>

<style>

</style>