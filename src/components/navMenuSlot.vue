<template>
    <div class="navMenu">

        <template v-for="navMenu in listData">
            <!-- 最后一级菜单 -->
            <el-menu-item v-if="!navMenu.childNode&&navMenu.linkTo"
                          :key="navMenu.id" :index="navMenu.name" :route="navMenu.linkTo"
            >
                <i :class="navMenu.icon"></i>
                <span slot="title">{{navMenu.name}}</span>
            </el-menu-item>

            <!-- 此菜单下还有子菜单 -->
            <el-submenu v-if="navMenu.childNode&&!navMenu.linkTo"
                        :key="navMenu.id" :index="navMenu.name">
                <template slot="title">
                    <i :class="navMenu.icon"></i>
                    <span> {{navMenu.name}}</span>
                </template>
                <!-- 递归 -->
                <NavMenu :listData="navMenu.childNode"></NavMenu>
            </el-submenu>
        </template>

    </div>
</template>

<script>
    export default {
        name: 'NavMenu',
        props: ['listData'],
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

</style>