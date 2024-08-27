<script setup>
import { MobileLoginForm, DesktopLoginForm } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
</script>

<template>
  <section>
    <MobileLoginForm v-if="isMobile" />
    <DesktopLoginForm v-else />
  </section>
</template>
