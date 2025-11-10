<template>
    <div class="category">
        <slot name="s1">默认内容</slot>
        <slot name="s2">默认内容</slot>
    </div>
</template>

<script lang="ts" setup name="Category">

</script>

<style>
.category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
}
h2{
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
}
</style>