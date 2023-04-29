import PaHeader from "./PaHeader.vue";

export default {
  title: "PaHeader",
  component: PaHeader,
};

const Template = (args) => ({
  components: { PaHeader },
  setup() {
    return { args };
  },

  template: '<PaHeader v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "Primary",
  subText: "Example sub text",
  backgroundColor: "bg-black",
};
export const SecondStory = Template.bind({});

SecondStory.args = {
  backgroundColor: "bg-pink-400",
};

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  backgroundColor: "bg-blue-600",
};
