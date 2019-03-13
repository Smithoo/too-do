<template>
    <section class="columns">
        <draggable
            class="columns-wrap"
            v-model="columns"
            v-bind="dragOptions"
            @start="dragging = true"
            @end="dragging = false"
        >
            <transition-group
                tag="div"
                type="transition"
                :name="!dragging ? 'flip-list' : null"
            >
                <column
                    v-for="column in columns"
                    :key="column.id"
                    :column="column"
                >
                </column>
            </transition-group>
        </draggable>
        <add-column/>
    </section>
</template>

<script>
import Column from './column.vue';
import AddColumn from './add-column.vue';
import Draggable from 'vuedraggable';

export default {
    components: {
        Column,
        AddColumn,
        Draggable,
    },
    beforeMount() {
        this.$api.fetchData()
            .then((columns) => {
                this.$store.commit('board/setColumns', columns);
            });
    },
    data() {
        return {
            dragging: false,
        };
    },
    computed: {
        columns: {
            get() {
                return this.$store.state.board.columns;
            },
            set(columns) {
                this.$store.commit('board/setColumns', columns);
            },
        },
        dragOptions() {
            return {
                animation: 200,
                group: 'columns',
                ghostClass: 'ghost-column',
                disabled: false,
                handle: '.handle',
            };
        },
    },
};
</script>

<style scoped>
.columns {
    flex: 1;
    height: 100%;
    vertical-align: top;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 30px 40px 30px 40px;
    box-sizing: border-box;
}
.columns-wrap {
    display: inline-block;
    vertical-align: top;
    height: 100%;
}
.ghost-column {
    opacity: 0.5;
}
.flip-list-move {
    transition: transform 0.5s;
}
</style>
