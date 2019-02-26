<template>
    <div class="tags">
        <h4>Tags</h4>
        <div class="tag-container">
            <tag v-for="tag in tags" :key="tag">{{ tag }}</tag>
        </div>
    </div>
</template>

<script>
import Tag from '@/views/common/tag.vue';

export default {
    data() {
        return {
            tags: ['a', 'hello', 'bye', 'asdf', 'qw', 'werrrw'],
        };
    },
    components: {
        Tag,
    },
};
</script>

<style scoped>
.tags {
    padding: 0 12px;
}
h4 {
    color: #3f3f3f;
}
.tag-container {
    margin-top: 12px;
}
.tag-container > .tag {
    float: left;
}
</style>
