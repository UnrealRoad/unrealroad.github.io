<template>

    <div>
        <el-row>
            <el-col :span="16" :offset="4">
                <el-form :model="formData" label-width="100px">
                    <el-form-item label="标题">
                        <el-input v-model="formData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="分类">
                        <el-input v-model="formData.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <mavon-editor  codeStyle="dark" v-model="content" style="min-height: 666px" @change="getContent"/>
                    </el-form-item>
                    <el-button @click="store">保存</el-button>
                </el-form>
            </el-col>
        </el-row>

    </div>
</template>

<script>

    import { Api } from "@/api/blog";

    export default {
    name: 'index',

    data() {
      return {

          content:'',
          formData:{
              title:'',
              content:'',
              desc:''
          }
      };
    },
    mounted(){

    },
    created() {

    },
    methods: {
        getContent(m,h){
            this.formData.content = h;
        },
        store(){
             Api.store(this.formData).then(res   => {
                this.$message.success('保存成功')
            })
        },
    },

    watch:{

    }
  };
</script>
