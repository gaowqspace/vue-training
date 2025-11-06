import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

// 第一种：store 的选项式写法
/* export const useLoveTalkStore = defineStore('loveTalk', {
    actions: {
        async getATalk() {
            // 发请求，下面这行的写法是连续解构赋值+重命名
            let { data: { data: { content: title } } } = await axios.get('https://v2.jinrishici.com/one.json')
            // console.log(result.data.data.content);

            // 把请求回来的字符串包装成一个对象
            let obj = { id: nanoid(), title };
            // console.log(obj);
            // 放在数组中
            this.talkList.unshift(obj);
        }
    },
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
}) */


// 第二种：store 的组合式写法
// 这种写法类似于一个setup() 函数
import { reactive } from "vue";

export const useLoveTalkStore = defineStore('loveTalk', () => {

    // 获取数据，talkList 相当于 state
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || []);

    // getATalk() 函数相当于action
    async function getATalk() {
        // 发请求，下面这行的写法是连续解构赋值+重命名
        let { data: { data: { content: title } } } = await axios.get('https://v2.jinrishici.com/one.json')
        // console.log(result.data.data.content);

        // 把请求回来的字符串包装成一个对象
        let obj = { id: nanoid(), title };
        // console.log(obj);
        // 放在数组中
        talkList.unshift(obj);
    }

    return {talkList, getATalk}
})