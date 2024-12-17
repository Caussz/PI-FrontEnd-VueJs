<script setup>
import { MobileLoginForm, DesktopLoginForm } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
    <MobileLoginForm v-if="isMobile" />
    <DesktopLoginForm v-else />
</template>
