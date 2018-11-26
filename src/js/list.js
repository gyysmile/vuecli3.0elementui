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
            {id: "1121-1", linkTo: "/practiceButton", name: "按钮",icon:"el-icon-document"},
            {id: "1121-2", linkTo: "/practiceLayout", name: "布局Layout",icon:"el-icon-document"},
            {id: "1121-3", linkTo: "/praticeContainer", name: "布局容器",icon:"el-icon-document"}
        ]
    },
    {
        id: 1123,
        name: "1123练习",
        icon:"el-icon-more",
        childNode: [
            {id: "1123-1", linkTo: "/practiceRadio", name: "单选",icon:"el-icon-document"},
            {id: "1123-2", linkTo: "/practiceNavMenu", name: "navMenu",icon:"el-icon-document"},
        ]
    },
    {
        id: 1126,
        name: "1126练习",
        icon:"el-icon-more",
        childNode: [
            {id: "1126-1", linkTo: "/practiceIpt", name: "输入框",icon:"el-icon-document"},
            {id: "1126-2", linkTo: "/practiceIptNum", name: "计数器",icon:"el-icon-document"},
        ]
    }
];

export default listData