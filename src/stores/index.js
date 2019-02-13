import Vue from 'vue';
import Vuex from 'vuex';

// store modules
import auth from './auth';
import board from './board';
import ui from './ui';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        auth,
        board,
        ui,
    },
});
