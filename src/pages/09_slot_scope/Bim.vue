<template>
  <div class="bim">
    <h2>BIM技术
    </h2>
    <!-- 作用域插槽 -->
    <slot name="default" :bimJishu="bimList"></slot>
  </div>
</template>

<script lang="ts" setup name="Bim">
import { reactive } from "vue";

// Data
let bimList = reactive([
  { id: 'b01', name: 'Bentely' },
  { id: 'b02', name: 'MicroStation' },
  { id: 'b03', name: 'CAD' },
  { id: 'b04', name: 'BimBase' },
]);

</script>

<style scoped>
.bim {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
h2{
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>