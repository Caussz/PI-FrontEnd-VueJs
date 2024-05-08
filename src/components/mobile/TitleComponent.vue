<script setup>
import { ChevronRight } from '../icons';

const props = defineProps({
    text: String,
    more: Boolean
})
</script>

<template>
    <div class="title-container">
        <h1>
            {{ props.text }}
        </h1>
        <span>
            <p>Ver Mais</p>
            <ChevronRight size="18" />
        </span>
    </div>


</template>

<style scoped>
.title-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

h1 {
    font-size: 1rem;
    color: #FFFFFF;
}

span {
    display: flex;
    color: #525252;
    font-size: .8rem;
    align-items: center;
}
</style>