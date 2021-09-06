<template>
    <div>1</div>
    <img src="/images/1.png" alt="" />
    <img src="./assets/images/1.png" alt="" />
    <img src="./assets/images/pic/contact.jpg" alt="" />
</template>

<script setup>
import { isMobile } from 'utils/isMobile.js'
let flag1 = isMobile() ?? 'null'
window.onresize = () => {
    let flag2 = isMobile() ?? 'null'
    if (flag1[0] != flag2[0]) {
        location.reload()
    }
}
</script>

<style lang="less" scoped></style>
