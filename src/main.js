import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './stores';
import filters from './filters';

Vue.config.productionTip = false;

class TooDo {
    async bootstrap() {
        await this.loadStaticResources();
        this.addVueFilters();
        this.initView();
    }

    loadStaticResources() {
        const style = import(/* webpackChunkName: "style" */ './loaders/style-loader');

        return Promise.all([style]);
    }

    addVueFilters() {
        const filterEntry = Object.entries(filters);

        filterEntry.forEach(([filterName, filter]) => {
            Vue.filter(filterName, filter);
        });
    }

    initView() {
        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app');
    }
}

new TooDo().bootstrap();