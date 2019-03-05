<template>
    <div class="board">
        <side-panel/>
        <columns/>
    </div>
</template>

<script>
import SidePanel from '@/views/components/board/side-panel/side-panel.vue';
import Columns from '@/views/components/board/contents/columns.vue';

export default {
    components: {
        SidePanel,
        Columns,
    },
};
</script>

<style scoped>
.board {
    display: flex;
    background-color: #efefef;
    height: 100%;
}
</style>
