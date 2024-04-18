<script setup>
import { ChevronLeft } from '../icons';

const props = defineProps({
    text: String,
    outHome: Boolean
})
</script>

<template>
    <div class="container">
        <span v-if="outHome">
            <router-link to="/">
                <ChevronLeft />
            </router-link>
        </span>
        <h1>
            {{ props.text }}
        </h1>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    color: #FFFFFF;
    margin: 7% 0 2% 0;
}

span {
    position: absolute;
    left: 5%;
    color: #FFFFFF;
}

h1 {
    text-align: center;
    font-size: 1rem;
}
</style>