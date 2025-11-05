import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('loveTalk', {
    state() {
        return {
            talkList: [
                { id: 't01', title: '多喝热水，少熬夜' },
                { id: 't02', title: '代码要写得优雅' },
                { id: 't03', title: '保持学习的习惯' },
            ]
        }
    }
})