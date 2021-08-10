<script lang="tsx">
import { defineComponent } from "vue";
import HelloWorld from "./HelloWorld.vue";
import logo from "../assets/logo.png";

// 2.用defineComponent定义组件且要导出
export default defineComponent({
  render: () => (
    <>
      <img alt="Vue logo" src={logo} />
      <HelloWorld msg="Hello Vue 3 + Vite" />
    </>
  ),
});
</script>