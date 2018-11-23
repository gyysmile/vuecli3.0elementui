<template>
    <div>
        <h3>el-radio</h3>

        <el-row>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-row>

        <el-row>
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </el-row>

        <el-row>
            <el-radio-group v-model="radio3" @change="changeRadio3()">
                <template v-for="(item,key) in city">
                    <el-radio-button :label="item" :key="key" :disabled="key===2"></el-radio-button>
                </template>
            </el-radio-group>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "practiceRadio",
        data() {
            return {
                radio: '1',
                radio1: '选中且禁用',
                radio3: '上海',
                city:["上海","北京","广州","深圳","郑州"]
            };
        },
        methods:{
            changeRadio3(){
                console.log(this.radio3)
            }
        }
    }
</script>

<style scoped>

</style>