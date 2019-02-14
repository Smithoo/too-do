<template>
    <div class="snackbar">
        <button type="button"
            class="snackbar-btn"
            :class="[style, { shown: shown }]"
            @click="hide">
            {{ msg }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            shown: false,
        };
    },
    computed: {
        show() {
            return this.$store.state.ui.snackbar.show;
        },
        msg() {
            return this.$store.state.ui.snackbar.msg;
        },
        style() {
            return this.$store.state.ui.snackbar.style;
        },
    },
    watch: {
        show(value) {
            this.shown = value;
        },
    },
    methods: {
        hide() {
            this.$store.dispatch('ui/snackbar/hide');
        },
    },
};
</script>

<style scoped>
.snackbar {
    position: fixed;
    top: -20px;
    width: 100vw;
    text-align: center;
    z-index: 9000;
}
.snackbar-btn {
    padding: 4px 16px;
    background-color: #ffffff;
    border-radius: 1px;
    border: 1px solid #bbbbbb;
    font-size: 15px;
    transform: translateY(-120px);
    transition: transform .4s;
}
.snackbar-btn.info {
    color: dodgerblue;
}
.snackbar-btn.warn {
    color: orange;
}
.snackbar-btn.error {
    color: red;
}
.snackbar-btn.shown {
    transform: translateY(30px);
}
</style>
