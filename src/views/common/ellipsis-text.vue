<template>
    <span class="ellipsis-text">
        <slot></slot>
    </span>
</template>

<style scoped>
.ellipsis-text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
}
</style>
