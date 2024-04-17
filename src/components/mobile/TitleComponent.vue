<script setup>
    const props = defineProps({
        text: String
    })
</script>

<template>
    <h1>
    {{ props.text }}
    </h1>
</template>

<style scoped>
h1{
    text-align: center;
    font-size: 1rem;
    color: #FFFFFF;
}
</style>