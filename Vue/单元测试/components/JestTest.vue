<template>
  <div>
    <h2>{{ count }} {{ name }}</h2>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span>
    <button>{{ msg }}</button>
  </div>
</template>
<script>
export default {
  name: "JestTest",
  data() {
    return {
      count: 0
    };
  },
  props: {
    msg: {
      typoe: String,
      require: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>
