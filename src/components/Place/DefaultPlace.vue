<script setup>
import { MobilePlace, DeskTopPlace } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <nav>
        <MobilePlace v-if="isMobile" />
        <DeskTopPlace v-else />
    </nav>
</template>
