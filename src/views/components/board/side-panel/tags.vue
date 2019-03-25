<template>
    <div class="tags">
        <h4>Tags</h4>
        <div class="tag-container">
            <tag v-for="tag in tags"
                :key="tag.label"
                :color="tag.color"
                @click="toggleFilterTag(tag)"
            >
                {{ tag.label }}
            </tag>
        </div>
    </div>
</template>

<script>
import Tag from '@/views/common/tag.vue';

export default {
    components: {
        Tag,
    },
    computed: {
        tags() {
            const getheredTags = this.$store.getters['board/tags'];
            return Object.values(getheredTags).slice().sort((a, b) => {
                return b.count - a.count;
            });
        },
    },
    methods: {
        toggleFilterTag(tag) {
            this.$store.dispatch('board/tagFilter/toggleFilterTag', tag);
        },
    },
};
</script>

<style scoped>
.tags {
    padding: 0 6px;
}
h4 {
    color: #3f3f3f;
}
.tag-container {
    margin-top: 12px;
}
.tag-container > .tag {
    float: left;
    margin-bottom: 8px;
    margin-right: 4px;
}
</style>
