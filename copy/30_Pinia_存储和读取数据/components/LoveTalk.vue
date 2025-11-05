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
import axios from "axios";
import { nanoid } from "nanoid";
import { useLoveTalkStore } from '@/store/loveTalk'

const loveTalkStore = useLoveTalkStore();
console.log('sss',loveTalkStore);


// 数据
// 第一种写法：不使用Pinia
/* let talkList= reactive([
    {id:'t01',title:'多喝热水，少熬夜'},
    {id:'t02',title:'代码要写得优雅'},
    {id:'t03',title:'保持学习的习惯'},
]) */

// 第二种写法：使用Pinia
let talkList= loveTalkStore.talkList;

// 方法
async function getLoveTalk(){
    // 发请求，下面这行的写法是连续解构赋值+重命名
    let {data:{data:{content:title}}} = await axios.get('https://v2.jinrishici.com/one.json')
    // console.log(result.data.data.content);

    // 把请求回来的字符串包装成一个对象
    let obj= {id:nanoid(), title};
    // console.log(obj);
    // 放在数组中
    talkList.unshift(obj);
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