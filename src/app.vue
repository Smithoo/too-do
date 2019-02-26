<template>
    <div id="app">
        <toolbar/>
        <main>
            <router-view/>
        </main>
        <modal/>
        <snackbar/>
    </div>
</template>

<script>
import Toolbar from '@/views/layouts/toolbar.vue';
import Modal from '@/views/layouts/modal.vue';
import Snackbar from '@/views/layouts/snackbar.vue';

export default {
    components: {
        Toolbar,
        Modal,
        Snackbar,
    },
};
</script>

<style>
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
main {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
}
</style>
