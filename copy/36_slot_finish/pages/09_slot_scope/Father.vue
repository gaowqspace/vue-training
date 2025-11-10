<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Bim>
        <template v-slot="params">
          <ul>
            <li v-for="bim in params.bimJishu" :key="bim.id">
              {{ bim.name }}
            </li>
          </ul>
        </template>
      </Bim>
      <Bim>
        <template v-slot:default="params">
          <ol>
            <li v-for="item in params.bimJishu" :key="item.id">
              {{ item.name }}
            </li>
          </ol>
        </template>
      </Bim>
      <Bim>
        <template #default="{ bimJishu }">
          <h3 v-for="item in bimJishu" :key="item.id">{{ item.name }}</h3>
        </template>
      </Bim>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Bim from './Bim.vue';

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