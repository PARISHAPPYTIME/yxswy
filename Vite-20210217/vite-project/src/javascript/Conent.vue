<template>
  <div>
      <h1>{{ person.username }}</h1>
      <button @click="setPerson">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from 'vue'
import { useInjector } from './inter'
import { User } from './test'
export default defineComponent({
  setup() {
    const { person, setPerson } = useInjector(User)
    return {
      person,
      setPerson
    }
  }
})
</script>

<style>

</style>