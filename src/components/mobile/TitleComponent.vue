<script setup>
import { ChevronRight } from '../icons';

const props = defineProps({
    text: String,
    more: Boolean
})
</script>

<template>
    <div class="container">
        <h1>
            {{ props.text }}
        </h1>
        <span v-if="more">
            <p>Ver Mais</p>
            <ChevronRight size="18" />
        </span>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

h1 {
    text-align: center;
    font-size: 1rem;
    color: #FFFFFF;
}
</style>