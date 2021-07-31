<template>
    <Nav :data="data"></Nav>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</template>
<script setup>
import Nav from 'components/Nav.vue'
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import { useRoute } from 'vue-router'
const data = '数据'
const route = useRoute()
const { path } = route
console.log(path)
</script>
<style lang="less" scoped></style>
