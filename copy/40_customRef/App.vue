<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script lang="ts" setup name="App">
import { ref, customRef } from "vue";
import fds from "./useMsgRef";

// Data
// 1. 使用vue提供的默认ref定义响应式数据，数据一变，页面就更新
// let msg = ref('hello')

// 2. 使用vue提供的customRef定义响应式数据
let{msg} = fds('hello',2000);

</script>

<style scoped>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
}

button {
	margin: 0 5px;
}
</style>
