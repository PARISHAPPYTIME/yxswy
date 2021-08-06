<template>
    <main>
        <div class="app-container">
            <div>{{ state.info.hitokoto }}</div>
            <br>
            「 {{ state.info.from }} 」
            <div></div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import axios from 'axios'

const state = reactive<Record<string, any>>({
  info: {}
})

const init = () => {
    axios({
        url: 'https://v1.hitokoto.cn/?c=d',
        method: 'GET'
    })
        .then((res) => res.data)
        .then((res) => {
            state.info = res || {}
        })
}

onMounted(init)
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
}

main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
