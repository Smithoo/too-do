<template>
    <span class="radio-button">
        <input type="radio"
            class="radio-input"
            :id="id"
            :name="name"
            :value="value"
            :checked="checked"
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
    props: {
        checked: {
            type: Boolean,
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
    },
    computed: {
        id() {
            return `radio-${this.value}`;
        },
    },
    methods: {
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('emit', event);
        },
        onChange(event) {
            this.$emit('change', this.value);
        }
    }
};
</script>

<style scoped>
.radio-button {
    position: relative;
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
}
.radio-input {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 1;
}
.radio-input:checked~.radio-label::before {
    background: radial-gradient(#00c73c 36%,#00ae34 40%,#fff 47%);
}
.radio-label::before {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 7px;
    border: 1px solid #bcbcbc;
    border-radius: 50%;
    background: #ffffff;
    vertical-align: top;
    content: '';
}
.radio-label {
    display: inline-block;
    cursor: pointer;
}
</style>
