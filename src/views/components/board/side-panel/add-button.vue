<template>
    <div>
        <button type="button"
            @click="openForm">
            <i class="material-icons">add</i>
            Add Todo
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        openForm() {
            this.$store.dispatch('ui/form/showForm');
        },
    },
};
</script>

<style scoped>
button {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #3f3f3f;
    color: #ffffff;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    letter-spacing: 2px;
}
button i {
    position: relative;
    top: 2px;
    margin-right: 4px;
    font-size: 16px;
}
</style>
