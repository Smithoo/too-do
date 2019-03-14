export default {
    namespaced: true,
    state: {
        pipes: [],
    },
    getters: {
        cardsById: (state) => (id) => {
            const targetPipe = state.pipes.find((pipe) => pipe.id === id);
            return targetPipe.cards;
        },
        pipeMetas(state) {
            return state.pipes.map((pipe) => ({ id: pipe.id, name: pipe.name }));
        },
    },
    mutations: {
        setPipes(state, pipes) {
            state.pipes = pipes;
        },
        setCards(state, payload) {
            const { id, cards } = payload;
            const targetPipe = state.pipes.find((pipe) => pipe.id === id);
            targetPipe.cards = cards;
        },
    },
};
