<script setup>
import { MobileGrades, DesktopGrades } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileGrades v-if="isMobile" />
    <DesktopGrades v-else />
  </section>
</template>
