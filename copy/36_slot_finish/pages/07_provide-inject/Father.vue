<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：品牌是{{ car.brand }}，价格{{ car.price }}</h4>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import {ref,reactive,provide} from 'vue'

// 数据
let money = ref(100);

let car= reactive({
  brand:'Benz',
  price:200
})

// 方法
function updateMoney(value:number){
  money.value-=value;
}

// 向后代提供数据
provide('moneyContext',{money,updateMoney})
provide('che',car)

</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>