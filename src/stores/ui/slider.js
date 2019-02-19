export default {
    namespaced: true,
    state() {
        return {
            isOpen: false,
        };
    },
    mutations: {
        open(state) {
            state.isOpen = true;
        },
        close(state) {
            state.isOpen = false;
        },
        toggle(state) {
            state.isOpen = !state.isOpen;
        },
    },
    actions: {
        open({ commit }) {
            commit('open');
        },
        close({ commit }) {
            commit('close');
        },
        toggle({ commit }) {
            commit('toggle');
        },
    },
};
