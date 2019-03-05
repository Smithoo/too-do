<template>
    <section class="columns">
        <column name="s"/>
        <column name="s"/>
        <add-column/>
    </section>
</template>

<script>
import Column from './column.vue';
import AddColumn from './add-column.vue';

export default {
    components: {
        Column,
        AddColumn,
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
</style>
