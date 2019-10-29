import Vue from 'vue'
import Router from 'vue-router'
import  store  from '@/store'
import axios from 'axios'
import {Api} from '@/api/user'
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
                path:'admin',
                component: () => import('@/views/admin/index')
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
const router =  new Router({
    routes,
})
let token = localStorage.getItem('token')
if(token && !store.state.isLogin){
    store.dispatch('setLoginState')
}
router.beforeEach((to, from, next) => {

    if(to.path == '/login' && store.state.isLogin){
        next({path:'/home'})
    }else{
        if(to.path == '/admin'){
            Api.getUserState().then(res => {
                next()
            })
        }
        next()
    }
})
export default router

