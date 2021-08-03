<template>
    <!-- <router-view></router-view> -->

    <!-- <img src="./assets/logo.png" alt="" />
  <el-button>点击</el-button>
  <el-input></el-input> -->

    <el-scrollbar>
        <el-alert title="成功提示的文案" type="success"> </el-alert>
        <el-card>
            <el-input></el-input>
        </el-card>
        <p class="item" v-for="item in 200" :key="item">{{ item }}</p>
    </el-scrollbar>
</template>

<script setup>
import data from './data/data.json'
console.log(data)
</script>

<style>
html,
body,
#app {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>
