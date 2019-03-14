<template>
    <div class="board">
        <side-panel/>
        <div class="board-contents">
            <router-view
                @loadStart="isLoading = true"
                @loadEnd="isLoading = false"
            />
            <loading v-if="isLoading" />
        </div>
    </div>
</template>

<script>
import SidePanel from '@/views/components/board/side-panel/side-panel.vue';
import Loading from '@/views/components/board/loading.vue';

export default {
    components: {
        SidePanel,
        Loading,
    },
    data() {
        return {
            isLoading: false,
        };
    },
};
</script>

<style scoped>
.board {
    display: flex;
    background-color: #efefef;
    height: 100%;
}
.board-contents {
    position: relative;
    flex: 1;
    overflow: hidden;
}
</style>
