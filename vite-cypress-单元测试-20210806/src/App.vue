<template>
  <MessageForm @send="handleSend" />
  <MessageList :messages="message" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MessageForm from './components/MessageForm.vue'
import MessageList from './components/MessageList.vue'

const message = reactive<any[]>([])

function handleSend(msg: string) {
  message.push(msg)
}

</script>