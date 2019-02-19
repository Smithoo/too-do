<template>
    <div class="slide-panel" :style="positionStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        position: {
            type: String,
            required: true,
        },
    },
    computed: {
        positionStyle() {
            switch (this.position) {
                case 'top':
                    return { top: 0, left: 0, width: '100%' };
                case 'left':
                    return { top: 0, left: 0, height: '100%' };
                case 'right':
                    return { bottom: 0, right: 0, height: '100%' };
                case 'bottom':
                    return { bottom: 0, left: 0, width: '100%' };
                default:
                    return { top: 0, left: 0, height: '100%' };
            }
        },
    },
};
</script>

<style scoped>
.slide-panel {
    position: absolute;
    min-width: 30px;
    min-height: 30px;
    background-color: #555;
}
</style>
