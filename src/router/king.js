import Vue from 'vue';
import VueRouter from 'vue-router';
import king from './king/index';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        ...king,
    ],
});

export default router;
