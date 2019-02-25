<template>
    <div id="app">
        <router-view/>
        <modal></modal>
        <snackbar></snackbar>
    </div>
</template>

<script>
import Modal from '@/views/layouts/modal.vue';
import Snackbar from '@/views/layouts/snackbar.vue';

export default {
    components: {
        Modal,
        Snackbar,
    },
};
</script>

<style lang="scss">
html, body {
    position: relative;
    width: 100%;
    height: 100%;
}
#app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
