import PaButton from './PaButton.vue';

export default {
    title: 'PaButton',
    component: PaButton,
    tags:['autodocs'],
    argsTypes: {
        backgroundColr: {
            control: 'color',
        },

        onClick: {},
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],

        },
    },
};

export const Primary = {
  args: {
    primary: true,
    title: "Submit",
  },
};
