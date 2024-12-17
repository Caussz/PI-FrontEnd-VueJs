<script setup>
import { DefaultAside } from "@/components";
</script>

<template>
  <DefaultAside />
  <main id="router-container">
    <RouterView />
  </main>
</template>
<style scoped>
#router-container {
  display: flex;
  max-width: 100vw;
  height: auto;
  padding-left: 25vw;
}
</style>
