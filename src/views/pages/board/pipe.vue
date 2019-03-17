<template>
    <div class="pipe">
        <div class="pipe-head">
            <h3>{{ name }}</h3>
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
.pipe {
    width: 100%;
    height: 100%;
    vertical-align: top;
    padding: 40px 50px 40px 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: scroll;
}
.pipe-head {
    position: relative;
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
