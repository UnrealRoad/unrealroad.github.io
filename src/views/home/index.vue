<template>
   <div >

       <el-row style="margin-top: 20px" v-for="(item,index) in article" :key="index">
           <el-col :span="8" :offset="8">
               <el-card :body-style="{ padding: '0px' }" class="article-card" shadow="hover">

                   <div class="article-title">
                       <span>123</span>
                       <div class="bottom clearfix">
                           <time class="time">{{ currentDate }}</time>
                           <el-button type="text" class="button">123123123123</el-button>
                       </div>
                   </div>
                   <img  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="article-image">
               </el-card>
           </el-col>
       </el-row>
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
                currentDate: new Date(),
                article:[{},{},{}]
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

        height:200px;
        display: flex;
        display: -webkit-flex;
        align-items:center;
        justify-content:center;
    }
    .article-title{
        width: 400px;
        height:160px;
        float: left;
    }
    .article-image{
        float: right;
        width:160px;
    }
</style>
