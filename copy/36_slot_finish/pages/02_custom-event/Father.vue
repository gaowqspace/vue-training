<template>
	<div class="father">
		<h3>父组件</h3>
		<h4 v-show="toy">孩子给的玩具：{{ toy }}</h4>

		<!-- 原生事件 -->
		<button @click="test(6)">点我</button>

		<!-- 给子组件Child绑定事件 -->
		<Child @send-toy="getToy"/>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from "vue";

// Data
let toy = ref('');

function test(value: number){
	console.log('test',value);
}

// 用于保存传递过来的玩具
function getToy(value:string){
	toy.value = value;
}

// 自定义事件梳理
// 1. 给子组件Child绑定 send-toy 事件
// 2. 当 send-toy 事件被触发，就调用 getToy()函数
// 3. send-toy 事件的触发在子组件中进行。当点击按钮时click执行，调用emit，发送数据

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-right: 5px;
}
</style>