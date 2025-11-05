import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useLoveTalkStore = defineStore('loveTalk', {
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
})