<script setup>
import LoadingComponent from '@/components/Login/LoadingComponent.vue';

import { useMonitor } from '@/composables/monitor';
import { useScreen } from '@/composables/screen';

const { login } = useMonitor()

const {isMobile} = useScreen()
console.log(isMobile)
</script>

<template>
    <main>
        <LoadingComponent v-if="isMobile"/>
        <component :is="login"/>
    </main>
</template>

<style scoped>

main {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: var(--background-home-color);
    justify-content: center;
    align-items: center;
}

p {
    font-weight: 300;
    font-size: .8rem;
}

h1 {
    margin-bottom: 10%;
    font-weight: 500;
}
</style>