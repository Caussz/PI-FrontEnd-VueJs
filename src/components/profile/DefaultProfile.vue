<script setup>
import DesktopProfile from "./Desktop/DesktopProfile.vue";
import MobileProfile from "./Mobile/MobileProfile.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <nav>
    <MobileProfile v-if="isMobile" />
    <DesktopProfile v-else />
  </nav>
</template>
