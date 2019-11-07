import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socket: null,
        isLogin: false,//记录登录状态
        isAdmin: false,
    },
    mutations: {
        //改变登录状态
        setLoginState: (state) => {
            state.isLogin = !state.isLogin
        },
        setUserState: (state, val) => {
            state.isAdmin = val
        }
    },
    actions: {
        setLoginState: (context) => {
            context.commit('setLoginState')
        },
        setUserState: (context, val) => {
            context.commit('setUserState', val)
        }
    },
    getters: {
        //获取登录状态
        getLoginState: state => state.isLogin && localStorage.getItem('token'), //防止不存在token时 isLogin 为 true  这里不管token是否正确 在请求某些接口时再获取token正确性 根据结果判断是否进入下一步
        getUserState: state => state.isAdmin
    }
})
