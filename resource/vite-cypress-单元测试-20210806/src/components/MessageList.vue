<template>
    <ul>
        <li v-for="(item, index) in messages" :key="index">{{ item }}</li>
    </ul>
</template>

<script lang="ts" setup>
defineProps(["messages"])
</script>
