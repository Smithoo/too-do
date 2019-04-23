import Vue from 'vue';

// di plugin (TODO)

// filter plugins
import i18nFilterPlugin from './filters/i18n-filter';
import i18n from './../i18n';
import stringFilterPlugin from './filters/string-filter';
import numberFilterPlugin from './filters/number-filter';

export default {
    loadDependencyInjection() {
        // TODO
    },
    loadFilters() {
        Vue.use(i18nFilterPlugin, { i18n });
        Vue.use(stringFilterPlugin);
        Vue.use(numberFilterPlugin);
    },
};
