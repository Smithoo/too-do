export default {
    namespaced: true,
    state: {
        tags: [],
    },
    mutations: {
        push(state, targetTag) {
            state.tags.push(targetTag);
        },
        remove(state, targetTag) {
            state.tags = state.tags.filter((tag) => tag.label !== targetTag.label);
        },
        removeAll(state) {
            state.tags = [];
        },
    },
    actions: {
        toggleFilterTag({ commit, state }, targetTag) {
            const isExist = state.tags.some((tag) => tag.label === targetTag.label);
            if (isExist) {
                commit('remove', targetTag);
            } else {
                commit('push', targetTag);
            }
        },
    },
};
