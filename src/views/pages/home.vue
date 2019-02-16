<template>
    <div class="home">
        Home
        <select-box :items="items" v-model="selected"></select-box>
        <div>
            selected: {{ selected }}
        </div>
    </div>
</template>

<script>
import SelectBox from '@/views/common/select-box.vue';

export default {
    components: {
        SelectBox,
    },
    data() {
        return {
            items: [
                { label: 'A', value: 'a' },
                { label: 'B', value: 'b' },
                { label: 'C', value: 'c' },
                { label: 'D', value: 'd' },
            ],
            selected: null,
        };
    },
};
</script>
