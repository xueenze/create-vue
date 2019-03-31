import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router';
import store from './store';
import api from '@/utils/api';

import 'normalize.css';
import './less/index.less';

// 注册路由
Vue.use(VueRouter);
// 将ajax请求方法赋给$ajax
Vue.prototype.$apiAxios = api;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
