import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

import king from './modules/king';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        king,
    },
});

export default store;
