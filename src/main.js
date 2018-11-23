import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
import './css/index.css';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
