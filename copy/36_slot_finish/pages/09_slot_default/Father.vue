<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="BIM技术">
        <ul>
          <li v-for="bim in bimList" :key="bim.id">{{ bim.name }}</li>
        </ul>
      </Category>
      <Category title="一公院组织架构">
        <img :src="imageUrl" alt="">
      </Category>
      <Category title="精彩片段">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from "vue";

// 数据
let bimList = reactive([
  { id: 'b01', name: 'Bentely' },
  { id: 'b02', name: 'MicroStation' },
  { id: 'b03', name: 'CAD' },
  { id: 'b04', name: 'BimBase' },
]);

let imageUrl = ref('/img/imageTest.jpg');
let videoUrl = ref('https://vjs.zencdn.net/v/oceans.mp4');


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