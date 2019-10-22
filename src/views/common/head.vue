<template>
    <div>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true">
            <el-menu-item index="login" >登录</el-menu-item>
            <el-menu-item index="home">首页</el-menu-item>

        </el-menu>
        <div style="width: 50%;margin: 0 auto">
            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: 'home',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                //this.$router.push({path:this.activeIndex})
            }
        }
    }
</script>
<style scoped>
    .el-menu--horizontal>.el-menu-item{
        float: right;
    }
</style>
