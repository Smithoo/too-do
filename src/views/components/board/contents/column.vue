<template>
    <section class="column">
        <div class="column-wrap">
            <div class="column-head handle">
                <h3>{{ column.name }}</h3>
                <div class="card-count">
                    {{ column.cards.length }} cards
                </div>
            </div>
            <div class="column-body">
                <draggable
                    class="cards"
                    v-model="cards"
                    v-bind="dragOptions"
                    @start="dragging = true"
                    @end="dragging = false"
                >
                    <transition-group
                        tag="div"
                        type="transition"
                        :name="!dragging ? 'flip-list' : null"
                    >
                        <card v-for="card in column.cards"
                            :key="card.id"
                            :card="card">
                        </card>
                    </transition-group>
                </draggable>
            </div>
        </div>
    </section>
</template>

<script>
import Draggable from 'vuedraggable';
import Card from './card';

export default {
    components: {
        Draggable,
        Card,
    },
    props: {
        column: {
            required: true,
        },
    },
    data() {
        return {
            dragging: false,
        };
    },
    computed: {
        cards: {
            get() {
                return this.$store.getters['board/cardsById'](this.column.id);
            },
            set(cards) {
                const payload = {
                    id: this.column.id,
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
section.column {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    padding: 10px 10px 10px 12px;
    width: 240px;
    height: 100%;
}
.column-wrap {
    position: relative;
    box-sizing: border-box;
    height: 100%;
}
.column-head {
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
.column-body {
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
.flip-list-move {
    transition: transform 0.5s;
}
.ghost-card {
    opacity: 0.5;
}
</style>
