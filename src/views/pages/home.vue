<template>
    <div class="home">
        Home
        <div>
            selected: {{ selected }}
        </div>
    </div>
</template>

<script>
// import CheckBox from '@/views/common/check-box.vue';

export default {
    components: {
    },
    data() {
        return {
            selected: null,
        };
    },
};
</script>
