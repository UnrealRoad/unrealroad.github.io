<template>
   <div >
       <el-card :body-style="{ padding: '0px' }" class="article-card" shadow="hover">

           <div class="article-title">
               <span>好吃的汉堡</span>
               <div class="bottom clearfix">
                   <time class="time">{{ currentDate }}</time>
                   <el-button type="text" class="button">操作按钮</el-button>
               </div>
           </div>
           <img  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="article-image">
       </el-card>
   </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                currentDate: new Date()
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style scoped>
    .article-card:hover{
        cursor: pointer;
    }
    .article-card{
        width: 400px;
        height:200px;
        display: flex;
        display: -webkit-flex;
        align-items:center;
        justify-content:center;
    }
    .article-title{
        width: 200px;
        height:160px;
        float: left;
    }
    .article-image{
        float: right;
        width:180px;
    }
</style>
