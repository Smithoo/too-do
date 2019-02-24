<template>
    <span class="check-box" :class="{ disabled: disabled }">
        <i v-if="isChecked" class="material-icons">check_box</i>
        <i v-else class="material-icons">check_box_outline_blank</i>
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
import { arrayUtil, stringUtil } from '@/utils';

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
        value: {
            type: String,
            default: '',
        },
        inputValue: null,
    },
    data() {
        return {
            isChecked: false,
        };
    },
    computed: {
        id() {
            const idStr = this.value ? this.value : stringUtil.createId();
            return `checkbox-${idStr}`;
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
.check-box {
    position: relative;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
}
.check-box i {
    width: 24px;
    height: 24px;
    color: #3070ff;
}
.check-box.disabled i {
    color: #a0a0a0;
}
.checkbox-input {
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
.check-box .checkbox-label {
    display: inline-block;
    font-size: 12px;
    line-height: 24px;
    cursor: pointer;
    vertical-align: top;
}
.check-box.disabled .checkbox-label {
    color: #a0a0a0;
}
</style>
