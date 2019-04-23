export const filters = {
    capitalize(value) {
        if (!value) {
            return '';
        }

        const str = value.toString();
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
};

export default {
    install(Vue) {
        Vue.filter(filters);
    },
};
