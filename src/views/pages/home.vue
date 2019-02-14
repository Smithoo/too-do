<template>
    <div class="home">
        Home
        <radio-button
            name="hello"
            value="a"
            v-model="selected"
            >A</radio-button>
        <radio-button
            name="hello"
            value="b"
            v-model="selected"
            >B</radio-button>
        <radio-button
            name="hello"
            value="c"
            v-model="selected"
            >C</radio-button>
        <div>
            selected: {{ selected }}
        </div>
    </div>
</template>

<script>
import RadioButton from '@/views/common/radio-button.vue';

export default {
    components: {
        RadioButton
    },
    data() {
        return {
            selected: ''
        }
    },
};
</script>
