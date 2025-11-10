<template>
    <div class="app">
		<h2>App组件</h2>
		<Bye />
		<Child />
	</div>
</template>

<script lang="ts" setup name="App">
import Child from "./Child.vue";


</script>

<style>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}
</style>
