<template>
    <div class="tag"
        :style="{ backgroundColor: color }"
        @click="$emit('click')"
    >
        <div class="slot-text">
            <slot>tag contents</slot>
        </div>
        <div class="sharp-text">{{ sharpText }}</div>
        <div class="cancel" v-if="close">
            <button type="button"
                @click="$emit('cancel')"
            >
                <i class="material-icons md-8">close</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#dddddd',
        },
        close: {
            type: Boolean,
            default: false,
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
    display: inline-block;
    height: 20px;
    border-radius: 10px;
    padding-left: 6px;
    padding-right: 6px;
    cursor: pointer;
}
.tag > div {
    display: inline-block;
    height: 100%;
}
.tag .slot-text {
    display: none;
}
.tag .sharp-text {
    font-size: 10px;
    line-height: 20px;
}
.tag .cancel {
    position: relative;
    left: 3px;
}
.cancel button {
    position: relative;
    top: 2px;
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    text-align: center;
    border-radius: 50%;
}
.cancel button i {
    line-height: 16px;
}
</style>
