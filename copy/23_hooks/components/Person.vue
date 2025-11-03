<template>
  <div class="person">
    <h2>当前求和为: {{ sum }}，乘积后的和是{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
 import useDog from '@/hooks/useDog';
 import useSum from '@/hooks/useSum';

 const {dogList,getDog} = useDog();
 const {add,sum,bigSum} = useSum();

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

img{
  height: 100px;
  margin-right: 10px;
}
</style>
