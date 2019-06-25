import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import router from '@/router/king';
import store from '@/store/king';
import api from '@/utils/api';

import 'normalize.css';
import '@/less/index.less';

// 注册路由
Vue.use(VueRouter);
// 将ajax请求方法赋给$ajax
Vue.prototype.$apiAxios = api;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
