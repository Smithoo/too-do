<template>
    <section class="all">
        <draggable
            class="pipes-wrap"
            v-model="pipes"
            v-bind="dragOptions"
        >
            <pipe-column
                v-for="pipe in pipes"
                :key="pipe.id"
                :pipe="pipe"
            >
            </pipe-column>
        </draggable>
        <add-pipe />
    </section>
</template>

<script>
import PipeColumn from '@/views/components/board/all/pipe-column.vue';
import AddPipe from '@/views/components/board/all/add-pipe.vue';
import Draggable from 'vuedraggable';

export default {
    components: {
        PipeColumn,
        AddPipe,
        Draggable,
    },
    computed: {
        pipes: {
            get() {
                return this.$store.state.board.pipes;
            },
            set(pipes) {
                this.$store.commit('board/setPipes', pipes);
            },
        },
        dragOptions() {
            return {
                animation: 200,
                group: 'pipes',
                ghostClass: 'ghost-pipe',
                disabled: false,
                handle: '.handle',
            };
        },
    },
};
</script>

<style scoped>
.all {
    width: 100%;
    height: 100%;
    vertical-align: top;
    padding: 40px 50px 40px 50px;
    box-sizing: border-box;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
.pipes-wrap {
    display: inline-block;
    vertical-align: top;
    height: 100%;
}
.ghost-pipe {
    opacity: 0.5;
}
</style>
