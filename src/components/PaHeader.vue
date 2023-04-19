<template>
    <div class=" rounded-md w-96 p-4 shadow-inner" :class="backgroundColor">
        <h4 class="text-4xl text-white">{{ title }}</h4>
        <p class="secondary text-white mt-4">{{ subText }}</p>

    </div>
</template>

<script>
export default {
    name: 'PaHeader',
    props: {
        title: String,
        subText: String,
        backgroundColor: String
    }

}
</script>

<style scoped></style>