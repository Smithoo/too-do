<template>
    <div class="slider"
        :style="[positionStyle, sizeStyle]">
        <div v-if="dim && isOpen"
            class="dim"
            :class="{ dimOn: dimOn }"
            @click="close">
        </div>
        <div class="slider-contents"
            :style="[sizeStyle, transformStyle, transitionStyle]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import sliderStore from '@/stores/ui/slider';

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        dim: {
            type: Boolean,
            default: false,
        },
        duration: {
            type: Number,
            default: 300,
        },
    },
    data() {
        return {
            dimOn: false,
            slotSize: '0',
        };
    },
    computed: {
        isOpen() {
            const store = this.$store.state.ui[this.name];
            return store && store.isOpen;
        },
        positionStyle() {
            const minusSize = `-${this.slotSize}`;

            switch (this.position) {
                case 'top':
                    return { top: minusSize, left: 0 };
                case 'left':
                    return { top: 0, left: minusSize };
                case 'right':
                    return { bottom: 0, right: minusSize };
                case 'bottom':
                    return { bottom: minusSize, left: 0 };
                default:
                    return { top: 0, left: minusSize };
            }
        },
        sizeStyle() {
            switch (this.position) {
                case 'top':
                case 'bottom':
                    return { width: '100%' };
                case 'left':
                case 'right':
                    return { height: '100%' };
                default:
                    return { height: '100%' };
            }
        },
        transformStyle() {
            if (this.isOpen) {
                switch (this.position) {
                    case 'top':
                        return { transform: `translateY(${this.slotSize})` };
                    case 'left':
                        return { transform: `translateX(${this.slotSize})` };
                    case 'right':
                        return { transform: `translateX(-${this.slotSize})` };
                    case 'bottom':
                        return { transform: `translateY(-${this.slotSize})` };
                    default:
                        return { transform: `translateX(${this.slotSize})` };
                }
            }

            return { transform: 'translate(0, 0)' };
        },
        transitionStyle() {
            const duration = (this.duration / 1000) + 's';
            return { transitionDuration: duration };
        },
    },
    mounted() {
        if (!this.$store.state.ui[this.name]) {
            this.$store.registerModule(['ui', this.name], sliderStore);
        }

        setTimeout(() => {
            const element = this.$slots.default[0].elm;
            if (this.position === 'top' || this.position === 'bottom') {
                this.slotSize = element.clientHeight + 'px';
            } else {
                this.slotSize = element.clientWidth + 'px';
            }
        }, 0);
    },
    watch: {
        isOpen(value) {
            if (this.dim) {
                setTimeout(() => {
                    this.dimOn = value;
                }, this.duration);
            }
        },
    },
    methods: {
        close() {
            this.$store.dispatch(`ui/${this.name}/close`);
        },
    },
};
</script>

<style scoped>
.slider {
    position: fixed;
    z-index: 100;
}
.dim {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.25)
}
.dimOn {
    opacity: 1;
    transition: opacity 0.5s;
}
.slider-contents {
    position: relative;
    z-index: 101;
    transition-property: transform;
}
</style>
