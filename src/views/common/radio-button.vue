<template>
    <span class="radio-button" :class="{ disabled: disabled }">
        <i v-if="isChecked" class="material-icons">radio_button_checked</i>
        <i v-else class="material-icons">radio_button_unchecked</i>
        <input type="radio"
            class="radio-input"
            :id="id"
            :name="name"
            :value="value"
            :checked="isChecked"
            :disabled="disabled"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange">
        <label class="radio-label"
            :for="id">
            <slot></slot>
        </label>
    </span>
</template>

<script>
export default {
    model: {
        prop: 'inputValue',
        event: 'change',
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        inputValue: {
            type: String,
        },
    },
    computed: {
        id() {
            return `radio-${this.value}`;
        },
        isChecked() {
            return this.inputValue === this.value;
        },
    },
    mounted() {
        if (this.checked || this.inputValue === this.value) {
            this.$emit('change', this.value);
        }
    },
    methods: {
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('emit', event);
        },
        onChange() {
            this.$emit('change', this.value);
        },
    },
};
</script>

<style scoped>
.radio-button {
    position: relative;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
}
.radio-button i {
    width: 24px;
    height: 24px;
    color: #3070ff;
}
.radio-button.disabled i {
    color: #a0a0a0;
}
.radio-input {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
.radio-button .radio-label {
    display: inline-block;
    font-size: 12px;
    line-height: 24px;
    cursor: pointer;
    vertical-align: top;
}
.radio-button.disabled .radio-label {
    color: #a0a0a0;
}
</style>
