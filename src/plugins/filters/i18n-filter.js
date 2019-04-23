let i18n = null;

export const filters = {
    tr(key, values) {
        return i18n.t(key, values);
    },
};

export default {
    install(Vue, options) {
        i18n = options.i18n;
        Vue.filter(filters);
    },
};
