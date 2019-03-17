<template>
    <section class="pipe-column">
        <div class="pipe-wrap">
            <div class="pipe-head handle">
                <h3>{{ pipe.name }}</h3>
                <div class="card-count">
                    {{ pipe.cards.length }} cards
                </div>
            </div>
            <div class="pipe-body">
                <draggable
                    class="cards"
                    v-model="cards"
                    v-bind="dragOptions"
                >
                    <card v-for="card in pipe.cards"
                        :key="card.id"
                        :card="card">
                    </card>
                </draggable>
            </div>
        </div>
    </section>
</template>

<script>
import Draggable from 'vuedraggable';
import Card from './../card';

export default {
    components: {
        Draggable,
        Card,
    },
    props: {
        pipe: {
            required: true,
        },
    },
    computed: {
        cards: {
            get() {
                return this.$store.getters['board/cards'](this.pipe.id);
            },
            set(cards) {
                const payload = {
                    id: this.pipe.id,
                    cards,
                };
                this.$store.commit('board/setCards', payload);
            },
        },
        dragOptions() {
            return {
                animation: 200,
                group: 'cards',
                ghostClass: 'ghost-card',
                disabled: false,
            };
        },
    },
};
</script>

<style scoped>
section.pipe-column {
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 250px;
    height: 100%;
    margin-right: 35px;
}
.pipe-wrap {
    position: relative;
    box-sizing: border-box;
    height: 100%;
}
.pipe-head {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 6px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    z-index: 10;
}
h3 {
    color: #333333;
    font-size: 24px;
    letter-spacing: 2px;
    padding-bottom: 6px;
}
.card-count {
    color: #666666;
    font-size: 12px;
    padding-left: 3px;
    padding-bottom: 20px;
}
.pipe-body {
    position: relative;
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
}
.cards {
    height: 100%;
    overflow-y: scroll;
    padding-right: 8px;
}
.cards::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
.cards::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(10, 10, 10, .15);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
.ghost-card {
    opacity: 0.5;
}
</style>
