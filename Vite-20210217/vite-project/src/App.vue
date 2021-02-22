<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Customer />
  <Customer2 />
  <Customer3 />
  <router-link to="/homepage">homepage</router-link>
  <router-view />
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Customer from './javascript/index'
import { Customer2 } from './javascript/index2'
import Customer3 from './javascript/index3'
console.log(Customer, Customer2, Customer3)
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>