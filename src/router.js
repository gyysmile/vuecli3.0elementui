import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('./components/index.vue')), 'index');//首页
//1121
const practiceButton = r => require.ensure([], () => r(require('./components/practiceButton.vue')), 'practiceButton');//练习按钮
const practiceLayout = r => require.ensure([], () => r(require('./components/practiceLayout.vue')), 'practiceLayout');//练习布局
const praticeContainer = r => require.ensure([], () => r(require('./components/praticeContainer.vue')), 'praticeContainer');//练习布局
//1123
const practiceRadio = r => require.ensure([], () => r(require('./components/practiceRadio.vue')), 'practiceRadio');//练习单选
const practiceNavMenu = r => require.ensure([], () => r(require('./components/practiceNavMenu.vue')), 'practiceNavMenu');//练习navMenu
//1126
const practiceIpt = r => require.ensure([], () => r(require('./components/practiceIpt.vue')), 'practiceIpt');//练习单选
const practiceIptNum = r => require.ensure([], () => r(require('./components/practiceIptNum.vue')), 'practiceIptNum');//练习navMenu

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/home'}, // 默认路由
        {path: "/home", component: home},
        //1121
        {path: "/practiceButton", component: practiceButton, name: "按钮"},
        {path: "/practiceLayout", component: practiceLayout, name: "布局Layout"},
        {path: "/praticeContainer", component: praticeContainer, name: "布局容器"},
        //1123
        {path: "/practiceRadio", component: practiceRadio, name: "单选"},
        {path: "/practiceNavMenu", component: practiceNavMenu, name: "navMenu"},
        //1126
        {path: "/practiceIpt", component: practiceIpt, name: "输入框"},
        {path: "/practiceIptNum", component: practiceIptNum, name: "计数器"},
    ]
})
