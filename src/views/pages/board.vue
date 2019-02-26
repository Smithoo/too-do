<template>
    <div class="board">
        <side-panel/>
    </div>
</template>

<script>
import SidePanel from '@/views/components/board/side-panel/side-panel.vue';

export default {
    components: {
        SidePanel,
    },
};
</script>

<style scoped>
.board {
    background-color: #f6f6f6;
    height: 100%;
}
</style>
