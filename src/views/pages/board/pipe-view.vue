<template>
    <div class="pipe-view">
        <div class="pipe-view-head">
            <div class="pipe-name">
                <h3>{{ name }}</h3>
            </div>
            <div class="card-count">
                {{ cards.length }} cards
            </div>
        </div>
        <masonry v-if="cards.length" :cards="cards" />
        <div v-else class="no-cards">
            N O&nbsp;&nbsp;&nbsp;&nbsp;C A R D S
        </div>
    </div>
</template>

<script>
import Masonry from '@/views/components/board/pipe/masonry.vue';

export default {
    components: {
        Masonry,
    },
    computed: {
        pipeId() {
            return this.$route.params.pipeId;
        },
        pipe() {
            return this.$store.getters['board/pipe'](this.pipeId);
        },
        name() {
            return this.pipe.name;
        },
        cards() {
            return this.pipe.cards;
        },
    },
};
</script>

<style scoped>
.pipe-view {
    width: 100%;
    height: 100%;
    vertical-align: top;
    padding: 55px 50px 40px 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
}
.pipe-view::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
.pipe-view::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(10, 10, 10, .15);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
.pipe-view-head {
    position: relative;
    padding-left: 6px;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    z-index: 10;
}
.pipe-name {
    padding-bottom: 6px;
}
h3 {
    color: #333333;
    font-size: 24px;
    letter-spacing: 2px;
}
.card-count {
    color: #666666;
    font-size: 12px;
    padding-left: 3px;
    padding-bottom: 20px;
}
.no-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: #666;
}
</style>
