<template>
    <div>
        <h1 class="">这里是Nav组件</h1>
        <p>颜色</p>
        <h3 class="">{{ data }}</h3>
        <button @click="$store.commit('add')">add</button>
        <h3>{{ $store.state.count }}</h3>
    </div>
</template>
<script setup></script>
<style scoped>
.a {
    width: 100px;
    background-color: #ffffff;
}
</style>
