<template>
    <router-view></router-view>
    <el-button type="primary">点击</el-button>
    <img src="/images/logo.png" alt="" />
    <!-- <img src="/images/1.png" alt="" /> -->
    <h3>sky-blue</h3>
</template>

<script setup>
import { isMobile } from 'utils/isMobile.js'
let flag1 = isMobile() ?? 'null'
window.onresize = () => {
    let flag2 = isMobile() ?? 'null'
    if (flag1[0] != flag2[0]) location.reload()
}

// import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
</script>

<style scoped lang="scss">
h3 {
    width: 100px;
    color: $color;
}
</style>
