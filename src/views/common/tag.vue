<template>
    <div class="tag"
        :style="{ backgroundColor: color }"
        @click="$emit('click')"
    >
        <div class="hide">
            <slot>tag contents</slot>
        </div>
        <span>{{ sharpText }}</span>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#dddddd',
        },
    },
    computed: {
        sharpText() {
            const text = this.$slots.default[0].text;
            return '#' + text;
        },
    },
};
</script>

<style scoped>
.tag {
    padding: 6px 6px 4px 6px;
    border: 0;
    border-radius: 12px;
    height: 10px;
    color: #3f3f3f;
    margin-right: 4px;
    margin-bottom: 6px;
    cursor: pointer;
    max-width: 50px;
    text-overflow: ellipsis;
    font-size: 10px;
    display: inline-block;
    cursor: pointer;
}
.tag span {
    position: relative;
    top: -1px;
}
</style>
