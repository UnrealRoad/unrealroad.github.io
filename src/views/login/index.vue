<template>
    <el-row class="app-margin-auto">
        <el-col :xl="{span:5,offset:10}" :sm="{span:8,offset:8}" :xs="{span:20,offset:2}" :md="{span:6,offset:9}">
            <el-card class="login-card">
                <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="80px" class="login-form">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="loginForm.username" class="input-width-100"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginForm.password" autocomplete="off" class="input-width-100"></el-input>
                    </el-form-item>

                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>

    import service from '@/utils/request'
    import { mapMutations } from 'vuex'
  export default {
    name: 'index',
    data() {
      return {
          loginForm: {
              username: 'sonwen',
              password: '123456',
          },
          rules: {
              password: [
                  { required:true,message:'请输入密码', trigger: 'blur' }
              ],
              username: [
                  { required:true,message:'请输入用户名', trigger: 'blur' }
              ]
          }
      };
    },
    mounted(){

    },
    created() {

    },
    methods: {
        ...mapMutations([
            'setLoginState',//改变登录状态
        ]),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    service.post('login',this.loginForm).then(res => {
                        if(res.code == 1000){
                            localStorage.setItem('token',res.data.token);
                            this.setLoginState()//更改登录状态
                            this.$router.push({path:'/home'})
                            //let socket = new WebSocket('ws://127.0.0.1:9502',res.data.token);
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },

    watch:{

    }
  };
</script>

<style>
    .login-card{
       margin-top: 200px;
    }
</style>
