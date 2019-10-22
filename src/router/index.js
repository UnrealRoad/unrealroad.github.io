import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import HEAD from '@/views/common/head'
const routes = [
    {
        path: '/',
        component: HEAD,
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index'),
            },
            {
                path: 'login',
                component: () => import('@/views/login/index'),
            },
        ]
    },
]

export default new Router({
    routes,
})

