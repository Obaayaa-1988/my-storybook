<template>
  <div class=" rounded-md w-96 p-4 shadow-inner" :class="backgroundColor">
    <h4 class="text-4xl">{{ title }}</h4>
    <p class="secondary">{{ subText }}</p>

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subText: String,
    backgroundColor: String
  }

}
</script>

<style scoped>
/* .card{
    background-color: hotpink;
    border-radius: .2rem;
    box-shadow: rgb(150, 150, 150) 0px 1px 3px;
    width: 350px;
    padding: .8rem;
} */
</style>