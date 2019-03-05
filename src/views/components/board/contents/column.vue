<template>
    <section class="colomn">
        <div class="colomn-wrap">
            <div class="colomn-head">
                <h3>{{ name }}</h3>
                <div class="card-count">
                    {{ cards.length }} cards
                </div>
            </div>
            <div class="colomn-body">
                <draggable class="cards"
                    v-model="cards"
                    :options="{ group: '.card' }">
                    <card v-for="card in cards"
                        :key="card.id"
                        :card="card">
                    </card>
                </draggable>
            </div>
        </div>
    </section>
</template>

<script>
import draggable from 'vuedraggable';
import Card from './card';

export default {
    components: {
        draggable,
        Card,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            cards: [],
        };
    },
    // computed: {
    //     cards: {
    //         get() {
    //             return this.$store.getters['data/' + this.name + '/cards'];
    //         },
    //         set(value) {
    //             this.$store.dispatch('data/' + this.name + '/updateList', value);
    //         },
    //     },
    // },
};
</script>

<style scoped>
section {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    padding-left: 12px;
    height: 100%;
}
.colomn-wrap {
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
}
.colomn-head {
    padding-left: 6px;
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
.colomn-body {
    position: relative;
    height: 77%;
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
</style>
