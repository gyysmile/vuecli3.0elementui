<template>
    <div>
        <h3>el-row</h3>
        <el-row :gutter="10">
            <el-col :xs="6" :sm="2" :md="6" :lg="11" :xl="1">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="6" :sm="10" :md="6" :lg="1" :xl="11">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="6" :sm="10" :md="6" :lg="1" :xl="11">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="6" :sm="2" :md="6" :lg="11" :xl="1">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="12"><div class="grid-content bg-purple"></div></el-col>
            <el-col :xs="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "practiceLayout"
    }
</script>

<style>
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>