<template>
    <div class="loading">
        <div class="loading-contents">
            <spinner />
            <div class="loading-text animated infinite pulse">L O A D I N G</div>
        </div>
    </div>
</template>

<script>
import Spinner from '@/views/common/spinner.vue';

export default {
    components: {
        Spinner,
    },
};
</script>

<style scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loading-contents {
    max-width: 50%;
    text-align: center;
}
.loading-text {
    color: #555555;
    font-size: 20px;
    margin-top: 24px;
}
@keyframes pulse {
    from {
        transform: scale3d(1, 1, 1);
    }

    50% {
        transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
}
.pulse {
    animation-name: pulse;
}
</style>
