<template>
    <button type="button" class="w-[150px] h-[50px] shadow-inner" @click="onClick" :style="style" :class="classes">
        {{ title }}

    </button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: 'PaButton',
    props: {
        title:{
            type:  String,
            required: true,
        },

        primary: {
            type: String,
            default: false,

        },

         rounded: {
            type: Boolean,
            default: false,
        },

        size: {
            type: String,
            validator: function(value) {
                return['small', 'medium', 'large'].indexOf(value) !== -1;
            },
            
        },

        backgroundColor: {
            type: String,
            default: '#efcccf',

        }
            
       
    },

    emits: ['click'],

    setup(props, { emit }) {
        props = reactive(props);
        return{
            classes: computed(() => ({
                primary: props.primary,
                size: props.size
            })),
            style: computed(() => ({
                backgroundColor: props.backgroundColor,
                rounded: props.rounded ? 'rounded-md' : 'rounded-none',

            })),


            onClick(){
                emit("clicked")
            }

           


        }
    }




}
</script>

<style scoped></style>