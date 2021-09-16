<template>
    <!-- <img src="/images/logo.png" alt="" /> -->
    <img src="./assets/images/1.png" alt="" />
</template>

<script setup>
import { isMobile } from 'utils/isMobile.js'
let flag1 = isMobile() ?? 'null'
window.onresize = () => {
    let flag2 = isMobile() ?? 'null'
    if (flag1[0] != flag2[0]) location.reload()
}
</script>

<style lang="less" scoped></style>
