<template>
    <div class="select-box" :class="{ open: optionsOn }">
        <div class="select-box-selected"
            @click="toggleOption">
            <div class="selected-label" :class="{ placeholder: !!!selected }">
                {{ selectedLabel }}
            </div>
            <div class="arrow-icon-wrap">
                <i class="material-icons">expand_more</i>
            </div>
        </div>
        <ul class="select-options">
            <li class="select-option"
                v-for="(item, index) in items"
                :key="item.label"
                @click="selectOption(index)">
                {{ item.label }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'selectValue',
        event: 'change',
    },
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: 'select...',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        selectValue: String,
    },
    data() {
        return {
            optionsOn: false,
            selected: null,
        };
    },
    computed: {
        selectedLabel() {
            return this.selected ? this.selected.label : this.placeholder;
        },
    },
    mounted() {
        const initialSelected = this.items.filter((item) => item.value === this.selectValue);
        if (!initialSelected.length) {
            return;
        }

        this.selected = initialSelected[0];
        this.$emit('change', this.selected.value);
    },
    methods: {
        toggleOption() {
            if (this.disabled) {
                return;
            }

            this.optionsOn = !this.optionsOn;
        },
        selectOption(index) {
            const item = this.items[index];

            if (this.selected && this.selected.value === item.value) {
                this.optionsOn = false;
                return;
            }

            this.selected = item;
            this.$emit('change', item.value);
            this.optionsOn = false;
        },
    },
};
</script>

<style scoped>
.select-box {
    position: relative;
}
.select-box-selected {
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 0 5px;
}
.selected-label {
    height: 30px;
    line-height: 30px;
}
.selected-label.placeholder {
    color: #c0c0c0;
}
.arrow-icon-wrap {
    position: absolute;
    top: 52%;
    right: 8px;
    transform: translateY(-50%);
}
.arrow-icon-wrap i {
    color: #666666;
    transform: rotate(0deg);
    transform-origin: center;
    transition: transform .5s;
}
.select-box.open .arrow-icon-wrap i {
    transform: rotate(180deg);
}
.select-options {
    display: none;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-top: 0;
    box-sizing: border-box;
}
.select-box.open .select-options {
    display: block;
}
.select-option {
    height: 24px;
    line-height: 24px;
    padding: 0 5px;
}
.select-option:hover {
    background-color: #3070ff;
    color: #ffffff;
}
</style>
