import tagFilter from './tag-filter';

export default {
    namespaced: true,
    state: {
        pipes: [],
    },
    getters: {
        pipe: (state) => (id) => {
            return state.pipes.find((pipe) => pipe.id === id) || [];
        },
        cards: (state) => (id) => {
            const targetPipe = state.pipes.find((pipe) => pipe.id === id);
            return targetPipe.cards;
        },
        tags(state) {
            const result = {};
            state.pipes.forEach((pipe) => {
                pipe.cards.forEach((card) => {
                    const tags = card.tags;
                    if (tags) {
                        tags.forEach((tag) => {
                            const label = tag.label;
                            if (result[label]) {
                                result[label].count = result[label].count + 1;
                            } else {
                                result[label] = {
                                    ...tag,
                                    count: 1,
                                };
                            }
                        });
                    }
                });
            });

            return result;
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
        setPipeMode(state, payload) {
            const { id, mode } = payload;
            const targetPipe = state.pipes.find((pipe) => pipe.id === id);
            targetPipe.mode = mode;
        },
    },
    modules: {
        tagFilter,
    },
};
