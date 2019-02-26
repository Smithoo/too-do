<template>
    <header>
        <h1>TooDo</h1>
        <search/>
    </header>
</template>

<script>
import Search from '@/views/components/toolbar/search.vue';

export default {
    components: {
        Search,
    },
};
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    z-index: 999;
    box-sizing: border-box;
}
h1 {
    float: left;
    font-size: 26px;
    margin: 0;
    padding-top: 18px;
    padding-left: 30px;
    letter-spacing: 3px;
}
</style>
