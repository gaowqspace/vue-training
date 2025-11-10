import {createApp} from 'vue'
import App from './App.vue'
import Hello from "./Hello.vue";


// 创建应用
const app = createApp(App)

// 传递一个组件名字符串及其定义，将其注册为一个全局组件
app.component('Bye',Hello);

// element——元素，{}——配置对象
app.directive('beauty',(element,{value})=>{
    element.innerText +=value;
    element.style.color='green';
    element.style.backgroundColor= 'yellow';
})

// 挂载应用
app.mount('#app')

setTimeout(()=>{
    app.unmount()
},2000)