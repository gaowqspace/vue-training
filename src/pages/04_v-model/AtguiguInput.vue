<template>
    <input type="text" v-bind:value="ming" v-on:input="emit('update:ming', ($event.target as HTMLInputElement).value)">
    <br>
    <input type="text" v-bind:value="mima" v-on:input="emit('update:mima', ($event.target as HTMLInputElement).value)">
</template>

<script lang="ts" setup name="AtguiguInput">
defineProps(['ming', 'mima'])
const emit = defineEmits(['update:ming', 'update:mima']);

</script>

<style>
input {
    border: 2px solid black;
    font-size: 20px;
    height: 30px;
    background-image: linear-gradient(45deg, red, yellow, green);
    color: white;
    margin-top: 5px;
}
</style>