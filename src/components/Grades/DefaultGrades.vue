<script setup>
import { MobileProgress, DesktopGrades } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileProgress v-if="isMobile" />
    <DesktopGrades v-else />
  </section>
</template>
