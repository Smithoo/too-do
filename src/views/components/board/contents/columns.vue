<template>
    <section class="columns">
        <!-- <draggable
            v-model="columns"
            handle=".handle"
            group="columns"
            ghost-class="ghost"
            @change="log">
            <div class="column" v-for="column in columns" :key="column.id">
                <div class="handle">
                    <h3>{{ column.name }}</h3>
                </div>
                <div class="column-list">
                    <draggable
                        v-model="column.list"
                        group="cards">
                        <div class="card" v-for="card in column.list" :key="card">
                            {{ card }}
                        </div>
                    </draggable>
                </div>
            </div>
        </draggable>
        <column name="s"/>
        <column name="s"/> -->
        <add-column/>
    </section>
</template>

<script>
// import Column from './column.vue';
import AddColumn from './add-column.vue';
// import Draggable from 'vuedraggable';

export default {
    components: {
        // Column,
        AddColumn,
        // Draggable,
    },
    data() {
        return {
            columns: [
                { id: 'co1', name: 'col1', list: ['a1', 'a2', 'a3'] },
                { id: 'co2', name: 'col2', list: ['b1', 'b2', 'b3'] },
                { id: 'co3', name: 'col3', list: ['c1', 'c2', 'c3'] },
                { id: 'co4', name: 'col4', list: ['d1', 'd2', 'd3'] },
            ],
        };
    },
    methods: {
        log() {
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
.column {
    display: inline-block;
    width: 200px;
    border: 1px solid #555;
}
.handle {
    height: 80px;
}
.column-list {
    min-height: 300px;
}
.card {
    height: 60px;
    margin-bottom: 12px;
    border: 1px solid red;
}
</style>
