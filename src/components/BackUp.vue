<template>
    <div class="back-button el-icon-caret-top" @click="toTop" v-if="isShow"> </div>

</template>

<script>
  export default {
    name: 'index',

    data() {
      return {
            top:0,
          isShow:false
      };
    },
      methods: {
            toTop(){
                window.scrollTo(0,0)
            },
          getScrollTop(){
              let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
              if(document.body){
                  bodyScrollTop = document.body.scrollTop;
              }
              if(document.documentElement){
                  documentScrollTop = document.documentElement.scrollTop;
              }
              scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
              this.top =  scrollTop;
          },
      },
      created(){
      },
      mounted() {
          window.addEventListener('scroll',this.getScrollTop,false)
      },
      destroyed: function () {
          window.removeEventListener('scroll',this.getScrollTop,false)
      },

    watch:{
        top:function(val){
            if(val > 200){
                this.isShow = true
            }else{
                this.isShow = false

            }
        }
    }
  };
</script>
<style scoped>
    .back-button{
        width: 40px;
        height:40px;
        background-color: #fff;
        position: fixed;
        bottom:100px;
        right: 40px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #409eff;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        font-size: 30px;
    }
    .back-button:hover{
        background-color: aliceblue;
    }
</style>
