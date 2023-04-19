import PaButton from './PaButton.vue';

export default {
  title: "PaButton",
  component: PaButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: {},
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    title: "Submit",
  },

  
};

export const Small = {
    args:{
        small: true,
        title: "send"

    }

}; 

export const Medium = {
    args: {
        medium: true,
        title: "click me"

    }

};

export const Large = {
    args:{
        large: true,
        title: "forgotten password"

    }
}
