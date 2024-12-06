<script setup>
import DesktopQuestionnaires from "./Desktop/DesktopQuestionnaires.vue";
import MobileQuestionnaires from "./Mobile/MobileQuestionnaires.vue";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <nav>
    <MobileQuestionnaires v-if="isMobile" />
    <DesktopQuestionnaires v-else />
  </nav>
</template>
