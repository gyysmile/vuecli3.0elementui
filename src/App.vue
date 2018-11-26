<template>
    <div id="app">
        <el-container style="height: 100%">
            <el-aside width="200px" style="background-color:#272D34">
                <p style="width:100%;height: 60px;line-height:60px;text-align: center;color: #fff;">VuePractice</p>
                <el-menu
                            :default-active="this.$router.path"
                            class="el-menu-vertical-demo"
                            router
                            active-text-color='#29A88D'
                            background-color="#272D34"
                            text-color="#fff"
                            :collapse-transition="true"
                            @open="handleOpen"
                            @close="handleClose"
                    >
                        <div v-for="(item,key) in navList" :key="key">
                            <!--存在子节点-->
                            <el-submenu v-if="!item.linkTo" :index="item.name" :show-timeout=5000 :hide-timeout=5000>
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span>{{item.name}}</span>
                                </template>
                                <el-menu-item :index="val.linkTo" v-for="val in item.childNode" :key="val.name">
                                    <template slot="title">
                                        <i :class="val.icon"></i>
                                        <span>{{val.name}}</span>
                                    </template>
                                </el-menu-item>
                            </el-submenu>
                            <!--不存在子节点-->
                            <el-menu-item v-else :index="item.linkTo">
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span>{{item.name}}</span>
                                </template>
                            </el-menu-item>
                        </div>
                    </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 14px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>
                <el-main>
                    <transition name="el-fade-in-linear"
                                mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
                <el-footer>
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item v-show="!$route.matched.name">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                            {{ item.name }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import listData from "./js/list.js"

    export default {
        name: 'app',
        data() {
            return {
                navList: listData
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(this.$route)
                //console.log("这里是handleOpen",key, keyPath);
                //600 39
                //360 16
            },
            handleClose(key, keyPath) {
                //console.log("这里是handleClose",key, keyPath);
            }
        },
        created() {
            console.log(this.$route.matched)
            // console.log(listData)
        },
        watch: {
            $route(to, from) {
             /*   console.log(to);
                console.log(to.path)
                console.log(to.name)
                console.log(from);*/
                // let query = {};

                //this.$router.replace({query: query});
            }
        }

    }
</script>
