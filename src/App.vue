<template>
    <router-link to="/mobile">mobile</router-link>
    <router-link to="/phone">phone</router-link>
    <router-view></router-view>
</template>

<script setup>
const a = 1
console.log(a)
</script>

<style scoped lang="less">
div {
    width: 13.3333vw;
}
</style>
