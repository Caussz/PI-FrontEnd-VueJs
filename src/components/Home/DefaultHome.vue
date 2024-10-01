<script setup>
import { MobileHome, DesktopHome } from "@/components";
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
