<template>
    <div class="board">
        <side-panel/>
        <router-view/>
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
    display: flex;
    background-color: #efefef;
    height: 100%;
}
</style>
