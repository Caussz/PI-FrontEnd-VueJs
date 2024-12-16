<script setup>
import { MobileHeader, DesktopHeader } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
(isMobile);
</script>

<template>
        <MobileHeader v-if="isMobile" />
        <DesktopHeader v-else />
</template>
