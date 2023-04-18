import{a as g,b as n,t as a,n as b,o as C}from"./vue.esm-bundler-b4ba020f.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const l={name:"Card",props:{title:String,subText:String,backgroundColor:String}},y={class:"text-4xl"},S={class:"secondary"};function f(s,v,t,k,T,h){return C(),g("div",{class:b(["rounded-md w-96 p-4 shadow-inner",t.backgroundColor])},[n("h4",y,a(t.title),1),n("p",S,a(t.subText),1)],2)}const u=x(l,[["render",f],["__scopeId","data-v-cc1867bf"]]);l.__docgenInfo={displayName:"Card",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"subText",type:{name:"string"}},{name:"backgroundColor",type:{name:"string"}}],sourceFiles:["C:/Users/WALULEL/my-storybook/src/components/Card.vue"]};const F={title:"Card",component:u},_=s=>({components:{Card:u},setup(){return{args:s}},template:'<Card v-bind="args"/>'}),e=_.bind({});e.args={title:"Primary",subText:"Example sub text",backgroundColor:"bg-red-800"};const r=_.bind({});r.args={title:"Hello Card",subText:"Example second text"};var o,c,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: '<Card v-bind="args"/>'
})`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: '<Card v-bind="args"/>'
})`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["FirstStory","SecondStory"];export{e as FirstStory,r as SecondStory,L as __namedExportsOrder,F as default};
//# sourceMappingURL=Card.stories-00ead2d0.js.map
