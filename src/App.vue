<template>
    <main :class="{ [theme]: true }">
        <div class="app-container">
            <div>{{ state.info.hitokoto }}</div>
            <br />
            「 {{ state.info.from }} 」
            <div></div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'

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

const nowYear = dayjs().format('YYYY')
const nowMonth = dayjs().format('MM')
const nowDay = dayjs().format('DD')
const startDate = dayjs(`${nowYear}-${nowMonth}-${nowDay} 05:58:40`)
const endDate = dayjs(`${nowYear}-${nowMonth}-${nowDay} 18:00:00`)

const theme = ref('')

const diffTime = () => {
    const nowDate = dayjs()
    if (nowDate.isAfter(startDate) && nowDate.isBefore(endDate)) {
        theme.value = 'light'
    } else {
        theme.value = 'dark'
    }
}

let timer = setInterval(diffTime, 1000)
onBeforeUnmount(() => {
    clearInterval(timer)
})

onMounted(init)
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    transition: all 0.35s;
    padding: 25px;
    padding-top: 13%;
    box-sizing: border-box;
}

main.dark {
    background-color: #2c3e50;
    color: white;
}

main.light {
    background-color: white;
    color: #2c3e50;
}

.app-switch-theme {
    position: fixed;
    top: 35px;
    right: 35px;
}

.app-switch-theme img {
    width: 45px;
    height: 45px;
}
</style>
