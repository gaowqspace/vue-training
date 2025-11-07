<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>爷爷给的钱：{{ money }}</h4>
    <h4>车子：品牌是{{ car.brand }}，价格{{ car.price }}</h4>
    <button @click="updateMoney(6)">花爷爷的钱</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
 import {inject} from 'vue';

//  向祖父接受数据
let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}});
let car= inject('che',{brand:'未知', price:0});
</script>

<style scoped>
  .grand-child{
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
  }
</style>