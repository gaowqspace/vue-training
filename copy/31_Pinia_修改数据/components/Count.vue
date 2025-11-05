<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h3>欢迎来到{{ countStore.school }}, 位于{{ countStore.address }}</h3>
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
import {ref} from 'vue';
import { useCountStore } from "@/store/count";

const countStore = useCountStore();

// 数据
let n=ref(1); //用户选择的数字

// Methods
function add(){
    // 第一种修改数据的方式：直接修改state中的数据
    // countStore.sum+=n.value;

    // 第二种修改数据的方式：使用patch方法批量修改数据
    // countStore.$patch({
    //     sum:90,
    //     school:'中交一公院',
    //     address:'科技路'
    // })

    // 第三种修改数据的方式：使用store中定义的action方法
    countStore.increment(n.value)

}
function minus(){

}

</script>

<style scoped>
.count{
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>