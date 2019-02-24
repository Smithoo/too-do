<template>
    <div id="app">
        <select-box :items="items" v-model="selected"></select-box>
        <div>
            selected: {{ selected }}
        </div>
        <router-view/>
        <modal></modal>
        <snackbar></snackbar>
    </div>
</template>

<script>
import Modal from '@/views/layouts/modal.vue';
import Snackbar from '@/views/layouts/snackbar.vue';
import SelectBox from '@/views/common/select-box.vue';

export default {
    components: {
        Modal,
        Snackbar,
        SelectBox,
    },
    data() {
        return {
            items: [
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
                { label: 'C', value: 'c' },
                { label: 'D', value: 'd' },
            ],
            selected: null,
        };
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
