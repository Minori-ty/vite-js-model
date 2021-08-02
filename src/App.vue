<template>
    <!-- <router-view></router-view> -->

    <!-- <img src="./assets/logo.png" alt="" />
  <el-button>点击</el-button>
  <el-input></el-input> -->
    <div class="main">
        <el-scrollbar :always="true">
            <p class="item" v-for="item in 200" :key="item">{{ item }}</p>
        </el-scrollbar>
       </div>
</template>

<script setup>
   import data from './data/data.json'
console.log(data)
</script>

<style lang="scss">
img {
    width: 700px;
    height: 700px;
}
.main {
    // height: 1500px
    background-color: hotpink;
}
.el-scrollbar {
    height: 100%;
    background-color: #eeeeee;
}
.main .el-scrollbar__wrap {
    overflow: scroll;
    margin: 0;
    padding: 0;
    width: 110%;
    height: 100%;
}
</style>
