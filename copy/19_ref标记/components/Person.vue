<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>朝阳区</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
  import {ref,defineExpose} from 'vue';

  // 创建一个title2，用于存储ref标记的内容
  // 这里的ref用来做标记，相当于局部变量的作用
  let title2 = ref()
  let a =ref(0);
  let b =ref(1);
  let c =ref(2);

  function showLog(){
    console.log(title2.value);
  }

  defineExpose({a,b,c});

  // 结论
  // ref可以用在html标签，也可以用在组件标签。用在html标签拿到的是DOM元素，用在组件标签拿到的是组件实例对象
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
