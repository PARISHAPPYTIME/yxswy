<template>
    <input type="text" data-test="messageText" v-model="inputValue" />
    <button @click="add">
        send
    </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    emits: ['send'],
    setup(props, { emit }) {
        const inputValue = ref('')
        const add = () => {
            emit('send', inputValue.value)
            inputValue.value = ''
        }
        return { inputValue, add }
    }
})
</script>
