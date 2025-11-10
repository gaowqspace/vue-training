<template>
	<div class="child">
		<h2>Child组件</h2>
        <h3>当前求和为：{{ sum }}</h3>
	</div>
</template>

<script lang="ts" setup name="Child">
import { ref } from "vue";
import axios from "axios";

let sum = ref(0);

let poet = await axios.get('https://v2.jinrishici.com/one.json')
console.log(poet);


</script>

<style>
.child{
    background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}
</style>
