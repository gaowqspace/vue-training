<template>
	<div class="outer">
		<h2>我是中交一公院</h2>
		<img src="/img/imageTest.jpg">
		<br>
		<Modal />
	</div>
</template>

<script lang="ts" setup name="App">
import Modal from "./Modal.vue";


</script>

<style>
.outer{
	background-color: #ddd;
	border-radius: 10px;
	padding: 5px;
	box-shadow: 0 0 10px;
	width: 400px;
	height: 400px;
	filter: saturate(200%);
}
img{
	width: 180px;
}
</style>
