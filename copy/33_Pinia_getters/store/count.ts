import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {

    // actions 用来定义修改state的方法，里面放着各种动作函数
    actions: {
        increment(value: number) {
            console.log('increment被调用了', value);
            // 修改数据，this是当前的store实例对象
            if (this.sum < 10) {
                this.sum += value;
            }
        }
    },

    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: 'ffhc',
            address: 'kejiRoad'
        }
    },

    getters:{

        // 第一种写法：使用this
       /*  bigSum():number{
            return this.sum*10;
        },
        upperSchool():string{
            console.log('zheshi this',this);
            
            return this.school.toUpperCase();
        }, */

        // 第二种写法：不用this，写为箭头函数

        bigSum:state=>state.sum*10,

        upperSchool:state=> state.school.toUpperCase()
    }
})