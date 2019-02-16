<template>
    <div class="select-box" :class="{ open: optionsOn }">
        <div class="select-box-selected"
            @click="optionsOn = !optionsOn">
            {{ selectedLabel }}
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
    props: {
        items: {
            type: Array,
        },
    },
    data() {
        return {
            optionsOn: false,
            selected: null,
        };
    },
    computed: {
        selectedLabel() {
            return this.selected ? this.selected.label : '';
        },
    },
    methods: {
        selectOption(index) {
            const item = this.items[index];

            if (this.selected && this.selected.value === item.value) {
                this.optionsOn = false;
                return;
            }

            this.selected = item;
            this.$emit('input', item.value);
            this.optionsOn = false;
        },
    },
};
</script>

<style scoped>
.select-box-selected {
    border: 1px solid #ddd;
    min-height: 30px;
}
.select-options {
    display: none;
    border: 1px solid #ddd;
}
.select-box.open .select-options {
    display: block;
}
.select-option:hover {
    background-color: blue;
    color: #ffffff;
}
</style>
