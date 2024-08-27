<script setup>
import { ChevronRight, ChevronLeft } from '@/components/icons';

const props = defineProps({
    text: String,
    more: Boolean,
    outHome: Boolean
});
</script>

<template>
    <div class="container">
        <span class="arrow-container" v-if="outHome">
            <router-link to="/">
                <ChevronLeft />
            </router-link>
        </span>
        <h1 :class="outHome ? 'text-center' : ''">
            {{ props.text }}
        </h1>
        <span class="more-container" v-if="more">
            <p>Ver Mais</p>
            <ChevronRight size="18" />
        </span>
    </div>
</template>

<style scoped>
.text-center {
    margin: auto auto;
    padding: 1rem 0;
}

.container {
    width: 100%;
    max-width: 100%;
    display: flex;
    position: relative;
}

h1 {
    font-size: 1rem;
    color: #FFFFFF;
}

.more-container {
    position: absolute;
    right: 0;
    display: flex;
    color: #525252;
    font-size: .8rem;
    align-items: center;
}

.arrow-container {
    position: absolute;
    left: 5%;
    top: 1rem;
    text-decoration: none;
}

.arrow-container span {
    color: #FFFFFF !important;
}
</style>