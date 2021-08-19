<template>
    <img src="/images/logo.png" alt="" />
    <img :src="path" alt="" title="1" />
    <img :src="obj.path" alt="" />
    <!-- <img src="/pic/contact.jpg" alt="" /> -->
</template>

<script setup>
const path = '/images/logo.png'
const obj = {
    path: '/pic/contact.jpg',
}
</script>

<style scoped lang="less"></style>
