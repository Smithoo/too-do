<template>
    <span class="check-box">
        <input type="checkbox"
            class="checkbox-input"
            :id="id"
            :value="value"
            :checked="checked"
            :disabled="disabled"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange">
        <label class="checkbox-label"
            :for="id">
            <slot></slot>
        </label>
    </span>
</template>

<script>
export default {
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: ['checked', 'disabled', 'value'],
    computed: {
        id() {
            return `checkbox-${this.value}`;
        },
    },
    mounted() {
        // if (this.checked || this.val === this.value) {
        //     this.isChecked = true;
        //     this.$emit('change', this.value);
        // }
    },
    methods: {
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('emit', event);
        },
        onChange(event) {
            this.$emit('change', event.target.checked);
        },
    },
};
</script>

<style scoped`>

</style>
