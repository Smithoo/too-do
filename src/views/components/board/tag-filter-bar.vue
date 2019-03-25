<template>
    <div class="tag-filter-bar" :class="{ data: tags.length }">
        <div class="tags-filter-bar-wrap">
            <div class="remove-all">
                <button type="button"
                    @click="removeAll"
                >
                    Remove All
                </button>
            </div>
            <div class="tags">
                <div class="tags-wrap">
                    <tag v-for="tag in tags"
                        :key="tag.label"
                        :color="tag.color"
                        @cancel="removeTag(tag)"
                        close
                    >
                        {{ tag.label }}
                    </tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from '@/views/common/tag.vue';

export default {
    components: { Tag },
    computed: {
        tags() {
            return this.$store.state.board.tagFilter.tags;
        },
    },
    methods: {
        removeTag(tag) {
            this.$store.commit('board/tagFilter/remove', tag);
        },
        removeAll() {
            this.$store.commit('board/tagFilter/removeAll');
        },
    },
};
</script>

<style scoped>
.tag-filter-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: height 0.4s;
    background-color: #fff;
    overflow: hidden;
}
.tag-filter-bar.data {
    border-bottom: 1px solid #ddd;
    height: 40px;
}
.tags-filter-bar-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px 50px;
    box-sizing: border-box;
}
.tags-filter-bar-wrap > div {
    display: inline-block;
}
.remove-all {
    display: none;
}
.tag-filter-bar.data .remove-all {
    position: absolute;
    width: 55px;
    padding-right: 10px;
    border-right: 1px solid #dddddd
}
.remove-all button {
    height: 30px;
    font-size: 8px;
    color: #9e9e9e;
}
.remove-all button:hover {
    color: #555555;
}
.tags {
    width: 100%;
    white-space: nowrap;
    padding-left: 80px;
    box-sizing: border-box;
}
.tags-wrap {
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
}
.tags .tag {
    margin: 5px 8px 5px 0;
}
</style>
