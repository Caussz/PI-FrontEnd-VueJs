<script setup>
import DesktopLayout from "./Desktop/DesktopLayout.vue";
import MobileLayout from "./Mobile/MobileLayout.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
        <MobileLayout v-if="isMobile" />
        <DesktopLayout v-else />
</template>
