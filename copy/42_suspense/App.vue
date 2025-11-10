<template>
	<div class="app">
		<h2>App组件</h2>
		<Suspense>
			<template v-slot:default>
				<Child />
			</template>
			<template v-slot:fallback>
				<h3>Loading</h3>
			</template>
		</Suspense>

	</div>
</template>

<script lang="ts" setup name="App">
import { Suspense } from "vue";
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
