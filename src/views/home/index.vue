<template>
    <div style="overflow-x:hidden">

        <el-row style="margin-top: 20px">
            <el-col :span="8" :offset="8">
                <div class="infinite-list-wrapper">
                    <ul class="infinite-list">
                        <li v-for="item in blog" class="infinite-list-item" :key="item.id" @click="openDrawer(item)">{{
                            item.title }}
                        </li>
                    </ul>
                    <p v-if="loading" class="text-center">加载中...</p>
                    <p v-if="noMore" class="text-center">没有更多了</p>
                </div>
            </el-col>
        </el-row>
        <back-up></back-up>

        <el-drawer
                :visible.sync="drawer"
                direction="ltr"
                :before-close="handleClose"
                size="90%">
            <template slot="title">
                <div class="text-center">{{item.title}}</div>
            </template>
            <el-row>
                <el-col :span="16" :offset="4">
                    <mavon-editor :toolbarsFlag="false" :subfield="false" :shortCut="false" :editable="false"
                                  defaultOpen="preview" codeStyle="dark" v-model="item.content"
                                  style="min-height: 666px"/>
                </el-col>
            </el-row>
        </el-drawer>
    </div>
</template>
<script>
    import {Api} from "@/api/blog";
    import BackUp from "@/components/BackUp"

    export default {
        components: {
            BackUp
        },
        data() {
            return {
                loading: true,
                blog: [],
                noMore: false,
                drawer: false,
                item: {}
            }
        },
        methods: {
            openDrawer(blog) {

                this.item = blog
                this.drawer = true
                document.body.style.overflowY = 'hidden';
                document.documentElement.style.overflowY = 'hidden'


            },
            handleClose() {
                this.drawer = false
                document.body.style.overflowY = 'auto';
                document.documentElement.style.overflowY = 'auto'
                this.item = {}
            },
            list() {
                Api.list().then(res => {
                    this.loading = false
                    this.blog = this.blog.concat(res.data);
                    if (res.current_page >= res.last_page) {
                        this.noMore = true
                    }
                })
            },
            getScrollPosition: function () {

                if (this.getScrollTop() + this.getWindowHeight() + 100 > this.getScrollHeight() && !this.noMore) {
                    this.loading = true
                    if (this.loading) {
                        Api.query.page += 1
                        this.list()
                    }
                }
            },
            getScrollTop() {
                let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
                if (document.body) {
                    bodyScrollTop = document.body.scrollTop;
                }
                if (document.documentElement) {
                    documentScrollTop = document.documentElement.scrollTop;
                }
                scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
                return scrollTop;
            },
            getWindowHeight() {
                let windowHeight = 0;
                if (document.compatMode == "CSS1Compat") {
                    windowHeight = document.documentElement.clientHeight;
                } else {
                    windowHeight = document.body.clientHeight;
                }
                return windowHeight;
            },
            getScrollHeight() {
                let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
                if (document.body) {
                    bodyScrollHeight = document.body.scrollHeight;
                }
                if (document.documentElement) {
                    documentScrollHeight = document.documentElement.scrollHeight;
                }
                scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
                return scrollHeight;
            }
        },
        created() {
            this.list()
        },
        mounted() {
            window.addEventListener('scroll', this.getScrollPosition, false)
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.getScrollPosition, false)
        }
    }
</script>
<style scoped>
    .text-center {
        text-align: center;
    }

    .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        height: 100px;
        background: #e8f3fe;
        margin: 10px;
        color: #7dbcfc;
        word-break: break-all;
        cursor: pointer;
    }

    .infinite-list {
        padding: 0;
        margin: 0;
        list-style: none;
    }
</style>
