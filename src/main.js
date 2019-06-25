import Vue from 'vue';
import App from './App';
import router from './router';
import store from '@/store/index';
import api from '@/utils/api';

import 'normalize.css';
import '@/less/index.less';

Vue.config.productionTip = false;
// 将ajax请求方法赋给$ajax
Vue.prototype.$apiAxios = api;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App, },
    template: '<App/>',
});
