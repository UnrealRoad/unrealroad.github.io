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
            {
                path: '*',
                component: () => import('@/views/home/index'),
            },
        ]
    },
]
//这里重写push方法 详细问题: https://github.com/vuejs/vue-router/issues/2881
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
    routes,
})

