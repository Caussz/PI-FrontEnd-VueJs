<script setup>
import { DefaultAside } from "@/components";
</script>

<template>
  <DefaultAside />
  <main>
    <RouterView />
  </main>
</template>
<style scoped>
main {
  display: flex;
  max-width: 100vw;
  height: 100vh;
  padding-left: 25vw;
}
</style>
