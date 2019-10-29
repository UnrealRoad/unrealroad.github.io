import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      socket:null,
      isLogin:false,//记录登录状态
  },
  mutations: {
      //改变登录状态
        setLoginState:(state) => {
            state.isLogin = !state.isLogin
        }
  },
  actions: {
        setLoginState:(context) => {
            context.commit('setLoginState')
        }
  },
  getters:{
      //获取登录状态
      getLoginState:state => state.isLogin && localStorage.getItem('token') //防止不存在token时 isLogin 为 true  这里不管token是否正确 在请求某些接口时再获取token正确性 根据结果判断是否进入下一步
  }
})
