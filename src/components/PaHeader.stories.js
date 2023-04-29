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
  link: "Home",
  linkOne: "About",
  linkTwo: "Contact",
  backgroundColor: "bg-black",
};
export const SecondStory = Template.bind({});

SecondStory.args = {
  link: "Home",
  linkOne: "About",
  linkTwo: "Contact",
  backgroundColor: "bg-pink-400",
};

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  link: "Home",
  linkOne: "About",
  linkTwo: "Contact",
  backgroundColor: "bg-blue-600",
};
