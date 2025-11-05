// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router';

// 引入可能需要呈现的组件
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';
import Detail from '@/pages/Detail.vue';

// 第二步：创建路由器router
const router = createRouter({
    history: createWebHistory(),  // 路由器的工作模式
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail',
                    component: Detail,

                    // 第一种写法：将路由收到的所有params参数作为props传递给路由组件
                    // props:true,

                    // 第二种写法：函数写法。可以自己决定将什么作为props传递给路由组件，最适用于query参数
                    props(route) {
                        return route.query;
                    }

                    // 第三种写法：对象写法。可以自己决定将什么作为props传递给路由组件
                    /* props:{
                        a:'yi',
                        b:'gong',
                        c:'yuan',
                    } */
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path:'/',
            redirect:'/home',
        }
    ]
})

// 把路由器暴露出去
export default router;