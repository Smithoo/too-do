<template>
    <section class="pipe" :class="mode">
        <div class="pipe-wrap">
            <div class="pipe-head handle">
                <div class="pipe-title">
                    <div class="pipe-name">
                        <h3>{{ pipe.name }}</h3>
                    </div>
                    <div class="card-count">{{ pipe.cards.length }} cards</div>
                </div>
                <div class="pipe-control">
                    <button type="button" class="width-control" @click="changeWidth">
                        <i v-if="mode === 'wide'"
                            class="material-icons md-24">unfold_less</i>
                        <i v-if="mode !== 'wide'"
                            class="material-icons md-24">unfold_more</i>
                    </button>
                    <button type="button" class="setting" v-if="!isCollapsed">
                        <i class="material-icons md-18">settings</i>
                    </button>
                </div>
            </div>
            <div class="pipe-body" v-if="!isCollapsed">
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
                return this.pipe.cards;
            },
            set(cards) {
                const payload = {
                    id: this.pipe.id,
                    cards,
                };
                this.$store.commit('board/setCards', payload);
            },
        },
        mode() {
            return this.pipe.mode;
        },
        dragOptions() {
            return {
                animation: 200,
                group: 'cards',
                ghostClass: 'ghost-card',
                disabled: false,
            };
        },
        isCollapsed() {
            return this.mode === 'collapsed';
        },
    },
    methods: {
        changeWidth() {
            let nextMode = 'collapsed';
            if (this.mode === 'collapsed') {
                nextMode = 'normal';
            } else if (this.mode === 'normal') {
                nextMode = 'wide';
            }

            this.$store.commit('board/setPipeMode', { id: this.pipe.id,  mode: nextMode });
        },
    },
};
</script>

<style scoped>
section.pipe {
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 250px;
    height: 100%;
    margin-right: 35px;
    transition: width 0.3s;
}
section.pipe.collapsed {
    width: 60px;
}
section.pipe.normal {
    width: 250px;
}
section.pipe.wide {
    width: 400px;
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
}
.pipe-head .pipe-control {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
}
.pipe-head:hover .pipe-control {
    display: block;
}
.pipe-control button {
    width: 24px;
    height: 24px;
    margin-left: 3px;
}
.pipe-control button.width-control i {
    position: relative;
    top: 3px;
    transform: rotate(90deg);
}
.pipe-control button i {
    color: #999999;
}
.pipe-control button i:hover {
    color: #444444;
}
.collapsed .pipe-control {
    display: block;
    left: 0;
    width: 60px;
    height: 60px;
    text-align: center;
}
.pipe-title {
    transform: rotate(0);
    transition: 0.3s;
}
.collapsed .pipe-title {
    position: absolute;
    transform: rotate(90deg);
    transform-origin: bottom left;
    padding-bottom: 8px;
    padding-left: 10px;
}
.collapsed .pipe-control button {
    margin: 0;
}
/* pipe body */
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
