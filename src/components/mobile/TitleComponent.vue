<script setup>
import { ChevronRight } from '../icons';

const props = defineProps({
    text: String,
    more: Boolean
})
</script>

<template>
    <div class="container">
        <span>
            <router-link to="/">
                <ChevronLeft />
            </router-link>
        </span>
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
.container {
    position: relative;
    color: #FFFFFF;
    margin-top: 5%;
}

span {
    position: absolute;
    left: 5%;
}

h1 {
    font-size: 1rem;
}

span {
    display: flex;
    color: #525252;
    font-size: .8rem;
    align-items: center;
}
</style>