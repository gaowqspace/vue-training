<template>
	<div class="app">
		<h2>姓名：{{ person.name }}</h2>
		<h2>年龄：{{ person.age }}</h2>
		<button @click="person.age+=1">修改年龄</button>
		<hr>
		<h2>{{ car2 }}</h2>
		<button @click="car2.price+=10">点我+=10</button>
	</div>
</template>

<script lang="ts" setup name="App">
import { reactive, toRaw, markRaw } from "vue";
import mockjs from "mockjs";

// Data
/* toRaw */
let person = reactive({
	name:'tony',
	age:18
})

// 用于获取一个响应式对象的原始对象
let person2= toRaw(person);
// console.log('原始数据',person2);
// console.log('响应式数据',person);


/* markRaw */
let car=markRaw({brand:'benz', price:100})
let car2= reactive(car);

let mockjs2 = markRaw(mockjs);

console.log(car);
console.log(car2);

console.log(mockjs2);



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
