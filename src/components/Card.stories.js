import Card from './Card.vue'

export default {
    title: 'Card',
    component: Card,
}

const Template = (args) => ({
    components:{Card},
    setup(){
        return { args };
    }, 

    template: '<Card v-binv="args"/>'
});

export const FitstStory = Template.bind({});

FirstStory.args = {
    title: "Primary",
    subText: 'Example sub text'

};