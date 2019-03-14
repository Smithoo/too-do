<template>
    <section class="pipes">
        <draggable
            class="pipes-wrap"
            v-model="pipes"
            v-bind="dragOptions"
            @start="dragging = true"
            @end="dragging = false"
        >
            <pipe-column
                v-for="pipe in pipes"
                :key="pipe.id"
                :pipe="pipe"
            >
            </pipe-column>
        </draggable>
        <add-pipe/>
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
    beforeMount() {
        this.$api.fetchData()
            .then((pipes) => {
                this.$store.commit('board/setPipes', pipes);
            });
    },
    data() {
        return {
            dragging: false,
        };
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
.pipes {
    flex: 1;
    height: 100%;
    vertical-align: top;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 30px 40px 30px 40px;
    box-sizing: border-box;
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
