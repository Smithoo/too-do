<template>
    <span class="check-box">
        <input type="checkbox"
            class="checkbox-input"
            :id="id"
            :value="value"
            :checked="isChecked"
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
import { arrayUtil } from '@/utils';
import { setTimeout } from 'timers';

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
        value: String,
        inputValue: null,
    },
    data() {
        return {
            isChecked: false,
        };
    },
    computed: {
        id() {
            return `checkbox-${this.value}`;
        },
        internalValue() {
            return this.value ? this.value : this.isChecked;
        },
    },
    mounted() {
        if (this.checked || this.inputValue === true ||
            (arrayUtil.isArray(this.inputValue) && this.inputValue.includes(this.internalValue))) {
            this.isChecked = true;

            if (this.checked) {
                setTimeout(this.onChange, 0);
            }
        }
    },
    methods: {
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('emit', event);
        },
        onChange(event) {
            this.isChecked = event ? event.target.checked : this.isChecked;
            let emitValue = this.internalValue;

            if (typeof(this.internalValue) !== 'boolean' &&
                arrayUtil.isArray(this.inputValue)) {

                emitValue = this.inputValue.filter(item => item !== this.internalValue);

                if (emitValue.length === this.inputValue.length) {
                    emitValue.push(this.internalValue);
                }
            }

            this.$emit('change', emitValue);
        },
    },
};
</script>

<style scoped>

</style>
