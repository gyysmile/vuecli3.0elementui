let listData = [
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
            {id: "1121-1", linkTo: "/practiceButton", name: "练习按钮",icon:"el-icon-document"},
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
];

export default listData