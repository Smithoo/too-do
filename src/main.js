import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './stores';
import plugins from './plugins';
import api from './api';

class TooDo {
    async bootstrap() {
        await this.loadStaticResources();
        this.loadPlugins();
        this.initVue();
    }

    loadStaticResources() {
        const style = import(/* webpackChunkName: "style" */ './assets/loaders/style-loader');

        return Promise.all([style]);
    }

    loadPlugins() {
        plugins.loadDependencyInjection();
        plugins.loadFilters();
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
