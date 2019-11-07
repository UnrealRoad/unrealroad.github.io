<template>
    <div id="app" style="overflow: hidden">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        overflow-x: hidden;
    }

    html {
        overflow-x: hidden;
    }

    body {
        margin: 0;
        overflow-x: hidden;
    }

    /*滚动条样式*/
    ::-webkit-scrollbar { /*滚动条整体样式*/
        width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
    }

    ::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-track { /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: rgba(0, 0, 0, 0.1);
    }
</style>
