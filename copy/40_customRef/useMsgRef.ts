import { customRef } from "vue";

export default function myRef (initValue:string,delay:number) {
    // 2. 使用vue提供的customRef定义响应式数据
    let timer: number;

    let msg = customRef((track, trigger) => {
        return {
            // get()何时调用？——msg被读取时
            get() {
                track();   //告诉vue数据msg很重要，要对msg持续关注，一旦变化就更新
                return initValue
            },
            // set()何时调用？——msg被修改时
            set(value) {
                clearTimeout(timer);      // 数据防抖
                timer = setTimeout(() => {
                    initValue = value;
                    trigger();  //通知vue数据msg变化了
                }, delay)
            }
        }
    })

    return {msg}
}