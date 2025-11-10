<template>
	<div class="app">
		<h2>当前sum1为：{{ sum1 }}</h2>
		<h2>当前sum2为：{{ sum2 }}</h2>
		<h2>当前汽车为：{{ car2 }}</h2>
		<button @click="changeSum1">点我sum1+1</button>
		<button @click="changeSum2">点我sum2+1</button>

		<button @click="changeBrand2">修改品牌(car2)</button>
		<button @click="changeColor2">修改颜色(car2)</button>
		<button @click="changePrice2">修改价格(car2)</button>
	</div>
</template>

<script lang="ts" setup name="App">
import { ref, reactive, readonly, shallowReadonly } from "vue";

// Data
let sum1 = ref(0);

// 会维护关联关系，当sum1改变时，sum2也跟着变化
let sum2= readonly(sum1);

// 修饰 reactive
let car1 = reactive({
	brand:'benz',
	option:{
		color:'red',
		price:100
	}
})

let  car2 = shallowReadonly(car1);

// Methods
function changeSum1(){
	sum1.value+=1;
}
function changeSum2(){
	sum2.value+=1;   //sum2是不能修改的
}

function changeBrand2 (){
	car2.brand='BMW'
}
function changeColor2 (){
	car2.option.color='blue'
}
function changePrice2 (){
	car2.option.price+=10
}

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
