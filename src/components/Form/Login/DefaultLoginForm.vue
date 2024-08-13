<script setup>
import { MobileLoginForm, DesktopLoginForm } from "@/components";
import { useScreen } from "@/composables";

const { isMobile } = useScreen();
console.log(isMobile);
</script>

<template>
  <section>
    <MobileLoginForm v-if="isMobile" />
    <DesktopLoginForm v-else />
  </section>
</template>
