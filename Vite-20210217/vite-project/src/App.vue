<template>
  <!-- <Customer />
  <Customer2 />
  <Customer3 />
  <PatchChildren />
  <Index5 /> -->
  <!-- <Customer4 /> -->
  <!-- <Index6 /> -->
  <!-- <router-link to="/homepage">homepage</router-link>
  <router-view /> -->
  <HelloWorld v-model:hello="hello" />
</template>

<script setup>
import HelloWorld from './javascript/HelloWorld.vue'
import Customer from './javascript/index'
import { Customer2 } from './javascript/index2'
import Customer3 from './javascript/index3'
import Customer4 from './javascript/index4'
import PatchChildren from './javascript/patchChildren'
import Index5 from './javascript/index5'
import Index6 from './javascript/index6-slot'
import { ref } from 'vue'

const hello = ref('hello-world')

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