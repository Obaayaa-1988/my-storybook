<template>
    <button type="button" @click="onClick" :style="style" :class="classes">
        {{ title }}

    </button>
</template>

<script>
import '../stories/button.css';
import { reactive, computed } from 'vue';

export default {
    name: 'PaButton',
    props: {
        title: {
            type: String,
            required: true,
        },
        primary: {
            type: Boolean,
            default: false,
        },

         borderRadius: {
                    type: Boolean,
                    default: false,
                 },
        size: {
            type: String,
            validator: function (value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            },
        },
        backgroundColor: {
            type: String,
        },
    },
   
    emits: ['click'],

    setup(props, { emit }) {
        props = reactive(props);
        return {
            classes: computed(() => ({
                'storybook-button': true,
                'storybook-button--primary': props.primary,
                'storybook-button--secondary': !props.primary,
                [`storybook-button--${props.size || 'medium'}`]: true,
            })),
            style: computed(() => ({
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius ? '10px' : '0px',
            })),
            onClick() {
                emit('click');
            },
        };
    },




}
</script>

<style scoped>
</style>