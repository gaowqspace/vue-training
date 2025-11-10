<template>
	<button @click="isShow = true">展示弹窗</button>
	<teleport to="body">
		<div class="modal" v-show="isShow">
			<h2>弹窗标题</h2>
			<h2>弹窗内容</h2>
			<button @click="isShow = false">关闭弹窗</button>
		</div>
	</teleport>
</template>

<script lang="ts" setup name="Modal">
import { ref } from "vue";

let isShow = ref(false);
</script>

<style>
.modal {
	width: 200px;
	height: 180px;
	background-color: skyblue;
	border-radius: 10px;
	padding: 5px;
	box-shadow: 0 0 5px;
	text-align: center;
	position: fixed;
	left: 50%;
	margin-right: -100px;
	top: 20px;
}
</style>