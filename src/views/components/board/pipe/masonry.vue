<template>
    <div class="masonry">
        <div v-if="cards.length"
            class="masonry-wrap">
            <card
                v-for="card in cards"
                :key="card.id"
                class="masonry-item"
                :card="card"
            >
            </card>
        </div>
    </div>
</template>

<script>
import Card from './../card.vue';

export default {
    props: {
        cards: {
            default: [],
        },
    },
    components: {
        Card,
    },
};
</script>

<style scoped>
.masonry-wrap {
    column-count: 4;
    column-gap: 1em;
}

.masonry-item {
    display: inline-block;
    margin: 0 0 1em;
}
</style>
