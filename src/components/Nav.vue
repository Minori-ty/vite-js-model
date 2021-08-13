<template>
    <div>
        <h1>这里是Nav组件</h1>
        <p>颜色</p>
        <h3 class="a">{{ data }}</h3>
        <button @click="$store.commit('add')">add</button>
        <h3>{{ $store.state.count }}</h3>
    </div>
</template>
<script setup></script>
<style scoped>
.a {
    background-color: #fff;
}
</style>
