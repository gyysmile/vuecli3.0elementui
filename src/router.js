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

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/home'}, // 默认路由
        {path: "/home", component: home},
        //1121
        {path: "/practiceButton", component: practiceButton, name: "练习按钮"},
        {path: "/practiceLayout", component: practiceLayout, name: "练习布局"},
        {path: "/praticeContainer", component: praticeContainer, name: "练习布局"},
        //1123
        {path: "/practiceRadio", component: practiceRadio, name: "练习单选"},
        {path: "/practiceNavMenu", component: practiceNavMenu, name: "练习navMenu"},

    ]
})
