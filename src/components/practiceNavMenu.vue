<template>
    <div>
        <el-row>
        <el-menu
                background-color="#F0F6F6"
                text-color="#3C3F41"
                active-text-color="black"
                :router="false"
        >
            <NavMenu :listData="listData"></NavMenu>
        </el-menu>
        </el-row>
        <el-row>
            <el-menu
                    background-color="#F0F6F6"
                    text-color="#3C3F41"
                    active-text-color="black"
                    :router="false"
                    mode="horizontal"
            >
                <NavMenu :listData="listData"></NavMenu>
            </el-menu>
        </el-row>
        <el-row>
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="3" disabled>消息中心</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </el-row>
    </div>

</template>

<script>
    import NavMenu from './navMenuSlot.vue'

    export default {
        components: {
            NavMenu: NavMenu
        },
        created(){
        },
        data() {
            return {
                menuData: [
                    {    //一级
                        "entity": {
                            "id": 1,
                            "name": "systemManage",
                            "icon": "el-icon-message\r\n",
                            "alias": "两级菜单",
                        },
                        //二级
                        "childs": [
                            {
                                "entity": {
                                    "id": 3,
                                    "name": "authManage",
                                    "icon": "el-icon-loading",
                                    "alias": "权限管理",
                                    "value": {path: '/hello'},
                                },

                            },
                            {
                                "entity": {
                                    "id": 4,
                                    "name": "roleManage",
                                    "icon": "el-icon-bell",
                                    "alias": "角色管理",
                                    "value": "/system/role",
                                },

                            },
                            {
                                "entity": {
                                    "id": 2,
                                    "name": "menuManage",
                                    "icon": "el-icon-edit",
                                    "alias": "菜单管理",
                                    "value": "/system/menu",
                                },

                            },
                            {
                                "entity": {
                                    "id": 5,
                                    "name": "groupManage",
                                    "icon": "el-icon-mobile-phone\r\n",
                                    "alias": "分组管理",
                                    "value": "/system/group",
                                },

                            }
                        ]
                    },
                    {
                        //一级
                        "entity": {
                            "id": 6,
                            "name": "userManage",
                            "icon": "el-icon-news",
                            "alias": "三级菜单",
                        },
                        //二级
                        "childs": [
                            {
                                "entity": {
                                    "id": 7,
                                    "name": "accountManage",
                                    "icon": "el-icon-phone-outline\r\n",
                                    "alias": "帐号管理",
                                    "value": "",
                                },
                                //三级
                                "childs": [
                                    {
                                        "entity": {
                                            "id": 14,
                                            "name": "emailManage",
                                            "icon": "el-icon-sold-out\r\n",
                                            "alias": "邮箱管理",
                                            "value": "/content/email",
                                        },
                                    },
                                    {
                                        "entity": {
                                            "id": 13,
                                            "name": "passManage",
                                            "icon": "el-icon-service\r\n",
                                            "alias": "密码管理",
                                            "value": "/content/pass",

                                        }

                                    }
                                ]
                            },
                            {
                                "entity": {
                                    "id": 8,
                                    "name": "integralManage",
                                    "icon": "el-icon-picture",
                                    "alias": "积分管理",

                                    "value": "/user/integral",


                                },

                            }
                        ]
                    },
                    {
                        //一级
                        "entity": {
                            "id": 40,

                            "name": "contentManage",
                            "icon": "el-icon-rank",
                            "alias": "四级菜单",

                        },
                        //二级
                        "childs": [
                            {
                                "entity": {
                                    "id": 41,
                                    "name": "classifyManage2",
                                    "icon": "el-icon-printer",
                                    "alias": "分类管理",
                                },
                                //三级
                                "childs": [
                                    {
                                        "entity": {
                                            "id": 42,
                                            "name": "classifyManage3",
                                            "icon": "el-icon-printer",
                                            "alias": "分类管理",
                                        },
                                        //四级
                                        "childs": [
                                            {
                                                "entity": {
                                                    "id": 43,
                                                    "name": "classifyManage4",
                                                    "icon": "el-icon-printer",
                                                    "alias": "分类管理",
                                                    "value": "/content/classify",
                                                },

                                            }
                                        ]

                                    }
                                ]

                            }
                        ]
                    }
                ],
                listData:[
                    {
                        id: 0,
                        name: "首页",
                        linkTo:"home",
                        icon:"el-icon-location-outline"
                    },
                    {
                        id: 1121,
                        name: "1121练习",
                        icon:"el-icon-more",
                        childNode: [
                            {
                                id: "1121-1",
                                linkTo: "/practiceButton",
                                name: "练习按钮",
                                icon:"el-icon-document",
                                childNode:[
                                    {id: "1121-1-1", linkTo: "/practiceLayout", name: "练习布局",icon:"el-icon-document"},
                                ]
                            },
                            {id: "1121-2", linkTo: "/practiceLayout", name: "练习布局",icon:"el-icon-document"},
                            {id: "1121-3", linkTo: "/praticeContainer", name: "练习模板",icon:"el-icon-document"}
                        ]
                    },
                    {
                        id: 1123,
                        name: "1123练习",
                        icon:"el-icon-more",
                        childNode: [
                            {id: "1123-1", linkTo: "/practiceRadio", name: "练习单选",icon:"el-icon-document"},
                            {id: "1123-2", linkTo: "/practiceNavMenu", name: "练习navMenu",icon:"el-icon-document"},
                        ]
                    }
                ]
            }
        },


    }
</script>