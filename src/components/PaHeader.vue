<template>
    <div class=" rounded-md w-[90%] p-4 shadow-inner" :class="backgroundColor">
        <nav class="flex justify-between">
            <div class="text-white font-mono text-2xl py-2 ">Logo</div>
            <ul class="text-white font-mono flex justify-between">
                <li class="pr-8">Home</li>
                <li class="pr-8">About</li>
                <li class="pr-8">Contact</li>
            </ul>
        </nav>
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