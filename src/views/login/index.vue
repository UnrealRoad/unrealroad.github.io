<template>
    <el-card class="login-card">
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="login-form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>

    import service from '@/utils/request'
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    service.post('login',this.loginForm).then(res => {
                        if(res.code == 1000){
                            localStorage.setItem('toke',res.data.token);
                            let socket = new WebSocket('ws://127.0.0.1:9502',res.data.token);
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
    .login-form{
        width: 400px;
        margin: 0 auto;
    }
</style>
