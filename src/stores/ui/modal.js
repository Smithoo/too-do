export default {
    namespaced: true,
    state: {
        show: false,
        component: null,
        data: null,
    },
    getters: {
        show(state) {
            return state.show;
        },
        component(state) {
            return state.component;
        },
    },
    mutations: {
        show(state, { component = null, data = null }) {
            state.data = data;
            state.component = component;
            state.show = true;
        },
        hide(state) {
            state.show = false;
            state.component = null;
            state.data = null;
        },
    },
    actions: {
        show({ commit }, payload) {
            commit('show', payload);
        },
        hide({ commit }) {
            commit('hide');
        },
    },
};
