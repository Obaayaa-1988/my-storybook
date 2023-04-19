import PaHeader from "./PaHeader.vue";

export default {
  title: "PaHeader",
  component: PaHeader,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },

  template: '<Card v-bind="args"/>',
});

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: "Primary",
  subText: "Example sub text",
  backgroundColor: "bg-red-800",
};
export const SecondStory = Template.bind({});

SecondStory.args = {
  title: "Hello Card",
  subText: "Example second text",
  backgroundColor: "bg-pink-400",
};

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  title: "Coming from here",
  subText: "Hello World",
  backgroundColor: "bg-blue-600",
};
