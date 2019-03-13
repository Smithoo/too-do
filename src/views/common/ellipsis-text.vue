<template>
    <span class="ellipsis-text">
        <slot></slot>
    </span>
</template>

<style scoped>
.ellipsis-text {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: bottom;
}
</style>
