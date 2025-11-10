<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="BIM技术"/>
      <Category title="美食城市"/>
      <Category title="精彩电影"/>
    </div>

  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from "vue";

// 数据
let bimList=reactive([
  {id:'b01',name:'Bentely'},
  {id:'b02',name:'MicroStation'},
  {id:'b03',name:'CAD'},
  {id:'b04',name:'BimBase'},
]);



</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>