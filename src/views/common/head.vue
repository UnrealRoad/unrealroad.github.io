<template>
    <div>
        <el-container>
            <el-header class="app-padding-0">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        router>
                    <el-submenu index="2" v-if="this.getLoginState">
                        <template slot="title">个人中心</template>
                        <el-menu-item index="/admin">我是管理员</el-menu-item>
                        <el-menu-item @click="layout">退出</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/login" v-else>登录</el-menu-item>
                    <el-menu-item index="/home">首页</el-menu-item>

                </el-menu>
            </el-header>
            <el-main class="app-content app-padding-0" style="padding-top: 20px">
                <router-view ></router-view>
            </el-main>
            <el-footer class="app-padding-0 app-footer">Footer</el-footer>
        </el-container>

        <div style="width: 50%;margin: 0 auto">


        </div>
    </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapGetters([
                'getLoginState'
            ])
        },
        data() {
            return {
                activeIndex: '/home',
            };
        },
        methods: {
            ...mapMutations([
                'setLoginState'
            ]),
            layout(){
                localStorage.removeItem('token')//清除token
                this.setLoginState()//改变登录状态
            }
        },
        created() {
            this.activeIndex = this.$route.path
        }
    }
</script>
<style scoped>
    .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu{
        float: right;
    }
    .app-content{
        min-height: calc(85vh);
    }
    .app-padding-0{
        padding: 0;
        min-width:calc(100%);
    }
    .app-footer{

    }
</style>
