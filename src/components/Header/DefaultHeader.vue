<script setup>
import { MobileHeader, DesktopHeader } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
(isMobile);
</script>

<template>
    <nav>
        <MobileHeader v-if="isMobile" />
        <DesktopHeader v-else />
    </nav>
</template>
