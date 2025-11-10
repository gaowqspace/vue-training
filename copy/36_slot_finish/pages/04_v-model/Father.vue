<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>用户名：{{ username }}</h4>
    <h4>我的密码：{{ password }}</h4>
    <!-- v-model 用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- v-model 的底层原理 -->
    <!-- <input type="text" v-bind:value="username" v-on:input="username=(<HTMLInputElement>$event.target).value"> -->
    <!-- v-model 的底层原理--简洁的写法 -->
    <!-- <input type="text" v-bind:value="username" v-on:input="handleInput"> -->

    <!-- v-model 用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- 本质写法 -->
    <!-- 给组件传递了一个modelValue，并且给它绑定了一个事件update:modelValue -->
    <!-- <AtguiguInput 
    v-bind:modelValue="username" 
    v-on:update:modelValue="username = $event" 
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password" />

  </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from "vue";
import AtguiguInput from "./AtguiguInput.vue";

// 数据
let username = ref('zhangsan');
let password = ref('123456')

// v-model 原理解析-代码简洁清晰的写法-抽离成事件处理函数
// 定义处理输入的函数
const handleInput = (e: Event) => {
  // 进行类型断言，告诉 TS：这个事件的目标确确实实是一个 HTMLInputElement
  username.value = (e.target as HTMLInputElement).value;
}



</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
