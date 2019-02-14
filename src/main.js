import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './stores';
import filters from './filters';
import api from './api';

class TooDo {
    async bootstrap() {
        await this.loadStaticResources();
        this.addVueFilters();
        this.initVue();
    }

    loadStaticResources() {
        const style = import(/* webpackChunkName: "style" */ './assets/loaders/style-loader');

        return Promise.all([style]);
    }

    addVueFilters() {
        const filterEntry = Object.entries(filters);

        filterEntry.forEach(([filterName, filter]) => {
            Vue.filter(filterName, filter);
        });
    }

    initVue() {
        Vue.config.productionTip = false;

        Vue.prototype.$api = api;

        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    }
}

new TooDo().bootstrap();
