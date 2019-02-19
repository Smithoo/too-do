export default {
    namespaced: true,
    state: {
        show: false,
        component: null,
        data: null,
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
