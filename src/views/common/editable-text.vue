<template>
    <div class="editable-text">
        <div v-if="isEditing">
            <input type="text" v-model="text" ref="input" />
            <button type="button" @click="changeToText">confirm</button>
        </div>
        <div v-else @click="changeToInput">
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        editMode: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isEditing: false,
            text: '',
        };
    },
    beforeMount() {
        if (this.value) {
            this.text = this.value;
        }
        if (this.editMode) {
            this.isEditing = this.editMode;
        }
    },
    methods: {
        changeToInput() {
            this.isEditing = true;

            this.$nextTick(() => {
                this.$refs.input.focus();
            });
        },
        changeToText() {
            this.isEditing = false;
        },
    },
};
</script>

<style scoped>

</style>
