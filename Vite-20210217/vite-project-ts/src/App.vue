<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <ComponentA />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
// import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ComponentA from "./components/componentA.vue";

interface Student {
  name: string
}

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ComponentA,
  },
  setup(props, content) {
    onMounted(() => {
      const request = () => {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            console.log(3);
            resolve(9898);
          }, 5000);
        });
      };
      console.log(this);
      request().then((res) => {
        console.log(res);
      });
    });
  },
});
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