<script setup>
import DesktopHome from "./Desktop/DesktopHome.vue";
import MobileHome from "../Home/Mobile/MobileHome.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
console.log(isMobile);
</script>

<template>
    <nav>
        <MobileHome v-if="isMobile" />
        <DesktopHome v-else />
    </nav>
</template>
