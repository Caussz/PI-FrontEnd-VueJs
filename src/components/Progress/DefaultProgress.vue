<script setup>
import { MobileProgress, DesktopProgress } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileProgress v-if="isMobile" />
    <DesktopProgress v-else />
</template>
