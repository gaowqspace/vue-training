// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router';

// 引入可能需要呈现的组件
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import News from '@/pages/News.vue';

// 第二步：创建路由器router
const router = createRouter({
    history: createWebHistory(),  // 路由器的工作模式
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: About
        },
    ]
})

// 把路由器暴露出去
export default router;