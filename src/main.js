import { createApp } from 'vue'
import './style.css'
import routes from './routes/index'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from './App.vue'

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


createApp(App).use(router).mount('#app')
