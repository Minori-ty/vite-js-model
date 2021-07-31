<template>
    <div>
        <h1>这里是Home组件</h1>
        <h2>{{ goodsList }}</h2>
    </div>
</template>
<script setup>
import axios from 'utils/reques'
// import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
let goodsList = ref([])
const api = async () => {
    const { data } = await axios.get('/home/new')

    //重点，这里别忘了改成.value
    goodsList.value = data.result
    console.log(goodsList)
}
// const route = useRoute()
// const { path } = route
// console.log(path)
onMounted(() => {
    api()
})
</script>
<style lang="less" scoped></style>
