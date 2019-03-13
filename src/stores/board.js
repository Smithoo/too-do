export default {
    namespaced: true,
    state: {
        columns: [],
    },
    getters: {
        cardsById: (state) => (id) => {
            const targetColumn = state.columns.find((column) => column.id === id);
            return targetColumn.cards;
        },
    },
    mutations: {
        setColumns(state, columns) {
            state.columns = columns;
        },
        setCards(state, payload) {
            const { id, cards } = payload;
            const targetColumn = state.columns.find((column) => column.id === id);
            targetColumn.cards = cards;
        },
    },
};
