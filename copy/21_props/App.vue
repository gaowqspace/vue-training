<template>
    <!-- 看懂下面代码 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x">测试</h2> -->
    <Person a="hello" v-bind:list="personList"/>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue';

    import {reactive} from 'vue';
    import {type Persons} from '@/types';

    let x =9;

    let personList= reactive<Persons>([
        {id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:70},
        {id:'003',name:'王五',age:35},
    ])
    console.log(personList);
    
</script>
