<template>
    <div class="talk">
        <button @click="getLoveTalk">分享工作经验</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import {reactive} from 'vue';
import { useLoveTalkStore } from '@/store/loveTalk';
import { storeToRefs } from "pinia";

const loveTalkStore = useLoveTalkStore();
// console.log('sss',loveTalkStore);

let {talkList}=storeToRefs(loveTalkStore);


// 数据
// 第一种写法：不使用Pinia
/* let talkList= reactive([
    {id:'t01',title:'多喝热水，少熬夜'},
    {id:'t02',title:'代码要写得优雅'},
    {id:'t03',title:'保持学习的习惯'},
]) */

// 第二种写法：使用Pinia
// let talkList= loveTalkStore.talkList;

// 方法
function getLoveTalk(){
    loveTalkStore.getATalk();
}

</script>

<style scoped>
.talk {
    background-color: orange;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
}
</style>