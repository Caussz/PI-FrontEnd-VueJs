<script setup>
import DesktopAside from "./Desktop/DesktopAside.vue";
import MobileAside from "./Mobile/MobileAside.vue";

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
console.log(isMobile);
</script>

<template>
  <MobileAside v-if="isMobile" />
  <DesktopAside v-else />
</template>

<style></style>
