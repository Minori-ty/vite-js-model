<template>
  <div>
    <h1>这里是Nav组件</h1>
    <p>颜色</p>
    <h3>{{ data }}</h3>
    <button @click="$store.commit('add')">add</button>
    <h3>{{ $store.state.count }}</h3>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
defineProps({
  data: Array,
})
</script>
<style scoped></style>
