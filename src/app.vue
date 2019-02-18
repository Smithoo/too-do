<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
        </div>
        <router-view/>
        <modal></modal>
        <snackbar></snackbar>
        <slide-panel position="left"></slide-panel>
    </div>
</template>

<script>
import Modal from '@/views/layouts/modal.vue';
import Snackbar from '@/views/layouts/snackbar.vue';
import SlidePanel from '@/views/layouts/slide-panel.vue';

export default {
    components: {
        Modal,
        Snackbar,
        SlidePanel,
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
