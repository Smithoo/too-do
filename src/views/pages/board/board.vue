<template>
    <div class="board">
        <side-panel/>
        <div class="board-contents">
            <loading v-if="isLoading" />
            <router-view v-else/>
            <tag-filter-bar/>
        </div>
    </div>
</template>

<script>
import TagFilterBar from '@/views/components/board/tag-filter-bar.vue';
import SidePanel from '@/views/components/board/side-panel/side-panel.vue';
import Loading from '@/views/components/board/loading.vue';

export default {
    components: {
        TagFilterBar,
        SidePanel,
        Loading,
    },
    data() {
        return {
            isLoading: false,
        };
    },
    beforeMount() {
        this.isLoading = true;
        this.$api.fetchData()
            .then((pipes) => {
                this.$store.commit('board/setPipes', pipes);
                this.isLoading = false;
            });
    },
};
</script>

<style scoped>
.board {
    position: relative;
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
