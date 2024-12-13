<script setup>
import DesktopAside from "./Desktop/DesktopAside.vue";
import MobileAside from "./Mobile/MobileAside.vue";

import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <MobileAside v-if="isMobile" />
  <DesktopAside v-else />
</template>
