<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2>
        <h3>欢迎来到{{ school }}, 位于{{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
import { ref, toRefs } from 'vue';
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore();

// StoreToRefs 只关注Store中的数据，不会对方法进行ref包裹
let {sum,school,address} = storeToRefs(countStore);
console.log('xx',storeToRefs(countStore));


// 数据
let n = ref(1); //用户选择的数字

// Methods
function add() {
    countStore.increment(n.value)
}
function minus() {
    countStore.sum-=n.value;
}

</script>

<style scoped>
.count {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>