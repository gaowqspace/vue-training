<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="bim in bimList" :key="bim.id">{{ bim.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>BIM技术</h2>
        </template>
      </Category>
      <Category>
        <template v-slot:s2>
          <img :src="imageUrl" alt="">
        </template>
        <template v-slot:s1>
          <h2>一公院组织架构</h2>
        </template>
      </Category>
      <Category>
        <template #s2>
          <video :src="videoUrl" controls></video>
        </template>
        <template #s1>
          <h2>精彩片段</h2>
        </template>
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