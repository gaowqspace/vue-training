<template>
	<div class="child">
		<h2>Child组件</h2>
        <h3>当前求和为：{{ sum }}</h3>
		<h4 v-beauty="sum" >今天周一</h4>
		<Bye />
	</div>
</template>

<script lang="ts" setup name="Child">
import { ref } from "vue";

let sum = ref(0);

</script>

<style>
.child{
    background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}
</style>
