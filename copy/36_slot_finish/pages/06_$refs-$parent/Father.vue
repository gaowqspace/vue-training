<template>
	<div class="father">
		<h3>父组件</h3>
		<h4>房产：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的电脑</button>
		<button @click="getAllChild($refs)">让所有孩子组件的书籍增加</button>
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref, reactive } from "vue";

// 数据
let house = ref(4);
let c1 = ref();
let c2 = ref();

// 方法
function changeToy(){
	// console.log(c1.value);
	c1.value.toy='Robot';
}

function changeComputer(){
	// console.log(c2.value);
	c2.value.computer='MacBook';
}

// 理解方式
// refs的确是一个对象，这个对象里面有一个key，能够确定的是key是一个字符串，里面可以存任何东西: any
/* function getAllChild(refs:{[key:string]:any}){
	for(let key in refs){
		refs[key].book+=3;
	}
} */

// 简单写法：
function getAllChild(refs:any){
	console.log(refs);
	
	for(let key in refs){
		refs[key].book+=3;
	}
}

// 把数据交给外部子组件,define 是宏函数
defineExpose({house})

</script>

<style scoped>
.father {
	background-color: rgb(165, 164, 164);
	padding: 20px;
	border-radius: 10px;
}

.father button {
	margin-bottom: 10px;
	margin-left: 10px;
}
</style>